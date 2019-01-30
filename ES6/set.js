//集合自动去重
let set = new Set(['胡一','胡二','胡三','胡四','胡三'])
console.log(set) //Set(4) { '胡一', '胡二', '胡三', '胡四' }

console.log(set.size) //4 长度

set.add('胡五') //Set(5)
set.delete('胡四') //Set(4)
set.add('胡三') //Set(4)
console.log(set)

console.log(set.has('胡五')) //true

console.log(set.keys()) //SetIterator {"胡一", "胡二", "胡三", "胡五"}
console.log(set.values()) //SetIterator {"胡一", "胡二", "胡三", "胡五"}

console.log(set.clear()) //undefined
console.log(set) //Set(0)

