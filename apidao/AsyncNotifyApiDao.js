/**
 *  异步回调通知相关api(提供给waas的接口)
 */
const RSA = require('../utils/RSAUtil');

/**
 *  解密用户充值异步回调通知请求参数
 * @param cipher
 */
exports.decodeNotifyRequest = function (cipher) {
    try {
        cipher = (typeof cipher == 'string') ? cipher : JSON.stringify(cipher);
        if (cipher == 'null' || cipher.trim().length == 0) {
            return 'VerifyRequest cipher can not be empty!'
        }
        return RSA.publicKeyDecrypt(cipher);
    } catch (e) {
        console.error(e)
    }
};

/**
 *  解密提现二次验证请求参数
 * @param cipher
 */
exports.decodeWithdrawRequest = function (cipher) {
    try {
        cipher = (typeof cipher == 'string') ? cipher : JSON.stringify(cipher);
        if (cipher == 'null' || cipher.trim().length == 0) {
            return 'VerifyRequest cipher can not be empty!'
        }
        return RSA.publicKeyDecrypt(cipher);
    } catch (e) {
        console.error(e)
    }
};

/**
 *  加密二次验证提现响应数据
 * @param withdraw
 */
exports.encodeWithdrawResponse = function (cipher) {
    try {
        cipher = (typeof cipher == 'string') ? cipher : JSON.stringify(cipher);
        if (cipher == null || cipher.trim().length == 0) {
            return 'VerifyResponse encode cipher return null!'
        }
        return RSA.privateKeyEncrypt(cipher);
    } catch (e) {
        console.error(e)
    }
};