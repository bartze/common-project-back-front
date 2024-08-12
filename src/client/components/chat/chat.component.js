import React, { /* useState, */ useEffect } from 'react';
import { withRouter } from '../../common/with-router';
import { checkGPUandInitialize, submitRequest } from './chat.ai';
import * as socketIO from './socket.js';
import './chat.component.css';

let chatHistory = '';
let socket = undefined;
let input;
let chatInitialized = false;

function Chat() {
	/* 	const [inputMessageValue, setInputMessageValue] = useState('');
	const [chatHistoryValue, setChatHistoryValue] = useState(''); */

	const socketIOClientHandler = () => {
		if (socket !== undefined) return; // avoid initializing socket multiple times, use hooks

		socket = socketIO('localhost:8083');
		socket.on('connect', () =>
			console.log('Initialized connection to socket', socket.id),
		);

		// mover a state con hooks
		chatHistory = document.getElementById('messages');
		input = document.getElementById('user-input');

		socket.on('chat message', function (msg) {
			const item = document.createElement('li');
			console.log('msg');
			item.textContent = msg;
			chatHistory.appendChild(item);
			input.value = '';
			input.focus();
		});
	};

	const initialiazeIA = async () => {
		try {
			await checkGPUandInitialize();
			chatInitialized = true;
		} catch (error) {
			chatInitialized = false;
			console.error('Error initializing chat AI', error);
		}
	};

	useEffect(() => {
		console.log('useEffect once, []');
		socketIOClientHandler();
	});

	const socketMessage = async () => {
		//setChatHistoryValue(input);
		if (input.value.includes('dasGPT')) {
			const response = await submitRequest(input.value, '');
			socket.emit('chat message', response);
		} else {
			socket.emit('chat message', input.value);
		}
	};

	return (
		<div>
			<div className="container">
				<div className="row pt-3">
					<div className="col-md-8 col-12">
						<h2>Welcome to the Chat</h2>
						{chatInitialized && <span>Chat ready</span>}
						<button
							id="send-button-ia"
							className="btn btn-primary send-button"
							onClick={() => initialiazeIA()}
						>
							Load AI ALBAGPT
						</button>
					</div>
				</div>
				<div id="messages"></div>
			</div>
			<div className="input-container">
				<div className="container p-0 card-chat">
					<div className="input-group">
						<textarea
							className="form-control"
							id="user-input"
							placeholder="Type your message here ..."
						></textarea>
					</div>
				</div>

				<button
					id="send-button-chat"
					className="btn btn-primary send-button"
					onClick={() => socketMessage()}
				>
					Send Message
				</button>
			</div>
			<div id="status"></div>
			<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
		</div>
	);
}

//<script src="/socket.io/socket.io.js"></script>

export default withRouter(Chat);
