const express = require('express'); // API framework for http
const morgan = require('morgan'); // A middleware library is used for logging

const hostname = 'localhost';
const port = 3000;

const app = express(); // resturn a express server application
app.use(morgan('dev')); // insert morgan middleware - morgan('dev') use developer version - hadle login request information
app.use(express.json()); // parse json data into js proeprties of the request obj so we can use data in js

// Add support for api endpoints
// Routing method that's a catch-all for all http verbs in this case
// catch all upcoming get put post delete request to the /campsites trigger this method
app.all('/campsites', (req, res, next) => { 
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       next(); // Is used to pass control of the application routing to the next relevant routing method after this one
});

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`)
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403,
    res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
     res.end('Deleting all campsites');
});

// Adding a route parameter to /nucampsite
app.get('/campsites/:campasiteId', (req, res) => { // Allows to store whatever the client sends as a part of the path
    res.end(`Will send details of the campsite: ${req.params.campasiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403 // no supported
    res.end(`POST operation not supported on /campsite/:${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId} \n`); //  Write to the body
    res.end(`Will update the campsite: ${req.body.name} 
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

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