// datos de demostración
const state = {
	modules: [
		{
			title: 'Frontend Development',
			description:
				'Learn the fundamentals of building interactive user interfaces.',
			status: 'Active',
			published: true,
			projects: [
				{
					title: 'HTML & CSS Basics',
					description:
						'Master the core building blocks of web pages.',
					published: true,
					status: 'Completed',
					tasks: [
						{
							title: 'Learn HTML Structure',
							description:
								'Understand elements, tags, and attributes.',
							published: true,
							status: 'Completed',
							project: 'HTML & CSS Basics',
						},
						{
							title: 'Explore CSS Styling',
							description:
								'Apply styles to elements using CSS properties.',
							published: true,
							status: 'Completed',
							project: 'HTML & CSS Basics',
						},
					],
					module: 'Frontend Development',
				},
				{
					title: 'JavaScript Fundamentals',
					description:
						'Dive into the world of JavaScript programming.',
					published: true,
					status: 'In Progress',
					tasks: [
						{
							title: 'Variables, Data Types, and Operators',
							description:
								'Learn the basics of JavaScript programming.',
							published: true,
							status: 'Completed',
							project: 'JavaScript Fundamentals',
						},
						{
							title: 'Functions and Control Flow',
							description:
								'Write code that executes different actions based on conditions.',
							published: true,
							status: 'In Progress',
							project: 'JavaScript Fundamentals',
						},
					],
					module: 'Frontend Development',
				},
			],
		},
		{
			title: 'Backend Development',
			description:
				'Learn to build the server-side logic of web applications.',
			status: 'Active',
			published: true,
			projects: [
				{
					title: 'Node.js Basics',
					description:
						'Learn the fundamentals of Node.js for backend development.',
					published: true,
					status: 'Not Started',
					tasks: [],
					module: 'Backend Development',
				},
			],
		},
	],
};

// funcion de crud sobre los datos de demostración
// el objetivo es tener un modo de controlar los datos
// de tal manera que si vamos a usar pop ups
// si creamos modulos proyectos y tareas
// podamos controlar su relación desde el front inicialmente
// para posteriormente pasar a un sistema de consultas mas sofisticado
function crudJson(
	operation,
	data,
	moduleTitle = null,
	projectTitle = null,
	taskTitle = null,
) {
	switch (operation) {
		case 'createModule':
			state.modules.push(data);
			clean();
			break;
		case 'createProject': {
			const moduleIndex = findModuleIndex(moduleTitle);
			if (moduleIndex !== -1) {
				state.modules[moduleIndex].projects.push(data);
			} else {
				console.error(`Module '${moduleTitle}' not found.`);
			}
			clean();
			break;
		}
		case 'createTask': {
			const moduleIndex = findModuleIndex(moduleTitle);
			const projectIndex = findProjectIndex(moduleIndex, projectTitle);
			if (moduleIndex !== -1 && projectIndex !== -1) {
				state.modules[moduleIndex].projects[projectIndex].tasks.push(
					data,
				);
			} else {
				console.error(
					`Module '${moduleTitle}' or Project '${projectTitle}' not found.`,
				);
			}
			clean();
			break;
		}
		case 'updateModule': {
			const moduleIndex = findModuleIndex(moduleTitle);
			if (moduleIndex !== -1) {
				Object.assign(state.modules[moduleIndex], data);
			} else {
				console.error(`Module '${moduleTitle}' not found.`);
			}
			clean();
			break;
		}
		case 'updateProject': {
			const moduleIndex = findModuleIndex(moduleTitle);
			const projectIndex = findProjectIndex(moduleIndex, projectTitle);
			if (moduleIndex !== -1 && projectIndex !== -1) {
				Object.assign(
					state.modules[moduleIndex].projects[projectIndex],
					data,
				);
			} else {
				console.error(
					`Module '${moduleTitle}' or Project '${projectTitle}' not found.`,
				);
			}
			clean();
			break;
		}
		case 'updateTask': {
			const moduleIndex = findModuleIndex(moduleTitle);
			const projectIndex = findProjectIndex(moduleIndex, projectTitle);
			const taskIndex = findTaskIndex(projectIndex, taskTitle);
			if (moduleIndex !== -1 && projectIndex !== -1 && taskIndex !== -1) {
				Object.assign(
					state.modules[moduleIndex].projects[projectIndex].tasks[
						taskIndex
					],
					data,
				);
			} else {
				console.error(
					`Module '${moduleTitle}' or Project '${projectTitle}' or Task '${taskTitle}' not found.`,
				);
			}
			clean();
			break;
		}
		case 'deleteModule': {
			const moduleIndex = findModuleIndex(moduleTitle);
			if (moduleIndex !== -1) {
				state.modules.splice(moduleIndex, 1);
			} else {
				console.error(`Module '${moduleTitle}' not found.`);
			}
			clean();
			break;
		}
		case 'deleteProject': {
			const moduleIndex = findModuleIndex(moduleTitle);
			const projectIndex = findProjectIndex(moduleIndex, projectTitle);
			if (moduleIndex !== -1 && projectIndex !== -1) {
				state.modules[moduleIndex].projects.splice(projectIndex, 1);
			} else {
				console.error(
					`Module '${moduleTitle}' or Project '${projectTitle}' not found.`,
				);
			}
			clean();
			break;
		}
		case 'deleteTask': {
			const moduleIndex = findModuleIndex(moduleTitle);
			const projectIndex = findProjectIndex(moduleIndex, projectTitle);
			const taskIndex = findTaskIndex(projectIndex, taskTitle);
			if (moduleIndex !== -1 && projectIndex !== -1 && taskIndex !== -1) {
				state.modules[moduleIndex].projects[projectIndex].tasks.splice(
					taskIndex,
					1,
				);
			} else {
				console.error(
					`Module '${moduleTitle}' or Project '${projectTitle}' or Task '${taskTitle}' not found.`,
				);
			}
			clean();
			break;
		}
		default:
			console.error(`Invalid operation: ${operation}`);
	}
}

