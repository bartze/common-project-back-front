'use client';

import { Content, Theme } from '@carbon/react';

import TutorialHeader from './components/TutorialHeader/TutorialHeader';

import Page from './page';
import ModulesPage from './views/modules/page';
import TasksPage from './views/tasks/page';
import Chat from './views/messages/page';
import GamesPage from './views/games/page';
import ProjectsPage from './views/projects/page';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export function Providers() {
	return (
		<>
			<BrowserRouter>
				<Theme theme="g100">
					<TutorialHeader />
					{/* <Link href="/modules"></Link>
					<Link href="/projects"></Link>
					<Link href="/tasks"></Link>
					<Link href="/messages"></Link> */}
				</Theme>
				<Content className="content">
					<Routes>
						<Route path="/" element={<Page />} />
						<Route path="/modules" element={<ModulesPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/tasks" element={<TasksPage />} />
						<Route path="/messages" element={<Chat />} />
						<Route path="/games" element={<GamesPage />} />
						<Route path="/profile" element={<GamesPage />} />
						<Route path="/notifications" element={<GamesPage />} />
						<Route path="/games" element={<GamesPage />} />
					</Routes>
				</Content>
			</BrowserRouter>
		</>
	);
}
