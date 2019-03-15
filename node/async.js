var async = require('async')

function oneFun(){
    // setTimeout(function(){

    // },1000)
    var k = 0
    setInterval(function(){
        console.log("aaa="+new Date())
        k++
        if(k == 3){
            clearInterval(this)
        }
    },1000)
    console.log("oneFun完成")
}
function twoFun(){
    var j = 0
    setInterval(function(){
        console.log("bbb="+new Date())
        j++
        if(j == 3){
            clearInterval(this)
        }
    },1000)
    console.log("twoFun完成")
}
// oneFun();
// twoFun();

function exec(){
    async.waterfall(
        [
            function(done){
                var k = 0
                setInterval(function(){
                    console.log("aaa="+new Date())
                    k++
                    if(k == 3){
                        clearInterval(this)
                        done(null,'one完毕')
                    }
                },1000)
            },
            function(preVal,done){
                var j = 0
                setInterval(function(){
                    console.log(preVal+"="+new Date())
                    j++
                    if(j == 3){
                        clearInterval(this)
                        done(null,preVal+',two完毕')
                    }
                },1000)
            }
        ],function(err,rs){
            console.log(err)
            console.log(rs)
        }
    )
}
exec()

console.log("主线程完毕")