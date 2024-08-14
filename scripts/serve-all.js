const { exec } = require('child_process');

class OpenDockerCommand {
	constructor(platform) {
		this.platform = platform;
	}

	execute() {
		// force docker to create the container
		exec(
			'docker run --name postgres -e POSTGRES_PASSWORD=localpassword -p 5432:5432 -d postgres',
		);

		switch (this.platform) {
			case 'darwin': // macOS
				exec('open -a Docker', (error, stdout, stderr) => {
					if (error) {
						console.error('Error opening Docker on macOS:', error);
					}
				});
				break;
			case 'linux':
				exec('xdg-open docker://', (error, stdout, stderr) => {
					if (error) {
						console.error('Error opening Docker on Linux:', error);
					}
				});
				break;
			case 'win32': // Windows
				exec('start docker-desktop', (error, stdout, stderr) => {
					if (error) {
						console.error(
							'Error opening Docker on Windows:',
							error,
						);
					}
				});
				break;
			default:
				console.error('Unsupported platform:', this.platform);
		}
	}
}

function openDocker() {
	const platform = process.platform;
	const command = new OpenDockerCommand(platform);
	command.execute();
}

openDocker();
