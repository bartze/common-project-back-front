/**
 * TODO ADD REVEAL REFACTOR CLASS TO THIS FUNCTION
 */

module.exports = (app) => {
	const modules = require('../controllers/modules.controller.js');
	const projects = require('../controllers/projects.controller.js');
	const tasks = require('../controllers/tasks.controller.js');

	const router = require('express').Router();

	// ============================================================= MODULES
	// Create a new Module
	router.post('/module', modules.create);

	// Retrieve all modules
	router.get('/module', modules.findAll);

	// Retrieve all published modules
	router.get('/published', modules.findAllPublished);

	// Retrieve a single Module with id
	router.get('/module/:id', modules.findOne);

	// Update a Module with id
	router.put('/module/:id', modules.update);

	// Delete a Module with id
	router.delete('/module/:id', modules.delete);

	// Delete all modules
	router.delete('/module', modules.deleteAll);

	// ============================================================= TASKS
	// Create a new project
	router.post('/project', projects.create);

	// Retrieve all projects
	router.get('/project', projects.findAll);

	// Retrieve all published projects
	router.get('/project/published', projects.findAllPublished);

	// Retrieve a single project with id
	router.get('/project/:id', projects.findOne);

	// Update a project with id
	router.put('/project/:id', projects.update);

	// Delete a project with id
	router.delete('/project/:id', projects.delete);

	// Delete all projects
	router.delete('/project', projects.deleteAll);

	// ============================================================= TASKS
	// Create a new task
	router.post('/task', tasks.create);

	// Retrieve all tasks
	router.get('/task', tasks.findAll);

	// Retrieve all published tasks
	router.get('/task/published', tasks.findAllPublished);

	// Retrieve a single task with id
	router.get('/task/:id', tasks.findOne);

	// Update a task with id
	router.put('/task/:id', tasks.update);

	// Delete a task with id
	router.delete('/task/:id', tasks.delete);

	// Delete all tasks
	router.delete('/task', tasks.deleteAll);

	app.use('/api', router);
};
