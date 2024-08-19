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

function setId() {
	return crypto.randomUUID();
}

// funcion de crud sobre los datos de demostración
// el objetivo es tener un modo de controlar los datos
// de tal manera que si vamos a usar pop ups
// si creamos modulos proyectos y tareas
// podamos controlar su relación desde el front inicialmente
// para posteriormente pasar a un sistema de consultas mas sofisticado
function update_state(
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
update_state('createModule', {
	title: 'Database Development',
	description:
		'Learn to design and implement databases for web applications.',
	status: 'Active',
	published: true,
	projects: [],
});

// Create a new project under an existing module
update_state(
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
update_state(
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

console.table('===========INIT DONE===============');
console.table(state.modules);

update_state('createModule', {
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
	console.log(id, data);
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

function addModule() {
	const homeContent = document.querySelector('.main-content');
	// refactor task - add feedback with html
	if (!homeContent) alert("Error - The module can't be created");

	const id = setId();
	// refactor task - cache elements on variables
	const moduleTitle = document.getElementById('module-title').value;

	createModule({
		id,
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
			<div id="${moduleTitle}" class="projects-cards-container"></div>
        </div>
      </div>
  `;

	hidePopup('add-module');
	resetUI();
}

function editModule() {
	const moduleTitle = document.getElementById('edit-module-title').value;

	if (!moduleTitle) alert("Error - The module can't be edited");

	const id = setId();
	document.getElementById(selectedModule.innerText).id = moduleTitle;
	// pruebas con data y uuid
	/* if (document.getElementById(selectedModule.innerText).data) {
		document.getElementById(selectedModule.innerText).data = id;
	}
	 */ selectedModule.innerText = moduleTitle;

	updateModule({
		id,
		title: moduleTitle,
		description: 'Description',
		published: true,
		status: 'doing',
		projects: 'none',
	});

	hidePopup('edit-module');
	// unselect the module after confirm
	selectModule(selectedModule);
	resetUI();
}

function removeModule() {
	// deleteModule();
	console.log(selectedModule);
	console.log(state);

	// use update_state to check the projects
	selectedModule.remove();
	console.log(selectedModule.nextElementSibling);
	if (selectedModule.nextElementSibling) {
		selectProject(selectedModule.nextElementSibling);
		selectedProject.remove();
	}
	hidePopup('remove-module');
	// reset ui buttons
	resetUI;
}

function selectModule(node) {
	if (!node) resetUI();

	if (selectedModule === null) {
		selectedModule = node;
		if (node) node.style.color = 'orange';
		document.getElementById('add-module-button').style.display = 'none';
		document.getElementById('add-project-button').style.display = 'none';
		document.getElementById('edit-module-button').style.display = 'block';
		document.getElementById('remove-module-button').style.display = 'block';
	} else {
		selectedModule = null;
		if (node) node.style.color = 'black';
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
	const projectCard = document.getElementById(moduleTitle);

	if (!projectCard) alert('Error - The project name is incorrect');

	const projectTitle = document.getElementById('project-title').value;
	const projectDescription = document.getElementById(
		'project-description',
	).value;

	const id = setId();

	createProject({
		id,
		title: projectTitle,
		description: projectDescription,
		published: true,
		status: 'doing',
		module: moduleTitle,
		tasks: 'none',
	});

	projectCard.innerHTML += `
    <div id=${projectTitle} class="card" data=${id} onclick="selectProject(this)">
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

	const projectCard = document.getElementById(selectedProject.parentNode.id);

	if (!projectCard) alert('Error - The project name is incorrect');

	// use this id in the dom refacotr
	const id = setId();

	updateProject({
		id,
		title: projectTitle,
		description: projectDescription,
		published: true,
		status: 'doing',
		module: selectedProject.parentNode.id,
		tasks: 'none',
	});

	projectCard.innerHTML = `
    <div id=${projectTitle} class="card" data=${id} onclick="selectProject(this)">
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
	if (!node) resetUI();

	if (selectedProject === null) {
		selectedProject = node;
		if (node) node.style.border = 'solid 2px orange';
		document.getElementById('add-module-button').style.display = 'none';
		document.getElementById('add-project-button').style.display = 'none';
		document.getElementById('edit-project-button').style.display = 'block';
		document.getElementById('remove-project-button').style.display =
			'block';
	} else {
		selectedProject = null;
		if (node) node.removeAttribute('style');
		document.getElementById('add-module-button').style.display = 'block';
		document.getElementById('add-project-button').style.display = 'block';
		document.getElementById('edit-project-button').style.display = 'none';
		document.getElementById('remove-project-button').style.display = 'none';
	}
}

function removeProject() {
	// deleteModule();
	console.log(selectedProject);
	console.log(state);
	// use update_state to check the projects
	selectedProject.remove();
	hidePopup('remove-project');
	resetUI();
}

function addTask(event) {
	event.preventDefault();

	const id = setId();
	const title = document.getElementById('task-title').value;
	const description = document.getElementById('task-description').placeholder;
	const project = document.getElementById('task-project').value;
	const status = document.getElementById('task-status').value;

	const data = {
		id,
		title,
		description,
		project,
		status,
		published: true,
	};

	createTask(data);
	const tasksTable = document.getElementById('task-list');
	const task = generateTableEntry(data);
	tasksTable.appendChild(task);
}

// sustituir tabla por componente devextreme ;)

function generateTableEntry({
	id,
	title,
	description,
	project,
	status,
	published,
}) {
	// Crea un nuevo elemento de tabla (tr)
	const tableRow = document.createElement('tr');
	tableRow.style = 'border: 1px dashed darkblue; text-align: center;';

	// Crea celdas de tabla (td) para cada dato
	const titleCell = document.createElement('td');
	titleCell.textContent = title;
	tableRow.appendChild(titleCell);

	const projectNameCell = document.createElement('td');
	projectNameCell.textContent = project;
	tableRow.appendChild(projectNameCell);

	const descriptionCell = document.createElement('td');
	descriptionCell.textContent = description;
	tableRow.appendChild(descriptionCell);

	const statusCell = document.createElement('td');
	statusCell.textContent = status;
	tableRow.appendChild(statusCell);

	const publishedCell = document.createElement('td');
	publishedCell.textContent = published;
	tableRow.appendChild(publishedCell);

	tableRow.setAttribute('id', id);
	tableRow.setAttribute(
		'onclick',
		"confirm('¿Quieres eliminar la tarea con id' + this.id);",
	);

	// Devuelve la fila de tabla creada
	return tableRow;
}

function resetUI() {
	document.getElementById('add-module-button').style.display = 'block';
	document.getElementById('add-project-button').style.display = 'block';
	document.getElementById('edit-project-button').style.display = 'none';
	document.getElementById('remove-project-button').style.display = 'none';
}
