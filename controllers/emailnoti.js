// controllers/checkoutController.js

// ...

// Send an order confirmation email to the user
function sendOrderConfirmationEmail(userEmail, orderDetails) {
    const nodemailer = require('nodemailer');

    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'your-email-service-provider',
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password'
        }
    });

    // Configure the email message
    const mailOptions = {
        from: 'your-email@example.com',
        to: userEmail,
        subject: 'Order Confirmation - Organic Direct',
        html: `Thank you for your order! Here are your order details: ${orderDetails}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

