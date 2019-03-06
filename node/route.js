var http = require('http')
var url = require('url')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        var pathname = url.parse(req.url).pathname
        pathname = pathname.replace(/\//,'')
        console.log(pathname)
        res.end('<br/>over!')
    }
}).listen(8888)
console.log('Server running at localhost:8888!')