// see a list of pre-populated movies
// add a movie to the list 
// change or update movie information 
// remove a movie 
// see only released movies 

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({api: '...api'})
});

const port = 6000;

server.listen(port, () => {
    console.log(`api on port ${port}`)
});