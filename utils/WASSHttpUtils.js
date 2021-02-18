const Cons = require('./Constants');
const request = require('request');
const RSA = require('./RSAUtil');

const baseArgs = {charset: Cons.UTF8, sign: '', time: Date.now(), app_id: Cons.app_id, version: Cons.VER};


exports.request = async function (data) {
    var allAgrs = Object.assign(baseArgs, data.requestData);
    var orignStr = JSON.stringify(allAgrs);
    if(Cons.DEBUG){
        console.log("orignStr->", orignStr);
    }


    var paramEncrypted = RSA.privateKeyEncrypt(orignStr);
    if(Cons.DEBUG) {
        console.log("paramEncrypted->", paramEncrypted);
    }
    const options = {
        method: data.method,
        url: Cons.HOST + Cons.VER + data.url,
        form: {
            app_id: Cons.app_id,
            data: paramEncrypted
        }

    };
    return await new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });

};
