// 不使用map，对象作为key强制转为string
let obj1={a:1},obj2={b:2},obj={}
obj.name = 'had';
obj[obj1] = 'anton';
obj[obj2] = 'hu';
console.log(obj) // Object {name: "had", [object Object]: "hu"}

// 使用map
let map = new Map([
    ['name','had'],
    ['age',23],
    ['age',24],
    [obj1,'obj_content'],
    [['other'],['apple','banana']]
])
console.log(map) //Map(4) 自动去重

map.set('friend',['dog','cat'])

console.log(map) //Map(5)

console.log(map.get(obj1)) //'obj_content'

console.log(map.entries()) //MapIterator {}

// 遍历
map.forEach(function(value,index){
    console.log(`${index}:${value}`)
})

//注意 以下会产生两个不同的{}
map.set({},'ni')
map.set({},'hao')