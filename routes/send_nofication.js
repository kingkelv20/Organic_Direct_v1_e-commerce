// routes/api.js

// ...

// Import notification-related functions (to be implemented)
const { sendNotification } = require('../controllers/notificationController');

// Send notification route
router.post('/send-notification', sendNotification);

// Check for new notifications route
router.get('/check-notifications', checkNotifications);

// ...

