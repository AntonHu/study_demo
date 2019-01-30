const express = require('express')
const router = express.Router()

// 设置首页路由请求
router.get('/',function(req,res,next){
    // 模块与注入数据
    res.send('hao le mei?')
    // res.render('index')
})

module.exports = router