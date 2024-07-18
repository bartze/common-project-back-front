import React, { Component } from 'react';
import { withRouter } from '../../common/with-router';
//import { Socket } from 'socket.io';

class Chat extends Component {
	socketIOClientHandler() {
		const socket = window.io('localhost:8081');

		socket.on('connect', function (e) {
			console.log('Connected', e, ' to socket', socket.id);
		});

		console.log(socket.on(), socket.id);
		// usar referencias de react
		const messages = document.getElementById('messages');
		const form = document.getElementById('form');
		const input = document.getElementById('input');

		socket.on('chat message', function (msg) {
			// usar referencias de react
			const item = document.createElement('li');
			item.textContent = msg;
			messages.appendChild(item);
			// check scrolling in react
			// window.scrollTo(0, document.body.scrollHeight);
		});

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			if (input.value) {
				console.log('input', input.value);
				socket.emit('chat message', input.value);
				input.value = '';
			}
		});
	}

	componentDidMount() {
		this.socketIOClientHandler();
	}

	render() {
		return (
			<div>
				<h2>Chat</h2>
				<p>Welcome to the Chat</p>

				<ul id="messages"></ul>

				<form id="form" action="">
					<input id="input" />
					<button>Send</button>
				</form>
				<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
			</div>
		);
	}
}
//<script src="/socket.io/socket.io.js"></script>

export default withRouter(Chat);
