module.exports = {
	HOST: process.env.HOST || 'localhost',
	USER: process.env.USER || 'postgres',
	PASSWORD: process.env.PASSWORD || 'localpassword',
	DB: process.env.DB || 'postgres',
	dialect: process.env.DIALECT || 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
