const db = require('../models');
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new Task
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Task
	const module = {
		id: req.body.id,
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false,
		status: req.body.status,
		project: req.body.project,
	};

	// Save Task in the database
	Task.create(module)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while creating the Task.',
			});
		});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Task.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while retrieving modules.',
			});
		});
};

// Find a single Task with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Task.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Task with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Task with id=' + id,
			});
		});
};

// Update a Task by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Task.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Task was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Task with id=' + id,
			});
		});
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Task.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Task was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Task with id=${id}. Maybe Task was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Task with id=' + id,
			});
		});
};

// Delete all Tasks from the database.
exports.deleteAll = (req, res) => {
	Task.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({ message: `${nums} Tasks were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while removing all modules.',
			});
		});
};

// find all published Task
exports.findAllPublished = (req, res) => {
	Task.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while retrieving modules.',
			});
		});
};

/* exports.chat = (req, res) => {
	console.log('chat', process.cwd());
	console.log(process.cwd() + '/public/chat.html');
	res.sendFile(process.cwd() + '/public/chat.html'); 
}; */
