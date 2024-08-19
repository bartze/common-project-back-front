import React, { useState, createContext, useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	// useNavigate,
} from 'react-router-dom';
import Chat from './components/chat/chat.component';
import Tasks from './components/tasks/tasks.component';
import Games from './components/games/games.component';
import Profile from './components/profile/profile.component';
import './App.css';
import Components from './components/catalog/catalog.component';

// Context for managing modules and projects
const AppContext = createContext();

const App = () => {
	// State for modules
	const [modules, setModules] = useState([
		{
			id: 1,
			title: 'Programming Introduction',
			projects: [
				{
					id: 1,
					title: 'Super Cool Project',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				},
			],
		},
	]);

	// State for selected module and project
	const [selectedModule, setSelectedModule] = useState(null);
	const [selectedProject, setSelectedProject] = useState(null);

	//const navigate = useNavigate();

	// Function to add a new module
	const addModule = () => {
		const newModule = {
			id: modules.length + 1,
			title: `Module ${modules.length + 1}`,
			projects: [],
		};
		setModules([...modules, newModule]);
		//navigate(`/module/${newModule.id}`); // Navigate to the new module
	};

	// Function to add a new project to a module
	const addProject = (moduleId) => {
		const updatedModules = modules.map((module) => {
			if (module.id === moduleId) {
				const newProject = {
					id: module.projects.length + 1,
					title: `Project ${module.projects.length + 1}`,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				};
				return {
					...module,
					projects: [...module.projects, newProject],
				};
			}
			return module;
		});
		setModules(updatedModules);
	};

	// Function to delete a module
	const deleteModule = (moduleId) => {
		setModules(modules.filter((module) => module.id !== moduleId));
	};

	// Function to delete a project
	const deleteProject = (moduleId, projectId) => {
		const updatedModules = modules.map((module) => {
			if (module.id === moduleId) {
				return {
					...module,
					projects: module.projects.filter(
						(project) => project.id !== projectId,
					),
				};
			}
			return module;
		});
		setModules(updatedModules);
	};

	return (
		<AppContext.Provider
			value={{
				modules,
				setModules,
				selectedModule,
				setSelectedModule,
				selectedProject,
				setSelectedProject,
				addModule,
				addProject,
				deleteModule,
				deleteProject,
			}}
		>
			<Router>
				<div className="dashboard-container">
					<SideMenu />
					<Routes>
						<Route path="/messages" element={<Chat />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/games" element={<Games />} />
						<Route path="/components" element={<Components />} />
						<Route path="/" element={<Home />} />
						<Route path="/module/:moduleId" element={<Module />} />
						<Route
							path="/module/:moduleId/project/:projectId"
							element={<Project />}
						/>
					</Routes>
				</div>
			</Router>
		</AppContext.Provider>
	);
};

const SideMenu = () => {
	return (
		<div className="side-menu">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tasks">Tasks</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/messages">Messages</Link>
				</li>
				<li>
					<Link to="/games">Games</Link>
				</li>
				<li>
					<Link to="/components">Components Lab</Link>
				</li>
			</ul>
		</div>
	);
};

const Home = () => {
	const { modules, addModule } = useContext(AppContext);

	return (
		<div className="home-content">
			<h1>Dashboard</h1>
			<div className="module-list">
				{modules.map((module) => (
					<div key={module.id} className="module-item">
						<h2>{module.title}</h2>
						<div className="module-actions">
							<Link
								to={`/module/${module.id}`}
								className="view-module-btn"
							>
								View Module
							</Link>
							<button
								onClick={() => deleteModule(module.id)}
								className="delete-module-btn"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			<button onClick={addModule} className="add-module-btn">
				Add Module
			</button>
		</div>
	);
};

const Module = () => {
	const {
		modules,
		setModules,
		selectedModule,
		setSelectedModule,
		selectedProject,
		setSelectedProject,
		addProject,
		deleteProject,
	} = useContext(AppContext);

	const moduleId = parseInt(window.location.pathname.split('/')[2]);

	// Update selectedModule state on component mount
	React.useEffect(() => {
		setSelectedModule(modules.find((module) => module.id === moduleId));
	}, [moduleId, modules]);

	return (
		<div className="module-content">
			{selectedModule && (
				<>
					<h1>{selectedModule.title}</h1>
					<div className="project-list">
						{selectedModule.projects.map((project) => (
							<div key={project.id} className="project-item">
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								<div className="project-actions">
									<Link
										to={`/module/${selectedModule.id}/project/${project.id}`}
										className="view-project-btn"
									>
										View Project
									</Link>
									<button
										onClick={() =>
											deleteProject(
												selectedModule.id,
												project.id,
											)
										}
										className="delete-project-btn"
									>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
					<button
						onClick={() => addProject(selectedModule.id)}
						className="add-project-btn"
					>
						Add Project
					</button>
				</>
			)}
		</div>
	);
};

const Project = () => {
	const { selectedModule, selectedProject, setSelectedProject } =
		useContext(AppContext);
	const moduleId = parseInt(window.location.pathname.split('/')[2]);
	const projectId = parseInt(window.location.pathname.split('/')[4]);

	// Update selectedProject state on component mount
	React.useEffect(() => {
		if (selectedModule) {
			setSelectedProject(
				selectedModule.projects.find(
					(project) => project.id === projectId,
				),
			);
		}
	}, [selectedModule, projectId]);

	return (
		<div className="project-content">
			{selectedProject && (
				<>
					<h1>{selectedProject.title}</h1>
					<p>{selectedProject.description}</p>
					{/* Add more project details here */}
				</>
			)}
		</div>
	);
};

export default App; //withRouter(Dashboard);
