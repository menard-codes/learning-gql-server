
const Mutations = `
    type Mutation {
        addNote(title: String!, description: String): Note
        editNote(id: ID!, title: String, description: String): Note
        deleteNote(id: ID!): DeleteStatus
    }
`

module.exports = Mutations;
