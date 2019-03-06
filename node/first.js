var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        console.log('访问成功')
        res.write('hello,world!')
        res.end('over!')
    }
}).listen(8888)
console.log('Server running at localhost:8888!')