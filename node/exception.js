var http = require('http')
var url = require('url')
var router = require('./modules/router')
var exception = require('./modules/Exception')

http.createServer((req,res)=>{
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        var pathname = url.parse(req.url).pathname
        pathname = pathname.replace(/\//,'')
        try {
            router[pathname](req,res)
            // data = exception.expFun(10)
            // res.write(data)
            // res.end('')
        }catch(err) {
            console.log('error:'+err)
            res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
            res.write(err.toString());
            res.end('')
        }
        console.log('server执行完毕');
    }
}).listen(8888)
console.log('Server running at localhost:8888!')