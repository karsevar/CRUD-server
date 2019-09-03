// CommonJS imports from relative file:
const server = require('./server.js')

// named imports with commonjs
// const {server, moreStuff, moremoreStuff} = require('./server.js');

const port = 6000;

server.listen(port, () => {
    console.log(`api on port ${port}`)
});