/**
 * RSA 加密算法封装，
 * 对外提供加密、解密
 */
const NodeRSA = require("node-rsa");
const Cons = require("./Constants");
const URLSafeBase64 = require('urlsafe-base64');

/**
 * encrypt by private key
 */
exports.privateKeyEncrypt = function (data) {
    var nodeRasPublic = new NodeRSA(Cons.privateKey, 'pkcs8-private');
    var encryData = nodeRasPublic.encryptPrivate(data, 'base64');
    //URL safe encode
    return URLSafeBase64.encode(encryData);
};

/**
 * decrypt by public  key
 */
exports.publicKeyDecrypt = function (data) {
    var nodeRasPublic = new NodeRSA(Cons.hiCoinPubKey);
    return nodeRasPublic.decryptPublic(data, Cons.UTF8);
};