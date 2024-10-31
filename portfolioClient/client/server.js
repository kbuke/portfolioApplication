const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const PORT = 3000;

// Serve your React app
app.use(express.static('build'));

// HTTPS options
const httpsOptions = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

// Start HTTPS server
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Secure server running at https://localhost:${PORT}`);
});