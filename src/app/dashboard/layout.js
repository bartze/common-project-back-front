import '../globals.scss';

import { Providers } from './providers';

export const metadata = {
	title: 'AD 3.0 - Dashboard',
	description: 'A learning dashboard project in React Express',
};

export default function RootLayout() {
	return (
		<html lang="en">
			<body>
				<Providers></Providers>
			</body>
		</html>
	);
}
