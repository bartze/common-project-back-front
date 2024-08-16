const { exec } = require('child_process');

// todo add a check method to only execute docker if the service is not active
// todo try to move all this code to the webpack serve js file as a docker section to serve the project
class OpenDockerCommand {
	constructor(platform) {
		this.platform = platform;
	}

	logerror(error) {
		(error) => {
			error && console.error('Error on Docker:', error);
		};
	}
	execute() {
		// force docker to create the container
		exec(
			'docker run --name postgres -e POSTGRES_PASSWORD=localpassword -p 5432:5432 -d postgres',
		);

		switch (this.platform) {
			case 'darwin': // macOS ()=> From man open 0 => -g Do not bring the application to the foreground. // now broken... check why after change the location this has been ?
				exec('open -a docker', this.logerror);
				break;
			case 'linux':
				exec('xdg-open docker://', this.logerror);
				break;
			case 'win32': // Windows
				exec('start docker-desktop', this.logerror);
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
