# node-express-graphql-template

This is a basic template for a Node / Exress / GraphQL app. The feature set is intentionally barebones to allow for flexibility when spinning up a new app. There is no database set up yet.

## Features

### .env

The project has been set up with `dotenv` to give accesss to environment variables. The file at `.env` has been added to `.gitignore` to remove it from source control. This is where you should store sensitive information such as database credentials.

To start with, here is what you should have in your `.env` file.

```
# This is optional; it can be whatever port you want to expose the GraphQL API on. Defaults to 4000.
GRAPHQL_PORT=8000
```

### Code formatting

Code formatting is provided by [prettier](https://prettier.io) using `husky` and `pretty-quick` to format code with a pre-commit hook.

## Sources

https://www.robinwieruch.de/minimal-node-js-babel-setup

