const admin = require('firebase-admin');
const path = require('path');

require('dotenv/config');

const adminConfig = require(path.join(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS))

admin.initializeApp({
  credential: admin.credential.cert(adminConfig)
});

module.exports = admin;
