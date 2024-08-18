const { type } = require('os');

module.exports = (sequelize, Sequelize) => {
	const Project = sequelize.define('Project', {
		title: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		published: {
			type: Sequelize.BOOLEAN,
		},
		status: {
			type: Sequelize.STRING,
		},
		module: {
			type: Sequelize.STRING, // should be a primary keyetc..
		},
		tasks: {
			type: Sequelize.STRING, // should be another table
		},
	});

	return Project;
};
