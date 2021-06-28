const { notesCollection } = require('../../data/index.js');


const queryFirestore = async () => {
    const querySnapshot = await notesCollection.get();
    const docs = [];
    querySnapshot.forEach(doc => {
        const noteDoc = {id: doc.id, ...doc.data()}
        docs.push(noteDoc)
    })
    return docs
}


// get all todos for now
// TODO: Add authentication later
const Query = {
    notes: queryFirestore
}

module.exports = Query;
