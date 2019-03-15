var optFile = require('./optFile')
var url = require('url')
var querystring = require('querystring')

function getCallBack(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    function callback(data){
        res.write(data)
        res.end('')
    }
    return callback
}

module.exports={
    '':(req,res) => {
        let callback = getCallBack(req, res)
        optFile.readFile('./views/index.html',callback);
    },
    login:(req,res) => {
        //get方式接收参数
        // var rData = url.parse(req.url, true).query;
        // console.log(rData)
        // if(rData['email'] != undefined) {
        //     console.log(rData['email']);
        //     console.log(rData['pwd']);
        // }

        //post方式接收参数
        var post = '';
        req.on('data', function(chunk) {
            post += chunk;
        });
        req.on('end', function(){
            post = querystring.parse(post);
            var arr = ['email','pwd']
            function callback(data) {
                dataStr = data.toString()
                for(var i=0; i<arr.length; i++){
                    re = new RegExp('{'+arr[i]+'}','g');
                    dataStr = dataStr.replace(re, post[arr[i]])
                }
                res.write(dataStr)
                res.end('')
            }
            optFile.readFile('./views/login.html',callback);
        })

        // let callback = getCallBack(req, res)
        // optFile.readFile('./views/login.html',callback);
    },
    zhuce:(req,res) => {
        let callback = getCallBack(req, res)
        optFile.readFile('./views/zhuce.html',callback);
    },
    zhengze: (req,res) => {
        let callback = getCallBack(req, res)
        optFile.readFile('./views/zhengze.html',callback);
    },
    writeFile: (req, res) => {
        let callback = getCallBack(req, res)
        optFile.writeFile('./writeFiles/one.txt','我的写入内容文件',callback)
    },
    showImg: (req, res) => {
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        optFile.readImg('./images/test.png', res)
    }
}