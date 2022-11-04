const express = require('express'); // API framework for http

const hostname = 'localhost';
const port = 3000;

const app = express(); // resturn a express server application

// Middleware Function
// Setup a req and res method
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 202; // sucess
    res.setHeader('Content-Type', 'text/html'); // specify the res content => html 
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at localhost://${hostname}:${port}/`);
});