const express = require('express');
const cors = require('cors');
const setRoutesConfig = require('./express-api-psql-db/routes/modules.routes');
const corsOptions = {
	origin: 'http://localhost:8081',
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutesConfig(app);

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

/* module.exports = {
	httpServer,
	app,
};
 */