// 解构变量
let [param1,,param2,param3]=['熠旸',23,'男']
console.log(param1,param2,param3) //'熠旸' '男' undefined

// 解构对象
let {prop1,prop2,prop3}={prop2:'熠旸',prop1:23,prop3:'男'}
console.log(prop1,prop2,prop3) //23 熠旸 男
// 错误解构
let {name:str} = {name:'anton'}
try{
    console.log(name)
}catch(err){
    console.log(err) //ReferenceError: name is not defined
    console.log(str) //'anton'
}

// 解构string
let [s1,s2,s3]='98765'
console.log(s1,s2,s3) //9 8 7
// 错误解构
try{
    let [s4,s5,s6]=98765
}catch(err){
    console.log(err)
}



