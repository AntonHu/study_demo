function y(index){
  return new Promise((suc,fail)=>{ //返回一个Promise对象
    setTimeout(function(){ //定时，模拟异步调用接口,延时返回数据
      suc(index) //处理成功
    },1000)
  })
}
async function x(){ //async,声明一个异步函数
  for(let i=1;i<=5;i++){ //for循环体,1~5
    await y(i).then((_index)=>{ //await,等待y方法返回的promise执行完毕
      console.log(_index) //成功处理,按顺序打印1~5
    }).catch((err)=>{
      console.log(err) //错误处理,打印错误对象
    })
  }
}
x()