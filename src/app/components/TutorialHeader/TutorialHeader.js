'use client';

import {
	Header,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
	SideNav,
	SideNavItems,
	//Link,
	HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
// import Link from 'next/link'; // THIS WAS THE PROBLEM

const TutorialHeader = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="AD 3.0 - React Component Diamond Tutorial">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<Link to="/">
					<HeaderName prefix="AD 3.0">Dashboard</HeaderName>
				</Link>
				<HeaderNavigation aria-label="AD 3.0 - React Component Diamond Tutorial">
					<HeaderMenuItem>
						<Link to="/modules">Modules</Link>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<Link to="/projects">Projects</Link>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<Link to="/tasks">Tasks</Link>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<Link to="/messages">Messages</Link>
					</HeaderMenuItem>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
				>
					<SideNavItems>
						<HeaderSideNavItems>
							<Link to="/modules">
								<HeaderMenuItem>Modules</HeaderMenuItem>
							</Link>
							<Link to="/projects">
								<HeaderMenuItem>Projects</HeaderMenuItem>
							</Link>
							<Link to="/tasks">
								<HeaderMenuItem>Tasks</HeaderMenuItem>
							</Link>
							<Link to="/messages">
								<HeaderMenuItem>Messages</HeaderMenuItem>
							</Link>
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar>
					<HeaderGlobalAction
						aria-label="Notifications"
						tooltipAlignment="center"
						className="action-icons"
					>
						<Link to="/notifications">
							<Notification size={20} />
						</Link>
					</HeaderGlobalAction>
					<HeaderGlobalAction
						aria-label="User Avatar"
						tooltipAlignment="center"
						className="action-icons"
					>
						<Link to="/profile">
							<UserAvatar size={20} />
						</Link>
					</HeaderGlobalAction>
					<HeaderGlobalAction
						aria-label="App Switcher"
						tooltipAlignment="end"
					>
						<Link to="/profile">
							<Switcher size={20} />
						</Link>
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header>
		)}
	/>
);

export default TutorialHeader;
