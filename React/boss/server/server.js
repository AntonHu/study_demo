const express = require('express')
const mongoose = require('mongoose')

//连接mongo 并且使用boss这个集合
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String,require: true},
    age: {type: Number,require: true}
}))

//新增数据
// User.create({
//     user: 'huandong',
//     age: 23
// },function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// User.remove({age:16},function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//修改
// User.update({'user':'had'},{'$set':{age: 23}},function(err, doc){
//     console.log(doc)
// })

const app = express()

app.get('/',function(req,res){
    res.send('Hello!')
})

app.get('/data',function(req,res){
    User.findOne({'user':'had'},function(err,doc){
        if(!err){
            res.json(doc)
        }else{
            console.log(err)
        }
    })
})

app.listen(9093, function(){
    console.log('Node app start at port 9093')
})