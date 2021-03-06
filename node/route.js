var http = require('http')
var url = require('url')
var router = require('./modules/router')
http.createServer((req,res)=>{
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        var pathname = url.parse(req.url).pathname
        pathname = pathname.replace(/\//,'')
        router[pathname](req,res)
    }
}).listen(8888)
console.log('Server running at localhost:8888!')