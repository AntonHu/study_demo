const express = require('express')
const mongoose = require('mongoose')

// imooc集合
const DB_URL = 'monggodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

// const User = mongoose.model('user',new mongoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))
// User.create({
//     user:'imooc',
//     age:18
// },function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

const app = express()

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})

app.get('/test',function(req,res){
    res.send('hahahahaha')
})

app.get('/data',function(req,res){
    // User.findOne({user:'xiaoming'},function(err,doc){
    //     if(!err){
    //         res.json(doc)
    //     }else{
    //         console.log(err)
    //     }
    // })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})