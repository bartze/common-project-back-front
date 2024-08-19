module.exports = (sequelize, Sequelize) => {
	const Module = sequelize.define('Module', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
		},
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
		projects: {
			type: Sequelize.STRING, // should be another table
		},
	});

	return Module;
};
