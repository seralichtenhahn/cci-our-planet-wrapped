![Repo Header](/docs/header.jpg?raw=true)

# Our Planet Wrapped

> A data story about the ecological footprint using data of the Global Footprint Network.

## Important links

- [Repository](https://git.arts.ac.uk/serafin/our-planet-wrapped)
- [Documentation](/Documentation.pdf)
- [Demo](https://our-planet-wrapped.netlify.app/)
- [Datasource](https://data.footprintnetwork.org/)

## Installation

### Dependencies

#### Node

Download the latest version of Node.js from their website: https://nodejs.org/en/

#### pnpm

Make sure to install this globally

```sh
npm install -g pnpm
```

Install the project dependencies

```sh
pnpm install
```

## Environment variables

Create a `.env` file at the root of this project. This file is _gitignored_ and should never be commited but it's used to provide secrets within the project. You can find the variables that are required in the `.env.dist` file.

You need to get a personal api key from the [Global Footprint Network](https://www.footprintnetwork.org/). Follow the instructions outlined on this page: https://data.footprintnetwork.org/#/api

## Running locally

To launch the server:

```sh
pnpm dev
```

Go to http://localhost:3000
