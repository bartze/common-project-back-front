import { env, AutoTokenizer } from '@xenova/transformers';
import { LLM } from './llm.js';
import { marked } from 'marked';

export let config;
export let response;

let context = '';
let input = '';

const MODELS = {
	phi3: {
		name: 'phi3',
		path: 'microsoft/Phi-3-mini-4k-instruct-onnx-web',
		externaldata: true,
	},
	phi3dev: {
		name: 'phi3dev',
		path: 'schmuell/Phi-3-mini-4k-instruct-onnx-web',
		externaldata: true,
	},
};
const clipboardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;

function log(i) {
	console.log(i);
	document.getElementById('status').innerText += `\n${i}`;
}

export function addMessageToList(i) {
	console.log(i);
	document.getElementById('chat-history').innerText += `\n${i}`;
}

marked.use({ mangle: false, headerIds: false });
var initLLMLib = false;
let tokenizer = undefined;

const llm = new LLM();
config = getConfig();
setTokenizer();

//
// user hits send, enter or ctl enter
//
export async function submitRequest(input, context) {
	const continuation = true;

	if (context === undefined) {
		context = '';
	}

	if (continuation) {
		input = context + ' ' + input;
	}

	Query(continuation, input, async (word) => {
		// console.log('word is:', word);
		response = await marked.parse(word, { async: true });
		//console.log('response is:', response);
	})
		.then(() => {
			console.log('Response is:', response);
		})
		.catch((error) => {
			console.error(error);
		});
}

function getConfig() {
	let query = window.location.search.substring(1);
	config = {
		model: 'phi3',
		provider: 'webgpu',
		profiler: 0,
		verbose: 0,
		threads: 1,
		show_special: 0,
		csv: 0,
		max_tokens: 9999,
		local: 0,
	};
	let vars = query.split('&');
	console.warn(vars);

	for (var i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');
		if (pair[0] in config) {
			const key = pair[0];
			const value = decodeURIComponent(pair[1]);
			if (typeof config[key] == 'number') {
				config[key] = parseInt(value);
			} else {
				config[key] = value;
			}
		} else if (pair[0].length > 0) {
			throw new Error('unknown argument: ' + pair[0]);
		}
	}
	if (MODELS[config.model] !== undefined) {
		config.model = MODELS[config.model];
	}

	console.warn(config);
	return config;
}

function setTokenizer() {
	// setup for transformers.js tokenizer
	env.localModelPath = 'models';
	env.allowRemoteModels = config.local == 0;
	env.allowLocalModels = config.local == 1;
}

function token_to_text(tokenizer, tokens, startidx) {
	const txt = tokenizer.decode(tokens.slice(startidx), {
		skip_special_tokens: config.show_special != 1,
	});
	return txt;
}

async function Query(continuation, query, cb) {
	let prompt = continuation
		? query
		: `<|system|>\nYou are a friendly assistant.<|end|>\n<|user|>\n${query}<|end|>\n<|assistant|>\n`;

	const { input_ids } = await tokenizer(prompt, {
		return_tensor: false,
		padding: true,
		truncation: true,
	});

	// clear caches
	// TODO: use kv_cache for continuation // ??
	llm.initilize_feed();

	const start_timer = performance.now();
	const output_index = llm.output_tokens.length + input_ids.length;
	const output_tokens = await llm.generate(
		input_ids,
		(output_tokens) => {
			if (output_tokens.length === input_ids.length + 1) {
				// time to first token
				const took = (performance.now() - start_timer) / 1000;
				console.log(
					`time to first token in ${took.toFixed(1)}sec, ${
						input_ids.length
					} tokens`,
				);
			}
			cb(token_to_text(tokenizer, output_tokens, output_index));
		},
		{ max_tokens: config.max_tokens },
	);

	const took = (performance.now() - start_timer) / 1000;
	cb(token_to_text(tokenizer, output_tokens, output_index));
	const seqlen = output_tokens.length - output_index;
	console.log(
		`${seqlen} tokens in ${took.toFixed(1)}sec, ${(seqlen / took).toFixed(
			2,
		)} tokens/sec`,
	);
}

//
// Load the model and tokenizer
//
async function Init(hasFP16) {
	try {
		if (tokenizer === !undefined) return;

		tokenizer = await AutoTokenizer.from_pretrained(config.model.path);

		await llm.load(config.model, {
			provider: config.provider,
			profiler: config.profiler,
			verbose: config.verbose,
			local: config.local,
			max_tokens: config.max_tokens,
			hasFP16: hasFP16,
		});
		log('Ready!');
	} catch (error) {
		log(error);
	}
}

//
// Check if we have webgpu and fp16
//
async function hasWebGPU() {
	// returns 0 for webgpu with f16, 1 for webgpu without f16, 2 for no webgpu
	if (!('gpu' in navigator)) {
		return 2;
	}
	try {
		const adapter = await navigator.gpu.requestAdapter();
		if (adapter.features.has('shader-f16')) {
			return 0;
		}
		return 1;
	} catch (e) {
		return 2;
	}
}

export const checkGPUandInitialize = async () => {
	hasWebGPU().then((supported) => {
		if (supported < 2) {
			if (supported === 1) {
				console.log(
					'Your GPU or Browser does not support webgpu with fp16, using fp32 instead.',
				);
			}
			if (initLLMLib === false) {
				log('Chat AI is initializing...');
				Init(supported === 0)
					.then(() => {
						initLLMLib = true;
						log('Chat AI initialized');
					})
					.catch((error) => {
						initLLMLib = false;
						log('Error initializing the ia module', error);
					});
			} else {
				log('Chat AI is already initialized');
				submitRequest(
					{ key: 'Enter', ctrlKey: false },
					'hola itziar',
					'hemos estado hablando un rato de gastronomia',
				);
			}
		} else {
			log('Your GPU or Browser does not support webgpu');
		}
	});
};
