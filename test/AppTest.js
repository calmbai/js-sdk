const userApi = require('../apidao/userApiDao');
const accountApi = require('../apidao/AccountApiDao');
const billingApi = require('../apidao/BillingApiDao');
const http = require('http');

http.createServer(function (request, response) {

    // 终端打印如下信息
    //console.log('Server running at http://127.0.0.1:8888/');
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
        "symbol": "ETH",
        "focus_online": 0
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


    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8888);



