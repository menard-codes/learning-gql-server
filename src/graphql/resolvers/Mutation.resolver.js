const { notesCollection } = require('../../data/index.js')

// TODO: Handle Edge Cases

// Function Definitions
const addNote = async (title, description) => {
    const newDoc = await notesCollection.add({title, description})
    const docSnapshot = await newDoc.get()
    const docs = docSnapshot.data()
    const newNote = {
        id: docSnapshot.id,
        ...docs
    }
    return newNote
}

const editNote = async (id, title, description) => {
    await notesCollection.doc(id).update({title, description})
    const docSnapshot = await notesCollection.doc(id).get()
    const data = docSnapshot.data()
    return {id: docSnapshot.id, ...data}
}

const deleteNote = async (id) => {
    await notesCollection.doc(id).delete()
    const docSnapshot = await notesCollection.doc(id).get()
    const deleted = !docSnapshot.exists
    return {deleted}
}


// Main Resolver
const Mutation = {
    addNote: (_, { title, description }) => addNote(title, description),
    editNote: (_, { id, title, description }) => editNote(id, title, description),
    deleteNote: (_, { id }) => deleteNote(id)
}

module.exports = Mutation;
