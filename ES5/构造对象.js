function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype = {
    constructor:Person,
    print(){
        console.log(`I'm ${this.name},${this.age} years old!`)
    }
}
var person = new Person('张三',20)
person.print()