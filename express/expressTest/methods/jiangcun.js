/*
 * @文件描述: 蒋村九价
 * @作者: Anton
 * @Date: 2020-08-04 18:51:18
 * @LastEditors: Anton
 * @LastEditTime: 2020-08-04 19:54:50
 */
const express = require('express');
const app = express();
const request = require('request');
// body解析
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

const jiangcun = () => {
    const activityDuration = 10; // 活动时间轮询间隔 单位秒
    const user_number = '18558704747'; // 账号登陆手机
    let userInfo = {
        id: '', // 空
        name: '', // 姓名
        idNo: '', // 身份证
        mobile: '', // 手机号
        accountId: '', // 用户id
        appointType: 2 // 1 四价 2 九价
    };
    const CDN = 'http://hospatial.mychwl.cn:3322/api/';
    const API_LIST = {
        GET_USER_INFO: CDN + 'account/getDefaultUser', // 根据openId获取用户信息
        GET_ACTIVITY_TIME: CDN + 'appointment/getAppointmentDate', // 获取预约活动的时间
        GET_RECORD: CDN + 'appointment/getAppointment/', // 根据身份证查预约记录
        SUBMIT_REVERSE: CDN + 'appointment/addAppointment' // 提交预约申请
    };
    // 根据openId获取用户信息
    const getUserInfo = () => {
        const options = {
            headers: {},
            url: API_LIST.GET_USER_INFO,
            method: 'POST',
            json: true,
            qs: { openId: user_number }
        };
        const cb = (error, response, data) => {
            if (!response) {
                console.log('------获取用户信息没有response------');
                console.log(error);
            } else if (response.statusCode == 200) {
                if (data.code === 0 && data.data) {
                    geActivityTime(data.data);
                }
            } else {
                console.log('------获取用户信息接口非200------');
                console.log(error);
            }
        };
        request(options, cb);
    };
    // 获取预约活动的时间
    const geActivityTime = () => {
        const options = {
            headers: {},
            url: API_LIST.GET_ACTIVITY_TIME,
            method: 'GET',
            json: true
        };
        const cb = (error, response, data) => {
            if (!response) {
                console.log('------获取预约活动的时间没有response------');
                console.log(error);
            } else if (response.statusCode == 200) {
                if (data.code === 0 && data.data) {
                    if (data.length > 0) {
                        const startTime = data[0].startTime;
                        if (new Date() >= (startTime - activityDuration * 1000)) {
                            submit();
                        } else {
                            console.log(`------距离活动开始 ${startTime} 还有 ${((new Date(startTime) - new Date()) / 1000).toFixed(0)} 秒------`);
                            console.log(`------ ${activityDuration} 秒后自动重新查询------`);
                            setTimeout(geActivityTime, activityDuration * 1000);
                        }
                    } else {
                        console.log(`------活动尚未配置 ${activityDuration} 秒后自动重新查询------`);
                        setTimeout(geActivityTime, activityDuration * 1000);
                    }
                }
            } else {
                console.log('------获取预约活动的时间接口非200------');
                console.log(error);
            }
        };
        request(options, cb);
    };
    // 根据身份证查预约记录
    const geUserRecord = () => {
        const options = {
            headers: {},
            url: API_LIST.GET_RECORD + userInfo.idNo,
            method: 'GET',
            json: true
        };
        const cb = (error, response, data) => {
            if (!response) {
                console.log('------根据身份证查预约记录没有response------');
                console.log(error);
            } else if (response.statusCode == 200) {
                if (data.code === 0 && data.data) {
                    console.log('------预约到了！！！你是最棒的！！！你就是天选之子！！！撒花！！！------');
                } else {
                    console.log('------还没有预约到，冲冲冲！！！------');
                    submit();
                }
            } else {
                console.log('------根据身份证查预约记录接口非200------');
                console.log(error);
            }
        };
        request(options, cb);
    };
    // 提交预约申请
    const submit = () => {
        const options = {
            headers: {},
            url: API_LIST.GET_RECORD + userInfo.idNo,
            method: 'GET',
            json: true
        };
        const cb = (error, response, data) => {
            if (!response) {
                console.log('------提交预约申请没有response------');
                console.log(error);
            } else if (response.statusCode == 200) {
                if (data.code === 0 && data.data) {
                    console.log('------好像抢到了！！！------')
                    geUserRecord();
                } else {
                    console.log('------没抢到？？？努力冲冲冲！！！------')
                    submit();
                }
            } else {
                console.log('------提交预约申请接口非200------');
                console.log(error);
            }
        };
        request(options, cb);
    };

    getUserInfo();
};

module.exports = {
    jiangcun
};