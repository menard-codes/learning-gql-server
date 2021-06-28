const Query = require('./Query.resolver.js');
const Mutation = require('./Mutation.resolver.js');

// search for dataSources or context argument of apolloServer instance as replacement to importing

// TODO: Catch edge cases
const resolvers = {
    Query,
    Mutation
}

module.exports = resolvers;