function clean(cleanModules, cleanProjects) {
	// Consistency checks and data cleanup:

	if (cleanProjects) {
		console.warn('cleaning projects data...');
		// 1. Remove empty projects from modules
		state.modules.forEach((module) => {
			module.projects = module.projects.filter(
				(project) => project.tasks.length > 0,
			);
		});
	}

	if (cleanModules) {
		console.warn('cleaning modules data...');
		// 2. Remove empty modules
		state.modules = state.modules.filter(
			(module) => module.projects.length > 0,
		);
	}
}

// utilidades para el crud json
function findModuleIndex(moduleTitle) {
	return state.modules.findIndex((module) => module.title === moduleTitle);
}

function findProjectIndex(moduleIndex, projectTitle) {
	return state.modules[moduleIndex].projects.findIndex(
		(project) => project.title === projectTitle,
	);
}

function findTaskIndex(projectIndex, taskTitle) {
	return state.modules[0].projects[projectIndex].tasks.findIndex(
		(task) => task.title === taskTitle,
	);
}

// Example usage:
console.table('===========INITIALIZING MEMORY TABLE===============');
console.table(state.modules);

// Create a new module
crudJson('createModule', {
	title: 'Database Development',
	description:
		'Learn to design and implement databases for web applications.',
	status: 'Active',
	published: true,
	projects: [],
});

// Create a new project under an existing module
crudJson(
	'createProject',
	{
		title: 'SQL Fundamentals',
		description: 'Master the fundamentals of SQL for database management.',
		published: true,
		status: 'Not Started',
		tasks: [],
		module: 'Database Development',
	},
	'Database Development',
	'SQL Fundamentals',
);

// Create a new task under an existing project
crudJson(
	'createTask',
	{
		title: 'Learn SQL Syntax',
		description: 'Understand the basic syntax of SQL commands.',
		published: true,
		status: 'Not Started',
		project: 'SQL Fundamentals',
	},
	'Database Development',
	'SQL Fundamentals',
	'Learn SQL Syntax',
);

/* // Update a module
crudJson(
	'updateModule',
	{
		description:
			'Learn how to design and implement robust databases for web applications.',
	},
	'Database Development',
);

// Update a project
crudJson(
	'updateProject',
	{
		status: 'In Progress',
	},
	'Database Development',
	'SQL Fundamentals',
);

// Update a task
crudJson(
	'updateTask',
	{
		status: 'Completed',
	},
	'Database Development',
	'SQL Fundamentals',
	'Learn SQL Syntax',
); */

console.table('===========INIT DONE===============');
console.table(state.modules);

