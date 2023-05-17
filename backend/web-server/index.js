const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        const { url } = req

        switch (url) {
            case "/":
                // text-plain
                res.writeHead(200, { 'content-type': 'text/plain' })
                res.end('My info')


                break;
            case "/students":
                // application/json
                res.writeHead(200, { 'content-type': 'application/json' })
                const obj = [
                    { id: 1, name: "a" },
                    { id: 2, name: "b" },
                    { id: 3, name: "c" },
                ]
                res.end(JSON.stringify(obj, null, 2))

                break;
            case "/html":
                // html

                res.writeHead(200, { 'content-type': 'text/html' })
                const html = fs.readFileSync(__dirname + "\\html\\index.html", "utf-8")
                res.end(html)
                break;
            case "/template":
                // html template    

                res.writeHead(200, { 'content-type': 'text/html' })
                const template = fs.readFileSync(__dirname + "\\html\\template.html", "utf-8")
                const title = "Hello Students"
                res.end(template.replace('{title}', title))
                break;
            case "/favicon.ico":

                res.statusCode = 204;
                res.end();

                break;

            default:
                res.writeHead(404, { 'content-type': 'text/plain' })
                res.end('Hello World')

                break;
        }
    })
    .listen(3001, 'localhost')

