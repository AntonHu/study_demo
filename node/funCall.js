var http = require('http')
var otherFun = require('./modules/otherFun')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        otherFun.fun1(res)
        otherFun['fun2'](res)
        res.end('over!')
    }
}).listen(8888)
console.log('Server running at localhost:8888!')