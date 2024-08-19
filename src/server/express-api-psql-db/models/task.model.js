module.exports = (sequelize, Sequelize) => {
	const Task = sequelize.define('Task', {
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
		project: {
			type: Sequelize.STRING,
		},
	});

	return Task;
};
