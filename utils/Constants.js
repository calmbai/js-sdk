exports.DEBUG=false;
exports.UTF8 = 'utf8';

//about the http
exports.HOST = "";
exports.VER = '/api/v2';
exports.GET = 'GET';
exports.POST = 'POST';
exports.app_id = '';

//用户相关操作
exports.createUser = "/user/createUser";
exports.registerEmail = "/user/registerEmail";
exports.getUserInfo="/user/info";
exports.getCoinList="/user/getCoinList";

//账户相关操作api
exports.getDepositAddress="/account/getDepositAddress";
exports.getByUidAndSymbol="/account/getByUidAndSymbol";
exports.getCompanyBySymbol="/account/getCompanyBySymbol";
//TODO不需要？
exports.transfer="/account/transfer";
exports.getTransferList="/account/transferList";
exports.syncTransferList="/account/syncTransferList";


//充值相关操作api
exports.syncDepositList="/billing/syncDepositList";
exports.getDepositList="/billing/depositList";
exports.syncMinerFeeList="/billing/syncMinerFeeList";
exports.minerFeeList="/billing/minerFeeList";
exports.withdraw="/billing/withdraw";
exports.syncWithdrawList="/billing/syncWithdrawList";
exports.getWithdrawList="/billing/withdrawList";

exports.privateKey = "";
exports.hiCoinPubKey = "";


exports.setPrivateKey=function (pKey) {
    this.privateKey='-----BEGIN PRIVATE KEY-----' +pKey+'-----END PRIVATE KEY-----';
};

exports.setPubKey=function (pKey) {
    this.hiCoinPubKey='-----BEGIN PUBLIC KEY-----' +pKey+ '-----END PUBLIC KEY-----';;
};

exports.setHost=function (host) {
    this.HOST=host;
};

exports.setAppId=function (appId) {
    this.app_id=appId;
};
exports.setDebug=function (debug) {
    this.DEBUG=debug;
};

