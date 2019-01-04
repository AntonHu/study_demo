class Person{
  constructor(name='无名',sex='未知'){
    this.name=name;
    this.sex=sex
  }
  greeting(){
    console.log('hello!')
  }
  speak(content){
    console.log(`${this.name}:${content}`)
  }
}

class Chinese extends Person{
  info(){
    console.log(`姓名:${this.name}`)
    console.log(`性别:${this.sex}`)
  }
  speak(content){
    console.log(`${this.name}(中国人):${content}`)
  }
}

let one = new Person
one.speak('看看你能说什么')

console.log('-----------------------')

let yang = new Chinese('熠旸','不女')
yang.info()
yang.speak('全世界都在说中国话')