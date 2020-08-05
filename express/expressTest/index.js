/*
 * @文件描述: 主入口
 * @作者: Anton
 * @Date: 2019-10-02 19:19:58
 * @LastEditors: Anton
 * @LastEditTime: 2020-08-05 10:50:37
 */ 
const express = require('express');
const app = express();
const request = require('request');

// const XianCao = require('./methods/xiancao');
const JiangCun = require('./methods/jiangcun');

// XianCao.xiancao();
JiangCun.jiangcun();

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


// express 不能解析post请求体，需要安装中间件 body-parser
var bodyParser = require('body-parser')// parse application/x-www-form-urlencoded  （表单传输）
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json  （json传输）
app.use(bodyParser.json())

app.post('/register',(req,res)=>{
    console.log(req.body);
     let {name,age} = req.body
     if(name==='zs' && age === 12){
         
        res.send('注册成功')
     }else{
         res.send('注册失败');
         
     }
})

const server = app.listen(9999,function(){
    console.log('run success!')
})
