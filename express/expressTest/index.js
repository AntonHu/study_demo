/*
 * @文件描述: 
 * @作者: Anton
 * @Date: 2019-10-02 19:19:58
 * @LastEditors: Anton
 * @LastEditTime: 2020-08-02 17:50:53
 */ 
const request = require('request');
const express = require('express')
const app = express()

const method = 'POST';
const proxy_url = 'https://xiancao.iwxapi.com/index/ajax/action/rand_scan';

const options = {
    headers: {},
    url: proxy_url,
    method: method,
    json: true
};

// var codeArr = [48, 48, 48, 48, 48, 48, 48, 48, 48, 48];
// cgt5Im56Ya 有效 起始
// cgt5Im56ed 有效
// cgt5Im56yW 有效
// cgt5Im56z1 有效
// 0000000DDe 中奖
// cgt5Im5LLx 2020-08-02 17:07
// cgt5Im0000 - cgt5Im0791 2020-08-02 17:13
// 00000002es 2020-08-02 17:25
// 0000000GOy 2020-08-02 17:46

const codeArr = [48, 48, 48, 48, 48, 48, 48, 71, 48, 121]; // 0000000GOy
const count = { 
    error1: 0, // 无效的
    error3 : [], // 被使用过的
    error0: [], // 中奖
    other: []
};
const callback = (newCode) => (error, response, data) => {
    if (!response) {
        console.log(newCode + '没有response');
    } else if (response.statusCode == 200) {
        if (data.error) {
            if (data.error == 1) {
                count.error1++;
            } else if (data.error == 3) {
                count.error3.push(newCode);
            } else if (data.error == 0) {
                count.error0.push({code: newCode, prize: data.res_info.prize_name});
            } else {
                count.other.push(newCode);
            }
        }
        console.log('------' + newCode + '------', data, count);
    } else {
        console.log(newCode + 'statusCode非200');
    }
}
// 0 --- 48   9 --- 57   A --- 65   Z --- 90   a --- 97   z --- 122
const addCode = (index) => {
    if (codeArr[index] === 122 && index !== 0) {
        codeArr[index] = 48;
        addCode(index - 1);
    } else if (codeArr[index] === 57) {
        codeArr[index] = 65;
    } else if (codeArr[index] === 90) {
        codeArr[index] = 97;
    } else {
        codeArr[index]++;
    }
};

const getMoney = () => {
    const newCode = codeArr.map(item => String.fromCharCode(item)).join('');
    addCode(9);
    options.headers.Cookie = '_jiu_shop_cses_open_uid_207804=0; _jiu_shop_qr_url_code=' + newCode + '; _jiu_shop_sku_id=g; Hm_lpvt_a798c82d42a1801eac1fa5cd5289af3c=1596357745; Hm_lvt_a798c82d42a1801eac1fa5cd5289af3c=1596121329,1596204525,1596346272; acw_sc__v2=5f267c6fdb0949cac12c95f95e45c099dc97a59c; acw_tc=2760823515963577438198463ecdca8787c66bcacfe018f568d9509e5c6c3e; _jiu_shop_bbcode=5eb6H7cbmH1bGr%2FQ09QPHvLZ9QquUUhQMOJwWmadVUZOG40nkZMywYWvhcWKKJ%2B19p1M42HgX85h013XMtGbFoW1vBs; _jiu_shop_btime=1596347700; _jiu_shop_sid=1brs19';
    request(options, callback(newCode));
};

setInterval(getMoney, 10);

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
