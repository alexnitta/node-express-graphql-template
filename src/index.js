import "dotenv/config";

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import expressPlayground from "graphql-playground-middleware-express";
import { readFileSync } from "fs";

import * as resolvers from "./resolvers";

const graphqlPort = process.env.GRAPHQL_PORT || 4000;
const showPlayground = process.env.ENV === "development";
const graphqlPath = "/graphql";

import typeDefs from "./typeDefs";

const app = express();

const context = {
  /* database client goes here */
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.applyMiddleware({ app });

if (showPlayground) {
  app.get("/playground", expressPlayground({ endpoint: graphqlPath }));
}

app.listen(
  {
    port: graphqlPort,
    path: graphqlPath
  },
  () => {
    console.log(
      `Running a GraphQL API server at localhost:${graphqlPort}${graphqlPath}`
    );
  }
);
