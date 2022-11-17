const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * WaaS internal merchants transfer to each other
 */
exports.transfer = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.transfer,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * Batch query transfer records
 */
exports.getTransferList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getTransferList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

/**
 * Sync all transfer records (pagination)
 */
exports.syncTransferList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.syncTransferList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};