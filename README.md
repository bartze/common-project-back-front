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

### platform and tools

-   [ ] 1. Create the project structure client and server side code
-   [ ] 1. Review build serve format lint and test tools:
    -   [ ] webpack env should be reviewed in order to maintain a correct control of the development and production builds for the different client and server apps
    -   [ ] the chats projects for core node should be defined in order to choose the best method to integrate both apps in the project, now the socket is a basic poc on the react app and the chat with ia is an embedded project deployed in parallel. The core node project pretends to integrate the parallel project in html inside the react project as a separate route/link(if this is possible all the documentation would be done with reveal.js as project solution).
-   [ ] 1. add cross-env to modify env using package.json script, ex `"build:server": "echo cross-env SERVER_BUILD=true node webpack.build.js"`
-   [ ] 1. add testing coverage
-   Documentation for code chages using video git and revealjs

### apps

-   [ ] 1. Migrate the tmp folder to the project - WIP + iperez review
-   [ ] Adding visual functionality the fast way to then make a good refactor exercise explaining this process
-   [ ] Current bugs:

          - [ ] DOM CRUD IS CAOS - medium choose a best dom control method using a css control instead dom tab manipulation
          - [ ] JSON FILE SHOULD BE UPDATED - easy - call em -> after call the json sanitize the dom :D
          - [ ] DATABASE IS NOT USING IDS - easy - use em - doing

### carbon design system implementation

The main goal is to have a profesional dashboard to add modules projects and task, but instead the vanilla app, we want all the process of software development in the project, figma supernova and code connect are useful tools that i'd like to check in order to have a full role project in hands, this will allow us to detect between the people more rolesin the software development ecosystem.

-   add a list of github and official documentation and project resources

-   use code connect
-   use super nova
-   use figma

-   use carbon builder tool to load dashboard

## Contributing

## Authors and acknowledgment

## References

## License

## env

diamond-token => sn.lzJwo7aafUprUtQvKRj5UUfiwUFL2A8IeDrUHrWJcHCSMB4Nvz1t1aL07Ypn9Jnk3j3Uwjbwp67if4TCqNB2tOAVLAGVRS6M

the file config/paths.js is the key to mix all the tools with webpack
