var http = require('http')
var url = require('url')
var router = require('./modules/router')
// var optFile = require('./modules/optFile')

http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    })
    if(req.url != '/favicon.ico'){
        // let data = optFile.readFileSync('./views/login.html');
        // res.write(data)
        var pathname = url.parse(req.url).pathname
        pathname = pathname.replace(/\//,'')
        console.log(pathname)
        router[pathname](req,res)
        // let recall = data => {
        //     res.write(data);
        //     res.end('</br>readFile success!');
        // }
        // optFile.readFile('./views/login.html',recall);
        // // res.end('</br>readFile success!') 
        // console.log("主程序执行完毕！")
    }
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/')