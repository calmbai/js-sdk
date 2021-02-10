const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * 用户手机注册地址
 */
exports.registerByPhone = async function (reqData) {

    //var reqData = {country: '+86', mobile: '13800000000'};
    var respData = await WApiHttpUtils.request({
        url: Cons.createUser,
        method: Cons.POST,
        requestData: reqData
    });
    //console.log("raw resp Data->",responseWAPIData)
    //console.log("decrypt resp Data->",RSA.publicKeyDecrypt(JSON.parse(responseWAPIData).data));
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 用户邮箱（虚拟账号）注册
 */
exports.registerByEmail = async function (reqData) {

    //var reqData = {"email": "hicointest.@qq.com"};
    var respData = await WApiHttpUtils.request({
        url: Cons.registerEmail,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 查询用户信息
 */
exports.getUserInfo = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getUserInfo,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 	获取商户的币种列表
 */
exports.getCoinList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getCoinList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};