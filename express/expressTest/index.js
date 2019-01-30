const express = require('express')
const app = express()

// body解析
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

// 处理文件路径的模块
const path = require('path')

// view处理
app.set('views',path.join(__dirname,'view'))

// 静态文件
// app.use(express.static('view'))

// 页面路由处理
const index = require('./routers/index');
app.use('/',index)

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Methods', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 接口路由处理
const add = require('./api/add')
app.use('/add',add)

const server = app.listen(9999,function(){
    console.log('run success!')
})