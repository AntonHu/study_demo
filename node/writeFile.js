var http = require('http')
var url = require('url')
var router = require('./modules/router')

http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    })
    if(req.url != '/favicon.ico'){
        var pathname = url.parse(req.url).pathname
        pathname = pathname.replace(/\//,'')
        console.log(pathname)
        router[pathname](req,res)
    }
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/')