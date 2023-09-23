// config/session.js

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = session({
    secret: 'your_secret_key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
});

