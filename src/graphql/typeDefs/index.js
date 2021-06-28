const { gql } = require('apollo-server');

const Queries = require('./Query.js');
const Mutations = require('./Mutation.js');
const Schemas = require('./Schema.js');

const typeDefs = gql`
    ${Queries}
    ${Mutations}
    ${Schemas}
`

module.exports = typeDefs;
