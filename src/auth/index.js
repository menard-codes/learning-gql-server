const admin = require('../firebaseApp.js');
const { AuthenticationError } = require('apollo-server');


const auth = admin.auth();

const retrieveUser = async authToken => {
    try {
        const decodedToken = await auth.verifyIdToken(authToken)
        return decodedToken
    } catch (error) {
        return 'Invalid Token'
    }
}

const authContext = async req => {
    const authToken = req.headers.authorization;
    const requestingUser = await retrieveUser(authToken);

    if (requestingUser === 'Invalid Token') {
        throw new AuthenticationError('Error 401: Unauthorized Access')
    } else {
        // user is authorized
        return {user: requestingUser}
    }
}

module.exports = authContext;
