// routes/api.js

// ...

// Import order history-related functions (to be implemented)
const { getOrderHistory } = require('../controllers/orderHistoryController');

// Get order history route
router.get('/order-history', getOrderHistory);

// Import tracking-related functions (already implemented)
const { getOrderTrackingInfo } = require('../controllers/trackingController');

// Get detailed order tracking information route
router.get('/track-order/:orderId', getOrderTrackingInfo);

// ...

