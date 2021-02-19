const userApi = require('../apidao/userApiDao');
const accountApi = require('../apidao/AccountApiDao');
const billingApi = require('../apidao/BillingApiDao');
const http = require('http');
const Cons = require('../utils/Constants');
const asyncApi = require('../apidao/AsyncNotifyApiDao');

/*http.createServer(function (request, response) {

    // 终端打印如下信息
    //console.log('Server running at http://127.0.0.1:8888/');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8888);*/

Cons.setAppId('baaceb1e506e1b5d7d1f0a3b1622583b');
Cons.setHost('http://awstestopenapi.hiwallet.pro');
Cons.setPubKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAua4XMw/W9BxyZhirTlNau5Y/tdAHkPsbZo58Cdz1ByeRX8RwOibpREDZLTwhMTZGroqWEAZ+efQhx0gez++03Sw6IsPWPDpzpM90ezn2gBqPog7jxQA+M0E32gMHWB5ygplPwQkGz/qGYeJ5qhp2OZ8O+jFqOJNi7ob1hE2QsPT118HIhUzTL77urD61BovI+jg9Rx6PGAqlFLLmfXToqDulLkYVKhhQlL7ii6iuzIXgl46mbmvH2RXJRq083sa9b9J1z/WzXxNaHNpq5USl3ifTTyD/IiOKnblA7f4KJmr9rcMFbAP1mNxz95at6hPBvqGypPqqixxPBrdkOIPUVwIDAQAB');
Cons.setPrivateKey('MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD6YNILWOJZjS6FQQ9ZL9CEKcWZTTldrDLsxP2dQME7hSUTDQ5AosBUZk18Uq212SC2+L0UA9G6WPoCNzHCB8TP25jC+EwIkHMN4EEPRs+bEHUgX3Bq3oR2SCHjEiqleTFW2kO/oS6Vg9bhTST5MFaEnA0fc2Bh3+4iRus+5mVc6ux0lG55f1qmvUNM4hhP7qVpzc3X0xFA0Slu8dyel1dbOUQlJbUkrt5NzXXqmRoP5UVHUCXPZzH1kbxdbGA58TonXceh6DHQRa6pIBNaQ6BfnqhMvGVvuIqKPrdWq8yigvTw2zqBfwCwY3/3FZoI5ICQ8oS3GRHYP/rXzncqkKTzAgMBAAECggEAdag77EMnkueKXeo12TZj6Udr6N9mPsOl5qenelcsttiZlHtFIFCays6MSQjdQqA3BGSdDaPB0azwR0xCoKhf70GFZtGhgUDIIFQqnpArDPZN5BmVTVMlsiOxcPBfhAUQj3zf61RF/NLIjnVfE46IiaZ/cDEasMO3NvpWn+dK6L86zklgwHfC5IXTFnFRVA3bWkAQ3gswhLzjs50HNoNV96fsnbt1n7NSWhyz9B8hGMV+qYz1NGmb+VsaAune+oIv28krcaqf+Doah37rCmzEgVeZZ1/flPFOXpaq1eGJDgbLu6FbbgqfabCBlhmuzuwNbDl/2T/U9U6JoQWGR7t++QKBgQD8XSzBqpWwz8ebfsPipvnhIugbHgBnwLaRc3/xieuNuiDMsYPY1isBWSeYqjwV5uTad9s9dRxb6OOMH+KChkUxkYhEvoujUulGSuO4MxJlWl99WWEsbLzefubBD0zyHo5daHbPPXO8UPMu/SfiYxT2D5wsW2/swUqHWS3AmDS9RQKBgQD9/FJC/++DLyhU60Q9vrVY50zQTyPLtPnuIxbsPXB1Exo1wKe+LC02k9Cub9f5EFViTEniWRasB7ecnDxJT/ISU+hJjMUKFuaHueb7dO6wiIqyfpJeQM/4fKalBQI+nCEh3aceNKP44mk/lv2x22+P47EAKh7yqBdEVUv5GlHw1wKBgQCbAqReJOijXU0vLtMlYgj0h9tn5Kq9D/tUJky9UUkVmfFRqevhgdOSlW+j71TO4y9JHfvVqRyNO+ShCmi4Yb8Yrlq0VxIwdNoCqjdryjsPdE5ZEVCF2Bi+1dXpWfuacLhjman4q7duQY7OGwOno9KZPYdhG50JIMUlk9pthVBHvQKBgCXUC+iAuAqg3m/vboWHvvjT0mQANYOkm8j1HvfmmrZFNxUkcZdoev9y+pTQgalN3nm6hRKaVD8hEx7XQj9lEdfa+XDi74H2MTWr4ZQ4MUjHvWiiY2h4XMFUx3kyisgKdwDVQ4vDKVzrU+OtuHFiDnau4fD1VRCtKnH6Bku+uM+XAoGAB7V/OFlk7gaX7gne7p+DypXICn1oGE46aFLsDciOyePNovYg6bfdiUB9evwFSijiHq7eldZIQSRIdUalL1qfv2zDwFmEGpSd/RZYOOv21c3eISjln6W7ZGtumtLHx2nGpC072i5vNee0aAPEdvO0h3y4gvzad5L4KwIwyHifKic=')
//1.注册手机号
userApi.registerByPhone({country: '+86', mobile: '13800000000'}).then(function (data) {
    console.debug("注册手机号结果：-----" + JSON.stringify(data));
});
//2.注册邮箱
userApi.registerByEmail({email: "hicointest.@qq.com"}).then(function (data) {
    console.debug("注册邮箱结果：------" + JSON.stringify(data));
});
//3.获取用户指定币账户地址
userApi.getUserInfo({symbol: "eth", uid: "3529218"}).then(function (data) {
    console.debug("获取用户指定币账户地址结果：------" + JSON.stringify(data));
});
//4.获取商户的币种列表
userApi.getCoinList({time: Date.now()}).then(function (data) {
    console.debug("获取商户的币种列表结果：------" + JSON.stringify(data));
});

