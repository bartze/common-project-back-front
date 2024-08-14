// this is a basic common webpack file to create the build for the react client app

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const paths = {
	reactDist: 'build-react',
	appHtml: './public/index.html',
};

process.env.publicPath = './';

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'main.[contenthash:8].js',
		path: path.resolve(__dirname, paths.reactDist),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin(
			Object.assign(
				{},
				{
					inject: true,
					template: paths.appHtml,
				},
				{
					minify: {
						removeComments: true,
						collapseWhitespace: false,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
						minifyURLs: true,
					},
				},
			),
		),
		new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
			'%PUBLIC_URL%': process.env.publicPath,
		}),
		new WebpackManifestPlugin({
			fileName: 'asset-manifest.json',
			publicPath: paths.reactDist,
			generate: (seed, files, entrypoints) => {
				const manifestFiles = files.reduce((manifest, file) => {
					manifest[file.name] = file.path;
					return manifest;
				}, seed);
				const entrypointFiles = entrypoints.main.filter(
					(fileName) => !fileName.endsWith('.map'),
				);

				return {
					files: manifestFiles,
					entrypoints: entrypointFiles,
				};
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif|ico)$/i,
				type: 'asset',
			},
		],
	},
};
