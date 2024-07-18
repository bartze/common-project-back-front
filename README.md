# Dashboard Project

## Description

This project is a dashboard for a fullstack web development course, which is focused on create the dashboard using React, Express, Node.js, PostgreSQL, Docker, HTML, CSS, JavaScript and more "technologies".

## Table of Contents

WIP - Add a table of contents here and update the sections below accordingly the content updated from stake holders

-   [Description](#description)
-   [Table of Contents](#table-of-contents)
-   [Requirements](#requirements)
-   [Installation and Usage](#installation-and-usage)
-   [Structure](#structure)
-   [Usage](#usage)
-   [Support](#support)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [Authors and acknowledgment](#authors-and-acknowledgment)
-   [References](#references)
-   [License](#license)

## Requirements

-   Node.js(available via NVM)
-   NPM(available via NVM)
-   Docker(available via docker.com)
-   PostgreSQL(available via postgresql.org)

## Installation and Usage

1. Clone the repository

```bash
git clone https://github.com/albaniles-digitales/common-project-back-front
# or
git clone git@github.com:albaniles-digitales/common-project-back-front.git
```

2. Install the dependencies:

```bash
npm install
```

3. Run the whole application(requirements are mandatory to execute this command):

```bash
npm run start
```

## Structure

This section explains the structure of the project in terms of folders and files. This is changing as the project is being developed. The current project structure is as follows inside the SRC folder, is important to understand that the client project is an ejected create-react-app project and the server project is a node.js project with express and sequelize, so the scripts folder contains all the react-scripts ejected code, this should be changed before share the project to the public, now the project is in development and we could maintain this structure for a while:

### Server

Contains all the server side code.

There are the following folders and files in the server folder:

-   express-api-psql-db: It contains the server side code for the express api with psql database
-   websocket-chat-server: It contains the server side code for the websocket chat server
-   server.js: It contains the main file to run the server

#### express-api-psql-db

Contains the following folders and files:

config: contains the database connection strings configuration and 2 methods to run queries and reset the database

controllers(sequelize): contains the logic for the routes crud operations:

create
findAll
findOne
update
delete
deleteAll
findAllPublished

models(sequelize): contains the sequelize model for the tutorial entity

routes(express): contains the routes for the CRUD operations

#### websocket-chat-server

Contains the following folders and files:

db: contains the database file data.db which is a sqlite database

### Client

Contains all the client side code.

There are the following folders and files in the client folder:

-   Folders:
    -   common: contains the common files for the react app
    -   components: contains the React components for the app
    -   services: contains the services for the app
    -   public: contains the public files for the react app is not in the src/client folder but is used by the react app
-   Files:
    -   App.css: contains the css for the app
    -   App.js: contains the main component for the app
    -   http-common.js: contains the axios configuration for the app
    -   logo.svg: contains the logo for the app
    -   serviceWorker.js: contains the service worker for the app
    -   setupTests.js: contains the setup for the tests for the app

## Usage

## Support

## Roadmap

1. Create the project structure
1. Create the server side code
1. Create the client side code
1. Migrate the tmp folder to the project - WIP + iperez review
1. Add extra tooling for the project maintining the clarriu libraries and news - WIP
1. Create the docker-compose file - WIP
1. Create the dockerfile for the server - WIP
1. Create the dockerfile for the client - WIP
1. Create the dockerfile for the database - WIP

## Contributing

## Authors and acknowledgment

## References

## License
