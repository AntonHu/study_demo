var http = require('http')
var Teacher = require('./modules/Teacher')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    if(req.url!=='/favicon.ico'){    //清除2次访问，node请求默认还有对favicon.ico资源的请求
        teacher = new Teacher(1,'张三',20)
        teacher.teach(res)
        res.end('<br/>over!')
    }
}).listen(8888)
console.log('Server running at localhost:8888!')