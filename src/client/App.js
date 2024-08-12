import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddModule from './components/modules/add-module.component';
import Module from './components/modules/module.component';
import ModulesList from './components/modules/modules-list.component';
import Dashboard from './components/dashboard/dashboard.component';
import Chat from './components/chat/chat.component';

class App extends Component {
	render() {
		return (
			<div className="fullscreen">
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={'/dashboard'} className="navbar-brand">
						AD 3.0
					</Link>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={'/modules'} className="nav-link">
								Modules
							</Link>
						</li>
						<li className="nav-item">
							<Link to={'/add'} className="nav-link">
								Add
							</Link>
						</li>

						<li className="nav-item">
							<Link to={'/chat'} className="nav-link">
								ChatAI
							</Link>
						</li>
					</div>
				</nav>

				<div className="fullscreen">
					<Routes>
						<Route path="/" element={<ModulesList />} />
						<Route path="/modules" element={<ModulesList />} />
						<Route path="/add" element={<AddModule />} />
						<Route path="/modules/:id" element={<Module />} />
						<Route path="/dashboard/" element={<Dashboard />} />
						<Route path="/chat" element={<Chat />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
