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
	Link,
	HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
//import { Link } from 'react-router-dom';

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
				<Link href="/" passHref legacyBehavior>
					<HeaderName prefix="AD 3.0">Dashboard</HeaderName>
				</Link>
				<HeaderNavigation aria-label="AD 3.0 - React Component Diamond Tutorial">
					<Link href="/modules" passHref legacyBehavior>
						<HeaderMenuItem>Modules</HeaderMenuItem>
					</Link>
					<Link href="/projects" passHref legacyBehavior>
						<HeaderMenuItem>Projects</HeaderMenuItem>
					</Link>
					<Link href="/tasks" passHref legacyBehavior>
						<HeaderMenuItem>Tasks</HeaderMenuItem>
					</Link>
					<Link href="/messages" passHref legacyBehavior>
						<HeaderMenuItem>Messages</HeaderMenuItem>
					</Link>
					<Link href="/games" passHref legacyBehavior>
						<HeaderMenuItem>Games</HeaderMenuItem>
					</Link>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
				>
					<SideNavItems>
						<HeaderSideNavItems>
							<Link href="/modules" passHref legacyBehavior>
								<HeaderMenuItem>Modules</HeaderMenuItem>
							</Link>
							<Link href="/projects" passHref legacyBehavior>
								<HeaderMenuItem>Projects</HeaderMenuItem>
							</Link>
							<Link href="/tasks" passHref legacyBehavior>
								<HeaderMenuItem>Tasks</HeaderMenuItem>
							</Link>
							<Link href="/messages" passHref legacyBehavior>
								<HeaderMenuItem>Messages</HeaderMenuItem>
							</Link>
							<Link href="/games" passHref legacyBehavior>
								<HeaderMenuItem>Games</HeaderMenuItem>
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
						<Link href="/notifications" passHref legacyBehavior>
							<Notification size={20} />
						</Link>
					</HeaderGlobalAction>
					<HeaderGlobalAction
						aria-label="User Avatar"
						tooltipAlignment="center"
						className="action-icons"
					>
						<Link href="/profile" passHref legacyBehavior>
							<UserAvatar size={20} />
						</Link>
					</HeaderGlobalAction>
					<HeaderGlobalAction
						aria-label="App Switcher"
						tooltipAlignment="end"
					>
						<Switcher size={20} />
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header>
		)}
	/>
);

export default TutorialHeader;
