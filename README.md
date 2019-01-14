## Shortify! An URL Shortner React APP

This app transforms any URL into a small one to make your links flexible to be used! For now it is just under development mode, so it is working using localhost as the main URL, but it can be used for a real project if it needed.

## How to install

It is recommended to have [Yarn](https://yarnpkg.com/en/), [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) updated with the latest stable code to everything work fine!

After cloning the project, you can use [Docker](https://docs.docker.com/install/) to run the project. Just run `docker-compose up`, wait a few minutes until download the necessary resources and access [http://localhost:3000](http://localhost:3000) to view the project running.

### Other ways to install

If you are not using `Docker`, you can access the `api` folder and run `npm install`, after this, access the frontend folder and run `yarn install`. Also you will need to have [MongoDB](https://docs.mongodb.com/manual/installation/) installed.

After this, change the `mongoURI: 'mongodb://mongodb:27017/mongodb` URL, located on `/api/constants.js` to `mongoURI: 'mongodb://127.0.0.1:27017/mongodb`. It is using a default value to work with `Docker`. 

After running the commands, run `npm start` and access [http://localhost:3000](http://localhost:3000) to view the project running.

### Testing
For run the tests, just run `npm test`.

### Stack
- [React Create App](https://github.com/facebook/create-react-app) - A React helper to create apps.
- [SASS](https://sass-lang.com/) - Preprocessor CSS.
- [Jest](https://jestjs.io/) - Javascript Testing tool.
