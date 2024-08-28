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

export function Providers() {
	return (
		<div>
			<BrowserRouter>
				<Theme theme="g100">
					<Link href="/modules"></Link>
					<Link href="/projects"></Link>
					<Link href="/tasks"></Link>
					<Link href="/messages"></Link>
					<Link href="/games"></Link>
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
					</Routes>
				</Content>
			</BrowserRouter>
		</div>
	);
}
