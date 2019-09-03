// see a list of pre-populated movies
// add a movie to the list 
// change or update movie information 
// remove a movie 
// see only released movies 

const express = require('express');

const server = express();

let actors = [
    {
        id: 1,
        name: 'Elijah Wood',
        movies: [1,2]
    },
    {
        id: 2,
        name: 'Chris Hemsworth',
        movies: [4]
    },
]

let movies = [
    {
        id: 1,
        name: 'The Two Towers',
        released: true,
        rating: 4
    },
    {
        id: 2,
        name: 'The Fellowship of the Rings',
        released: true,
        rating: 5
    },
    {
        id: 3,
        name: 'The Childrem of Hurin',
        released: false,
        rating: null
    },
    {
        id: 4,
        name: 'She Thor',
        released: false,
        rating: null
    }
]

server.get('/', (req, res) => {
    res.status(200).json({api: '...api'})
});

server.get('/api/movies', (req, res) => {
    res.status(200).json(movies)
});

server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
})

// ES 6 modules 
// export default server

// CommonJS modules (node modules) 
module.exports = server;

// multiple exports with CommonJS
// module.exports = {server, moreStuff, moremoreStuff}
// exports.add = (a, b) => {return a + b}