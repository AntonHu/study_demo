var fs = require('fs')
module.exports = {
    readFile: (path,callback) => {
        fs.readFile(path, (err, data) => { //异步
            if(err) {
                console.log(err);
                callback("文件不存在")
            }else {
                console.log(data.toString());
                callback(data)
            }
        });
        console.log("异步方法执完毕");
    },
    readFileSync: path => {
        var data = fs.readFileSync(path, 'utf-8');
        console.log('同步方法执行完毕');
        return data;
    },
    writeFile:(path, data, callback) => {
        fs.writeFile(path, data, err => {
            if(err) {
                throw err;
            }
            console.log("It\' s saved!") //文件被保存
            callback('文件写成功')
        })
    },
    writeFileSync: path => {
        var data = fs.readFileSync(path, data);
        console.log('同步写文件完毕');
    },
    readImg: (path,res) => {
        fs.readFile(path, 'binary', (err, fileData) => {
            if(err) {
                console.log(err);
                return;
            }else {
                res.write(fileData, 'binary')
                res.end("读取图片完成！")
            }
        })
    }
}