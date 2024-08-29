'use client';

import { Content, Theme } from '@carbon/react';

import TutorialHeader from '../components/TutorialHeader/TutorialHeader';

import Page from './page';
import ModulesPage from './modules/page';
import TasksPage from './tasks/page';
import Chat from './messages/page';
import GamesPage from './games/page';
import ProjectsPage from './projects/page';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import RegisterPage from './register/page';
import LoginPage from './login/page';
import ProfilePage from './profile/page';

export function Providers() {
	return (
		<>
			<BrowserRouter>
				<Theme theme="g100">
					<TutorialHeader />
				</Theme>
				<Content className="content">
					<Routes>
						<Route path="/" element={<Page />} />
						<Route path="/modules" element={<ModulesPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/tasks" element={<TasksPage />} />
						<Route path="/messages" element={<Chat />} />
						<Route path="/games" element={<GamesPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/notifications" element={<GamesPage />} />
						<Route path="/games" element={<GamesPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />
					</Routes>
				</Content>
			</BrowserRouter>
		</>
	);
}