/* // Delete a task
crudJson("deleteTask", null, "Database Development", "SQL Fundamentals", "Learn SQL Syntax");

// Delete a project (will be deleted if empty)
crudJson("deleteProject", null, "Database Development", "SQL Fundamentals");

// Delete a module (will be deleted if empty)
crudJson("deleteModule", null, "Database Development"); */

crudJson('createModule', {
	title: 'Database Code Review and Refactor',
	description:
		'Learn to refactor the implemented databases for the current web application.',
	status: 'Pending',
	published: false,
	projects: [],
});

console.table('===========CRUD OPERATIONS CHECK===============');
console.table(state.modules);

const http = axios.create({
	baseURL: 'http://localhost:8082/api',
	headers: {
		'Content-type': 'application/json',
	},
});

/// MODULE

function getAllModule() {
	return http.get('/module');
}

function getModule(id) {
	return http.get(`/module/${id}`);
}

function createModule(data) {
	return http.post('/module', data);
}

function updateModule(id, data) {
	return http.put(`/module/${id}`, data);
}

function deleteModule(id) {
	return http.delete(`/module/${id}`);
}

function deleteAllModule() {
	return http.delete(`/module`);
}

function findModuleByTitle(title) {
	return http.get(`/module?title=${title}`);
}

/// PROJECT

function getAllProject() {
	return http.get('/project');
}

function getProject(id) {
	return http.get(`/project/${id}`);
}

function createProject(data) {
	return http.post('/project', data);
}

function updateProject(id, data) {
	return http.put(`/project/${id}`, data);
}

function deleteProject(id) {
	return http.delete(`/project/${id}`);
}

function deleteAllProject() {
	return http.delete(`/project`);
}

function findProjectByTitle(title) {
	return http.get(`/project?title=${title}`);
}

/// TASK

function getAllTask() {
	return http.get('/task');
}

function getTask(id) {
	return http.get(`/task/${id}`);
}

function createTask(data) {
	return http.post('/task', data);
}

function updateTask(id, data) {
	return http.put(`/task/${id}`, data);
}

function deleteTask(id) {
	return http.delete(`/task/${id}`);
}

function deleteAllTask() {
	return http.delete(`/task`);
}

function findTaskByTitle(title) {
	return http.get(`/task?title=${title}`);
}

function showContent(id) {
	const contentElements = document.querySelectorAll('.content > div');
	contentElements.forEach((element) => (element.style.display = 'none'));
	document.getElementById(id).style.display = 'block';
}

function showPopup(id) {
	const popup = document.getElementById(id);
	popup.style.display = 'block';
	popup.querySelector('input').focus();
}

function hidePopup(id) {
	document.getElementById(id).style.display = 'none';
}

let selectedModule = null;

function addModule(element) {
	// refactor task - cache elements on variables
	const moduleTitle = document.getElementById('module-title').value;

	const homeContent = document.querySelector('.main-content');

	// refactor task - add feedback with html
	if (!homeContent) alert("Error - The module can't be created");

	createModule({
		id: null,
		title: moduleTitle,
		description: 'Description',
		published: true,
		status: 'doing',
		projects: 'none',
	});

	homeContent.innerHTML += `
      <div class="main-content-container">
	  	<div class="projects-container">
	  		<h2 onclick="selectModule(this)">${moduleTitle}</h2>
			<div id="${moduleTitle}" class="projects-cards-container" onclick="selectProject(this)"></div>
        </div>
      </div>
  `;

	hidePopup('add-module');
}

function editModule() {
	const moduleTitle = document.getElementById('edit-module-title').value;

	selectedModule.innerText = moduleTitle;

	updateModule({
		id: null,
		title: moduleTitle,
		description: 'Description',
		published: true,
		status: 'doing',
		projects: 'none',
	});

	hidePopup('edit-module');
	selectModule(selectedModule);
}

function removeModule(id) {
	deleteModule(id);
}

function selectModule(node) {
	if (selectedModule === null) {
		selectedModule = node;
		node.style.color = 'orange';
		document.getElementById('add-module-button').style.display = 'none';
		document.getElementById('add-project-button').style.display = 'none';
		document.getElementById('edit-module-button').style.display = 'block';
		document.getElementById('remove-module-button').style.display = 'block';
	} else {
		selectedModule = null;
		node.style.color = 'black';
		document.getElementById('add-module-button').style.display = 'block';
		document.getElementById('add-project-button').style.display = 'block';
		document.getElementById('edit-module-button').style.display = 'none';
		document.getElementById('remove-module-button').style.display = 'none';
	}
}

