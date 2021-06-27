const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/index.js');
const authContext = require('./auth/index.js');

// run the server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return authContext(req)
    }
})
server.listen().then(({ url }) => console.log(`Serving GraphQL API on: ${url}`))
