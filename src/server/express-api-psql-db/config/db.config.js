const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	HOST: '0.0.0.0' || process.env.HOST,
	USER: 'postgres' || process.env.USER_POSTGRES,
	PASSWORD: 'localpassword' || process.env.PASSWORD,
	DB: 'postgres' || process.env.DB,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
