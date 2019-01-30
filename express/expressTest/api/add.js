const express = require('express')
const router = express.Router()
const pg = require('pg');
const config = require('../config/config.json')

router.get('/',function(req,res){
    let params = req.query
    const pool = new pg.Pool(config);

    pool.connect(function(error, client, done) {
        let sqlStr = `SELECT * FROM management.project_code limit ${params.count}`;      // 查表的SQL语句
        client.query(sqlStr, [], function(err, response) {
            done();
            let resBody={}
            if(err){
                resBody.ret = 0
                resBody.msg = err.message
            }else{
                resBody.ret = 1
                resBody.data = response.rows
                let th_arr = response.fields.map((val)=>{
                    return val.name
                })
                resBody.data.unshift({...th_arr})
            }
            res.send(resBody)
        })
    })
})
module.exports = router
