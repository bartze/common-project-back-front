const db = require('../models');
const Module = db.modules;
const Op = db.Sequelize.Op;

// Create and Save a new Module
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Module
	const module = {
		id: req.body.id,
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false,
		status: req.body.status,
		projects: req.body.projects,
	};

	// Save Module in the database
	Module.create(module)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while creating the Module.',
			});
		});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Module.findAll({ where: condition })
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

// Find a single Module with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Module.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Module with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Module with id=' + id,
			});
		});
};

// Update a Module by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Module.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Module was updated successfully with id. ' + id,
				});
			} else {
				res.send({
					message: `Cannot update Module with id=${id}. Maybe Module was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Module with id=' + id,
			});
		});
};

// Delete a Module with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Module.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Module was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Module with id=${id}. Maybe Module was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Module with id=' + id,
			});
		});
};

// Delete all Modules from the database.
exports.deleteAll = (req, res) => {
	Module.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({ message: `${nums} Modules were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while removing all modules.',
			});
		});
};

// find all published Module
exports.findAllPublished = (req, res) => {
	Module.findAll({ where: { published: true } })
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
