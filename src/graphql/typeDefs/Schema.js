
const Schemas = `
    type Note {
        id: ID!
        title: String!
        description: String
    }

    type DeleteStatus {
        deleted: Boolean!
    }
`

module.exports = Schemas;
