const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * User mobile phone registration address
 */
exports.registerByPhone = async function (reqData) {

    //var reqData = {country: '+86', mobile: '13800000000'};
    var respData = await WApiHttpUtils.request({
        url: Cons.createUser,
        method: Cons.POST,
        requestData: reqData
    });
    //console.log("raw resp Data->",JSON.parse(respData).data)
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * User email (virtual account) to register
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
 * Query user information
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
 * 	Get a list of the merchant's coins
 */
exports.getCoinList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getCoinList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};