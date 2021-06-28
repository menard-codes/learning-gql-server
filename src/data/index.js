const admin = require('../firebaseApp');


const firestore = admin.firestore()

module.exports = {notesCollection: firestore.collection('notes')}
