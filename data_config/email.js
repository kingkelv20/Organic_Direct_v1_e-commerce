// config/email.js

const nodemailer = require('nodemailer');

const emailConfig = {
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
};

const transporter = nodemailer.createTransport(emailConfig);

module.exports = transporter;

