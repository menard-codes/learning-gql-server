const admin = require('../firebaseApp.js');

const firestore = admin.firestore()

module.exports = {
    notesCollection: firestore.collection('notes')
}
