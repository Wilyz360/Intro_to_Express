const express = require('express');
const campsiteRouter = express.Router(); 

// Add support for api endpoints
// Routing method that's a catch-all for all http verbs in this case
// catch all upcoming get put post delete request to the /campsites trigger this method
// Handle all endpoints for routing to campsites
campsiteRouter.route('/')
.all((req, res, next) => { // '/' roor directory
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // Is used to pass control of the application routing to the next relevant routing method after this one
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403,
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;