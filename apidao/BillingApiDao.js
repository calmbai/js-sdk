const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');


/**
 * Sync deposit record
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
 * Obtain deposit records in batches
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
 * Sync gas fee records
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
 * Get miner fee records in batches
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
 * User withdrawal
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
 * Sync withdrawal record
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
 * Sync withdrawal record
 */
exports.getWithdrawList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getWithdrawList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};