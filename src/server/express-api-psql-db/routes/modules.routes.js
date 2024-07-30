module.exports = (app) => {
	const modules = require('../controllers/modules.controller.js');

	const router = require('express').Router();

	// Create a new Tutorial
	router.post('/', modules.create);

	// Retrieve all modules
	router.get('/', modules.findAll);

	// Retrieve all published modules
	router.get('/published', modules.findAllPublished);

	// Retrieve a single Tutorial with id
	router.get('/:id', modules.findOne);

	// router.get('/chat', modules.chat); // chat should be in charge after move the client

	// Update a Tutorial with id
	router.put('/:id', modules.update);

	// Delete a Tutorial with id
	router.delete('/:id', modules.delete);

	// Delete all modules
	router.delete('/', modules.deleteAll);

	app.use('/api/modules', router);
};
