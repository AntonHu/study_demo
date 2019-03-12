var optFile = require('./optFile')
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
        let callback = getCallBack(req, res)
        optFile.readFile('./views/login.html',callback);
    },
    zhuce:(req,res) => {
        let callback = getCallBack(req, res)
        optFile.readFile('./views/zhuce.html',callback);
    },
    writeFile: (req, res) => {
        let callback = getCallBack(req, res)
        optFile.writeFile('./writeFiles/one.txt','我的写入内容文件',callback)
    },
    showImg: (req, res) => {
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        optFile.writeFile('./images/test.png', res)
    }
}