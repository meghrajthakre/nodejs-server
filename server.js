const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/') {
        res.write('<head>')
        res.write('<head><title>My Form </title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" placeholder="enter text here " /><input type="submit" /></form > </body > ')
        res.write('</head>')
        return res.end()
    }
    res.setHeader('content-type', 'text/html')
    res.write('<head>')
    res.write('<head><title>My message </title></head>')
    res.write('<body><h1>Me sending these message  </h1></body>')
    res.end()
})

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

//
// </html > 