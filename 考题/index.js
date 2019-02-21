// 判断变量是一个string
const string_judge_demo = (temp) => {
    console.log(typeof temp === 'string')
    console.log(temp.constructor === String)
}

// 消除字符串空格
const string_break_demo = (temp) => {
    // 去所有空格
    console.log(temp.replace(/\s*/g,""))
    // 去两端空格
    console.log(temp.replace(/^\s*|\s*$/g,""))
    console.log(temp.trim())
}

// string_judge_demo("nihaoa!")
// string_break_demo("  n i  h a o  !  ")