let selectedProject = null;

function addProject() {
	const moduleTitle = document
		.getElementById('module-project-title')
		.value.trim();

	const projectTitle = document.getElementById('project-title').value;
	const projectDescription = document.getElementById(
		'project-description',
	).value;

	const projectCard = document.getElementById(moduleTitle);

	if (!projectCard) alert('Error - The project name is incorrect');

	createProject({
		id: null,
		title: projectTitle,
		description: projectDescription,
		published: true,
		status: 'doing',
		module: moduleTitle,
		tasks: 'none',
	});

	projectCard.innerHTML += `
    							<div class="card">
									<h3>${projectTitle}</h3>
									<p>
										${projectDescription}
									</p>
									<div class="action-container">
										<img
											src="Assets/icons/like.svg"
											alt="Like Icon"
										/>
										<img
											src="Assets/icons/follow.svg"
											alt="Follow Icon"
										/>
										<img
											src="Assets/icons/connect.svg"
											alt="Connect Icon"
										/>
									</div>
								</div>
    </div>
  </div>
`;

	hidePopup('add-project');
}

function editProject() {
	const projectTitle = document.getElementById('edit-project-title').value;
	const projectDescription = document.getElementById(
		'edit-project-description',
	).value;

	const projectCard = document.getElementById(selectedProject.id);

	if (!projectCard) alert('Error - The project name is incorrect');

	updateProject({
		id: null,
		title: projectTitle,
		description: projectDescription,
		published: true,
		status: 'doing',
		module: selectedProject.id,
		tasks: 'none',
	});

	projectCard.innerHTML = `
    <div class="card">
									<h3>${projectTitle}</h3>
									<p>
										${projectDescription}
									</p>
									<div class="action-container">
										<img
											src="Assets/icons/like.svg"
											alt="Like Icon"
										/>
										<img
											src="Assets/icons/follow.svg"
											alt="Follow Icon"
										/>
										<img
											src="Assets/icons/connect.svg"
											alt="Connect Icon"
										/>
									</div>
								</div>
    </div>
  </div>
`;

	hidePopup('edit-project');
	selectProject(selectedProject);
}

function selectProject(node) {
	if (selectedProject === null) {
		selectedProject = node;
		node.style.border = 'solid 2px orange';
		document.getElementById('add-module-button').style.display = 'none';
		document.getElementById('add-project-button').style.display = 'none';
		document.getElementById('edit-project-button').style.display = 'block';
		document.getElementById('remove-project-button').style.display =
			'block';
	} else {
		selectedProject = null;
		node.removeAttribute('style');
		document.getElementById('add-module-button').style.display = 'block';
		document.getElementById('add-project-button').style.display = 'block';
		document.getElementById('edit-project-button').style.display = 'none';
		document.getElementById('remove-project-button').style.display = 'none';
	}
}

function addTask(event) {
	event.preventDefault();

	console.log('form event =>', event);
	const taskTitle = document.getElementById('task-title').value;
	const taskDescription = document.getElementById('task-description').value;
	const status = document.getElementById('task-status').value;
	const projectTitle = document.getElementById('task-project').value;

	createTask({
		id: null,
		title: taskTitle,
		description: taskDescription,
		published: true,
		status,
		project: projectTitle,
	});

	const tasksTable = document.getElementById('task-list');

	const task = generateTableEntry(
		taskTitle,
		taskDescription,
		projectTitle,
		status,
	);

	tasksTable.appendChild(task);
}

function generateTableEntry(title, description, projectName, status) {
	// Crea un nuevo elemento de tabla (tr)
	const tableRow = document.createElement('tr');

	tableRow.style = 'border: 1px dashed darkblue';
	// Crea celdas de tabla (td) para cada dato
	const titleCell = document.createElement('td');
	titleCell.textContent = title;
	tableRow.appendChild(titleCell);

	const descriptionCell = document.createElement('td');
	descriptionCell.textContent = description;
	tableRow.appendChild(descriptionCell);

	const projectNameCell = document.createElement('td');
	projectNameCell.textContent = projectName;
	tableRow.appendChild(projectNameCell);

	const statusCell = document.createElement('td');
	statusCell.textContent = status;
	tableRow.appendChild(statusCell);

	// Devuelve la fila de tabla creada
	return tableRow;
}
