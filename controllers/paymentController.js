// controllers/paymentController.js

// Import Stripe or your chosen payment gateway library
// const stripe = require('stripe')('your-secret-key');

// Process payment
exports.processPayment = (req, res) => {
    const { token, amount } = req.body;

    // Use the payment gateway library to charge the user's card
    stripe.charges.create(
        {
            source: token,
            amount: amount * 100, // Amount in cents
            currency: 'usd',
            description: 'Organic Direct Order',
        },
        (err, charge) => {
            if (err) {
                // Handle payment error
                console.error('Payment Error:', err);
                res.status(500).json({ error: 'Payment failed' });
            } else {
                // Payment successful, handle order confirmation and email notification
                // Implement logic to save the order as "paid" in the database
                
                // Send an order confirmation email to the user
                
                // Redirect or send a response as needed
            }
        }
    );
};

