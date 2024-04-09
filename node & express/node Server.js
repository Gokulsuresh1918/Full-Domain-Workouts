const http = require('http');

const port = 1000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Set the header value
    res.end('Hello, World!\n'); // End the response with some content
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
