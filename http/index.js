// Hyper Text Transfer Protocol (HTTP).

const http = require('http');

// req = incoming request
// res = what re we sending back
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to The Page');
    }
    if (req.url === '/about') {
        res.end('HEre is Op setup')
    }
    res.end(
        `<h1> OOPS ! </h1>`
    )
})
server.listen(5000)

