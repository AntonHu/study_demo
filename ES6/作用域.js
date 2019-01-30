const obj = {
    name:'had'
}
try{
    obj={
        name:'anton'
    }
    console.log(item)
}catch(err){
    console.log(err)
    console.log('change obj fail')
}
try{
    obj.name='anton'
    console.log(obj)
}catch(err){
    console.log(err)
    console.log('chang obj.name success')
}