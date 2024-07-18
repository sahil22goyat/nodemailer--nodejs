const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router'); // Assuming your routes are defined in routes.js

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(router);

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
