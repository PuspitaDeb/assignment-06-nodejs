const http = require("http");

const server = http.createServer((req, res) => {

    const url = req.url;

    // Home Route
    if (url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

                <h1>Home Page</h1>

                <p>
                    Welcome to our Node.js Website.
                </p>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);
    }

    // About Route
    else if (url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

                <h1>About Page</h1>

                <p>
                    This website was built using
                    Node.js Core HTTP Module.
                </p>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);
    }

    // Contact Route
    else if (url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

                <h1>Contact Page</h1>

                <p>
                    Email: contact@example.com
                </p>

                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);
    }

    // 404 Route
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

                <h1>404 - Page Not Found</h1>

                <p>
                    The page you requested
                    does not exist.
                </p>

                <a href="/">Go Home</a>

            </body>
            </html>
        `);
    }
});

server.listen(5000, () => {

    console.log(
        "Server running at http://localhost:5000"
    );
});