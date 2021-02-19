# js-sdk
waas api client sdk

依赖包安装：

```
npm install js-waas-sdk@1.0.2
```

使用方式:

```
const userApi = require('js-waas-sdk/apidao/userApiDao');
const accountApi = require('js-waas-sdk/apidao/AccountApiDao');
const billingApi = require('js-waas-sdk/apidao/BillingApiDao');
const Cons = require('js-waas-sdk/utils/Constants');
const asyncApi = require('js-waas-sdk/apidao/AsyncNotifyApiDao');


Cons.setAppId('baaceb1e506e1b5d7d1f0a3b1622583b');//应用id
Cons.setHost('http://awstestopenapi.hiwallet.pro');//接口域名
Cons.setPubKey('wass 公钥');
Cons.setPrivateKey('商户私钥');
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
var res1 = asyncApi.decodeNotifyRequest('kK506LW2SEsTeGq1t1IcqRuCykbpd-pubm5roRH7WUFDt4NHr6FGmWQ_EH2_V8TZ9m_Ri7r389ZbAPA3Z5YcLFOSWMA-URuw8mKabNu2jGA7yY91270JcIx0_b5y16LdxzqBVS1BF-
PZBBH3TTc5cv9Xx4i0r-UCvhkTmmlB4hJN1bMCnEeDXHcloLeBpyFvO_-hMBWXymSUp55VVW1m7ua6eImIAoWY1UrTGFoV_xG4ACWbBGBBAVybrFFRXkFTHwat5J7vn4dcPH-Ih4bCoAQofXRhjka8eFR8EfD4TeRN1ZR1x7w8wpJnGdQuazpU6uwKlcVP0RcJCqzIROWqnw');
console.debug("解密用户充值异步回调通知请求参数---" + res1);
//16. 解密提现二次验证请求参数
var res2 = asyncApi.decodeWithdrawRequest('加密的请求参数');
console.debug("解密提现二次验证请求参数---" + res2);
//17. 加密二次验证提现响应数据
var res3 = asyncApi.encodeWithdrawResponse({"check_sum":"1234","time":"12345678"});
console.debug("加密二次验证提现响应数据---" + res3);

```