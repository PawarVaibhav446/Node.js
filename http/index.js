// Hyper Text Transfer Protocol (HTTP).

const http = require('http');

// req = incoming request
// res = what re we sending back

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end("Hello Bhaiya Its Working Hello Aliens from Home Page");
    }
    else if (req.url == "/about") {
        res.end("Hello Bhaiya Its Working Hello Aliens from About page");
    }
    else if (req.url === "/contact") {
        res.end("Hello Bhaiya Its Working Hello Aliens from contact page");
    } else{
        res.writeHead(404,{"Content-type": "text/html"})
        res.end(" <h1> Error:404 Page Not Found </h1>");
    }
});
server.listen(5000, () => {
    console.log("Server is running on port 5000");
});