//5.获取用户指定币账户地址
accountApi.getDepositAddress({symbol: "eth", uid: "3529218"}).then(function (data) {
    console.debug("获取用户指定币账户地址结果：------" + JSON.stringify(data));
});
//6.获获取商户归集账户余额
accountApi.getCompanyBySymbol({symbol: "eth"}).then(function (data) {
    console.debug("获取用户指定币账户地址结果：------" + JSON.stringify(data));
});
//7.根据币种及用户id查询用户的账户
accountApi.getByUidAndSymbol({"symbol": "eth", "uid": 3529218}).then(function (data) {
    console.debug("根据币种及用户id查询用户的账户结果：------" + JSON.stringify(data));
});
//8.提现
billingApi.withdraw({
    "request_id": 12345678,
    "from_uid": "",
    "from_address": "0x754b0c610e011d0d40c810ef857b4dd989a67332",
    "to_address": "0x754b0c610e011d0d40c810ef857b4dd989a67332",
    "amount": "1.00000022",
    "symbol": "ETH"
}).then(function (data) {
    console.debug("提现结果：------" + JSON.stringify(data));
});

//9.批量获取提现记录
billingApi.getWithdrawList({"ids": "123,345,6778"}).then(function (data) {
    console.debug("批量获取提现记录结果：------" + JSON.stringify(data));
});
//10.同步提现记录,返回大于id的100条充值记录数据
billingApi.syncWithdrawList({"max_id": 0}).then(function (data) {
    console.debug("同步提现记录结果：------" + JSON.stringify(data));
});
//11.同步矿工费记录，,返回大于id的100条充值记录数据
billingApi.syncMinerFeeList({"max_id": 0}).then(function (data) {
    console.debug("同步矿工费记录结果：------" + JSON.stringify(data));
});

//12.获取矿工费记录
billingApi.minerFeeList({"ids": "123,345,6778"}).then(function (data) {
    console.debug("获取矿工费记录结果：------" + JSON.stringify(data));
});
//13.同步充值记录
billingApi.syncDepositList({"max_id": 0}).then(function (data) {
    console.debug("同步充值记录结果：------" + JSON.stringify(data));
});

//14.获取充值记录
billingApi.getDepositList({"ids": "123,345,6778"}).then(function (data) {
    console.debug("获取充值记录结果：------" + JSON.stringify(data));
});

//15. 解密用户充值异步回调通知请求参数
var res1 = asyncApi.decodeNotifyRequest('kK506LW2SEsTeGq1t1IcqRuCykbpd-pubm5roRH7WUFDt4NHr6FGmWQ_EH2_V8TZ9m_Ri7r389ZbAPA3Z5YcLFOSWMA-URuw8mKabNu2jGA7yY91270JcIx0_b5y16LdxzqBVS1BF-PZBBH3TTc5cv9Xx4i0r-UCvhkTmmlB4hJN1bMCnEeDXHcloLeBpyFvO_-hMBWXymSUp55VVW1m7ua6eImIAoWY1UrTGFoV_xG4ACWbBGBBAVybrFFRXkFTHwat5J7vn4dcPH-Ih4bCoAQofXRhjka8eFR8EfD4TeRN1ZR1x7w8wpJnGdQuazpU6uwKlcVP0RcJCqzIROWqnw');
console.debug("解密用户充值异步回调通知请求参数---" + res1);
//16. 解密提现二次验证请求参数
var res2 = asyncApi.decodeWithdrawRequest('');
console.debug("解密提现二次验证请求参数---" + res2);
//17. 加密二次验证提现响应数据
var res3 = asyncApi.encodeWithdrawResponse({"check_sum":"1234","time":"12345678"});
console.debug("加密二次验证提现响应数据---" + res3);


