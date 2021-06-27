const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/index.js')

// run the server
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Serving GraphQL API on: ${url}`))
