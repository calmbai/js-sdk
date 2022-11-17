const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * Obtain user-specified coin account
 */
exports.getByUidAndSymbol = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getByUidAndSymbol,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};
/**
 * Obtain the balance of the merchant's  account
 */
exports.getCompanyBySymbol = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getCompanyBySymbol,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};
/**
 * Obtain the address of the user-specified  account
 */
exports.getDepositAddress = async function (reqData) {

    var respData = await WApiHttpUtils.request({
        url: Cons.getDepositAddress,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.publicKeyDecrypt(JSON.parse(respData).data);
};

