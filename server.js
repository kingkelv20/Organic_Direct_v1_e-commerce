// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS and client-side JavaScript)
app.use(express.static('public'));

// Define routes (you'll create these later)
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

