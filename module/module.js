var module = (function(){
    var count = 0
    var fun1=function(){
        console.log("I'm fun1!")
    }

    var fun2=function(){
        console.log("I'm fun2!")
    }

    return {
        fun1,
        fun2
    }
})()