const http = require("http");

console.log("File is running");

const server = http.createServer((req, res) => {
    res.write("Server Running");
    res.end();
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});