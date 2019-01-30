let obj={}
obj.name = '胡一'
obj.name = '胡二'

console.log(obj) //{name: "胡二"}

obj[Symbol('name')]='胡三'
obj[Symbol('name')]='胡四'

console.log(obj) //{name: "胡二", Symbol(name): "胡三", Symbol(name): "胡四"}