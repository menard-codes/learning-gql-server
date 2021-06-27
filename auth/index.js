const admin = require('../firebaseApp.js');
const { AuthenticationError } = require('apollo-server');


const auth = admin.auth();

const retrieveUser = async authToken => {
    try {
        const decodedToken = await auth.verifyIdToken(authToken)
        return decodedToken
    } catch (error) {
        throw new AuthenticationError(`Error 404: ${error.message}`)
    }
}

const authContext = async req => {
    const authToken = req.headers.authorization;
    const requestingUser = await retrieveUser(authToken);
    return {user: requestingUser}
}

module.exports = authContext;
