const fs = require('fs');
const path = require('path');

const enums = fs
    .readFileSync(path.join(__dirname, 'enums.graphql'))
    .toString('utf-8');

const typesAndInputs = fs
    .readFileSync(path.join(__dirname, 'typesAndInputs.graphql'))
    .toString('utf-8');

const Mutation = fs
    .readFileSync(path.join(__dirname, 'Mutation.graphql'))
    .toString('utf-8');

const Query = fs
    .readFileSync(path.join(__dirname, 'Query.graphql'))
    .toString('utf-8');

const typeDefs = enums + typesAndInputs + Mutation + Query;

export default typeDefs;
