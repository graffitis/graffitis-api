# :newspaper_roll: [Graffitis API](https://graffitis.itiscuneo.gov.it/)

> by [**Reparto Tecnico Graffitis**](https://github.com/graffitis) :rocket:

## :gear: Setup

Action to take before starting the server:

- create a `src/config/keys.json` file, mimic to `src/config/keys.example.json`
- add `<your-server-domain>/auth/login/callback` to your `google api` authorized routes
- `npm i`

## :hammer_and_wrench: NPM Scripts

- `start` start an instance
- `start:production` start a production-ready instance
- `start:dev` start a `nodemon` instance watching `/src`
- `node:latest` install latest node version (works only in UNIX systems)
- `lint` suggest linting on `js` files
- `lint:fix` lint `js` files
- `docker:build` build the server in a `docker` container called `graffitis`
- `docker:run` run the `docker` container called `graffitis`
- `docker:stop` stop the `docker` container called `graffitis`

## Docs

Docs @ [Docs index](./docs/index.md)

### Authors

- [@leonardoviada](https://github.com/leonardoviada) Leonardo Viada
- [@PietroJomini](https://github.com/PietroJomini) Pietro Jomini
