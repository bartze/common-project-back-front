// this is a basic common webpack file to serve the build for the react client app

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('node:path');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = merge(common, {
	mode: 'production',
	devtool: 'inline-source-map',
	target: 'web',
	devServer: {
		port: 8081,
		compress: true,
		https: false,
		static: {
			directory: path.join(__dirname, 'build-react'),
		},

		allowedHosts: 'all',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Headers': '*',
		},
	},
});
