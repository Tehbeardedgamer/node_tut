const http = require('http');



const server = http.createServer((req, res)=>{
    console.log(req.url)

    res.write('Welcome to out homepage');
    res.end()
})

server.listen(8080);
