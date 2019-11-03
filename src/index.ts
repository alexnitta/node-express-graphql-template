import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import pino from 'pino';
import expressPino from 'express-pino-logger';
import { readFileSync } from 'fs';

import * as resolvers from './resolvers';
import typeDefs from './typeDefs';

const graphqlPort = process.env.GRAPHQL_PORT || 4000;
const showPlayground = process.env.NODE_ENV === 'development';
const graphqlPath = '/graphql';
const logger = pino({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
});
const expressLogger = expressPino({ logger });

const app = express();

app.use(expressLogger);

const context = {
    /* database client goes here */
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

server.applyMiddleware({ app });

if (showPlayground) {
    app.get('/playground', expressPlayground({ endpoint: graphqlPath }));
}

app.listen(
    {
        port: graphqlPort,
        path: graphqlPath,
    },
    () => {
        logger.info(
            `Running a GraphQL API server at localhost:${graphqlPort}${graphqlPath}`
        );
    }
);
