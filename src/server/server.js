const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite = require('sqlite3');
const { Server } = require('socket.io');
const setRoutesConfig = require('./express-api-psql-db/routes/modules.routes');
const corsOptions = {
	origin: 'http://localhost:8081',
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutesConfig(app);

// PGSQL DB Section
const db = require('./express-api-psql-db/models');
db.sequelize
	.sync()
	.then((e) => {
		console.log('Synced db.');
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err.message);
	});

// PORT FOR API REST - Check the use with 8081
const PORT = 8082;

const httpServer = app.listen(PORT, () => {
	console.log(`API Services Server is running on port ${PORT}.`);
});

httpServer.on('error', (err) => {
	console.error('Error starting the server:', err);
});

/* CHAT WEB SOCKET SQLITE */
sqlite.verbose();

const dblite = new sqlite.Database(
	path.resolve(__dirname, 'websocket-chat-server/db/data.db'),
	sqlite.OPEN_READWRITE,
	(err) => {
		if (err) return console.error(err);
	},
);

dblite.on('open', () => {
	console.log('Connected to the SQLite database.');
});

dblite.on('error', (err) => {
	console.error('Error connecting to the SQLite database:', err);
});

// Websocket server

const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:8081',
	},
});

io.on('connection', (socket) => {
	console.log('A user connected:', socket.id);

	socket.on('disconnect', () => {
		console.log('A user disconnected:', socket.id);
	});
});

io.on('error', (err) => {
	console.error('Error with the websocket server:', err);
});

io.listen(8083);
