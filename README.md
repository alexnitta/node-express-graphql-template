# node-express-graphql-template

This is a basic template for a Node / Exress / GraphQL app, built with TypeScript. The feature set is intentionally barebones to allow for flexibility when spinning up a new app. There is no database yet.

## Getting started

After following either option below, you will have access to the GraphQL API at [http://localhost:4000/graphql](http://localhost:4000/graphql). You can also view the GraphQL Playground at this URL in your browser.

### Run locally

1. `npm i`
2. `npm start`

### Run with Docker

1. `docker-compose up`

## Features

### Available scripts

**`start`**: start up a local dev server with `nodemon` to restart on changes. `babel-node` is used to compile `.ts` files in memory before running them. This is meant for development only.
**`check-types`**: run `tsc` to check for TypeScript errors
**`build`**: use `babel` to compile `.ts` files into `.js` files in the `dist` directory, which is .gitignored. This should be used in production,
**`serve`**: use `pm2` to serve `dist/index.js` and automatically restart the server when it stops. This should be used in production. `pm2` also has other features such as a built-in load balancer.

### .env

The project has been set up with `dotenv` to give accesss to environment variables. The file at `.env` has been added to `.gitignore` to remove it from source control. This is where you should store sensitive information such as database credentials.

To start with, here is what you should have in your `.env` file.

```
# This would be "production" in production
NODE_ENV=development

# This is optional; it can be whatever port you want to expose the GraphQL API on. Defaults to 4000.
GRAPHQL_PORT=8000
```

### Code formatting

Code formatting is provided by [prettier](https://prettier.io) using `husky` and `pretty-quick` to format code with a pre-commit hook.

## Sources

https://www.robinwieruch.de/minimal-node-js-babel-setup

https://iamturns.com/typescript-babel/
