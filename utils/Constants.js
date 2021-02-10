exports.UTF8 = 'utf8';
exports.WAPIAPPID = 'baaceb1e506e1b5d7d1f0a3b1622583b';

//about the https
exports.HOST = 'http://awstestopenapi.hiwallet.pro/api/';
exports.VER = 'v2';
exports.GET = 'GET';
exports.POST = 'POST';
exports.app_id = 'baaceb1e506e1b5d7d1f0a3b1622583b';

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

