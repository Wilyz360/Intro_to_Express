const express = require('express'); // API framework for http
const morgan = require('morgan'); // A middleware library is used for logging 
const campasiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express(); // resturn a express server application
app.use(morgan('dev')); // insert morgan middleware - morgan('dev') use developer version - hadle login request information
app.use(express.json()); // parse json data into js proeprties of the request obj so we can use data in js

app.use('/campsites', campasiteRouter);

// Setup express to serve files from the public folder with the help of middleware function
app.use(express.static(__dirname + '/public')); // __dirname is a special variable in node - it will refer to the absolute path of the current directory the file is in


// Middleware Function
// Setup a req and res method
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200; // sucess
    res.setHeader('Content-Type', 'text/html'); // specify the res content => html 
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});