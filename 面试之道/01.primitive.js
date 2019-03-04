// 原始类型，存储的是值，没有可调用的方法，例1.toString()
function log(printf){
    try{
        console.log(printf)
    }catch(e){
        console.info(e)
    }
}

log('1'.toString()) //1 因为此处'1'被强制转换成String对象了