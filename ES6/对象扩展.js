let obj={},name="huandong"
obj={
    name
}
console.log(obj) //{ name: 'huandong' }

// Object.assign()
let obj1={age:23},obj2={sex:'男'}
Object.assign(obj,obj1,obj2)
console.log(obj) //{ name: 'huandong', age: 23, sex: '男' }

// ...
let str = '98765467'
let arr = [...new Set(str)]
console.log(arr) //["9", "8", "7", "6", "5", "4"]
