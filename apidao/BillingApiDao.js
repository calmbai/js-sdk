const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');


/**
 *同步充值记录
 */
exports.syncDepositList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.syncDepositList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 批量获取充值记录
 */
exports.getDepositList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getDepositList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 同步矿工费记录
 */
exports.syncMinerFeeList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.syncMinerFeeList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 批量获取矿工费记录
 */
exports.minerFeeList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.minerFeeList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 用户提现
 */
exports.withdraw = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.withdraw,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 同步提现记录
 */
exports.syncWithdrawList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.syncWithdrawList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * 同步提现记录
 */
exports.getWithdrawList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getWithdrawList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};