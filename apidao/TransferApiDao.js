const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * WaaS内部商户互相转账
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
 * 批量查询转账记录
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
 * 同步所有转账记录（分页）
 */
exports.syncTransferList = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.syncTransferList,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};