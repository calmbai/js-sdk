const userApi = require('../apidao/userApiDao');
const accountApi = require('../apidao/AccountApiDao');
const http = require('http');

http.createServer(function (request, response) {

    // 终端打印如下信息
    //console.log('Server running at http://127.0.0.1:8888/');
        userApi.registerByPhone({country: '+86', mobile: '13800000000'}).then(function (data) {
            console.debug("注册手机号结果：-----"+JSON.stringify(data));
        });

    userApi.registerByEmail({email: "hicointest.@qq.com"}).then(function (data) {
        console.debug("注册邮箱结果：------" + JSON.stringify(data));
    });
    //获取用户指定币账户地址
    userApi.getUserInfo({symbol:"eth",uid:"3529218"}).then(function (data) {
        console.debug("获取用户指定币账户地址结果：------" + JSON.stringify(data));
    });


    //获取用户指定币账户地址
    accountApi.getDepositAddress({symbol:"eth",uid:"3529218"}).then(function (data) {
        console.debug("获取用户指定币账户地址结果：------" + JSON.stringify(data));
    });

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8888);

