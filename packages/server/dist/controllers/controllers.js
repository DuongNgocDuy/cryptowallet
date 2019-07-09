"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
function CryptowalletController_create(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .create(params.cryptowallet)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_1 = _c.sent();
                    console.log('Error post CryptowalletController_create', ex_1.stack);
                    res.status(500).send(ex_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_create = CryptowalletController_create;
function CryptowalletController_getCryptoWalletByID(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_2;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getCryptoWalletByID(params.crytowalletID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_2 = _c.sent();
                    console.log('Error get CryptowalletController_getCryptoWalletByID', ex_2.stack);
                    res.status(500).send(ex_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getCryptoWalletByID = CryptowalletController_getCryptoWalletByID;
function CryptowalletController_getAllCryptoWallet(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_3;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllCryptoWallet()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_3 = _c.sent();
                    console.log('Error get CryptowalletController_getAllCryptoWallet', ex_3.stack);
                    res.status(500).send(ex_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllCryptoWallet = CryptowalletController_getAllCryptoWallet;
function CryptowalletController_createAdmin(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_4;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createAdmin(params.admin)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_4 = _c.sent();
                    console.log('Error post CryptowalletController_createAdmin', ex_4.stack);
                    res.status(500).send(ex_4);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createAdmin = CryptowalletController_createAdmin;
function CryptowalletController_createTrader(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_5;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createTrader(params.trader)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_5 = _c.sent();
                    console.log('Error post CryptowalletController_createTrader', ex_5.stack);
                    res.status(500).send(ex_5);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createTrader = CryptowalletController_createTrader;
function CryptowalletController_createModerator(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_6;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createModerator(params.moderator)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_6 = _c.sent();
                    console.log('Error post CryptowalletController_createModerator', ex_6.stack);
                    res.status(500).send(ex_6);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createModerator = CryptowalletController_createModerator;
function CryptowalletController_createWallet(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_7;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createWallet(params.wallet)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_7 = _c.sent();
                    console.log('Error post CryptowalletController_createWallet', ex_7.stack);
                    res.status(500).send(ex_7);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createWallet = CryptowalletController_createWallet;
function CryptowalletController_getAdminById(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_8;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAdminById(params.adminID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_8 = _c.sent();
                    console.log('Error get CryptowalletController_getAdminById', ex_8.stack);
                    res.status(500).send(ex_8);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAdminById = CryptowalletController_getAdminById;
function CryptowalletController_getModeratorById(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_9;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getModeratorById(params.modID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_9 = _c.sent();
                    console.log('Error get CryptowalletController_getModeratorById', ex_9.stack);
                    res.status(500).send(ex_9);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getModeratorById = CryptowalletController_getModeratorById;
function CryptowalletController_getTraderById(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_10;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getTraderById(params.traderID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_10 = _c.sent();
                    console.log('Error get CryptowalletController_getTraderById', ex_10.stack);
                    res.status(500).send(ex_10);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getTraderById = CryptowalletController_getTraderById;
function CryptowalletController_getWalletHistoryById(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_11;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getWalletHistoryById(params.walletID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_11 = _c.sent();
                    console.log('Error get CryptowalletController_getWalletHistoryById', ex_11.stack);
                    res.status(500).send(ex_11);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getWalletHistoryById = CryptowalletController_getWalletHistoryById;
function CryptowalletController_getAllModerators(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_12;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllModerators()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_12 = _c.sent();
                    console.log('Error get CryptowalletController_getAllModerators', ex_12.stack);
                    res.status(500).send(ex_12);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllModerators = CryptowalletController_getAllModerators;
function CryptowalletController_getAllTraders(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_13;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllTraders()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_13 = _c.sent();
                    console.log('Error get CryptowalletController_getAllTraders', ex_13.stack);
                    res.status(500).send(ex_13);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllTraders = CryptowalletController_getAllTraders;
function CryptowalletController_getAllWallets(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_14;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllWallets()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_14 = _c.sent();
                    console.log('Error get CryptowalletController_getAllWallets', ex_14.stack);
                    res.status(500).send(ex_14);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllWallets = CryptowalletController_getAllWallets;
function CryptowalletController_getAllModels(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_15;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllModels()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_15 = _c.sent();
                    console.log('Error get CryptowalletController_getAllModels', ex_15.stack);
                    res.status(500).send(ex_15);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllModels = CryptowalletController_getAllModels;
function CryptowalletController_makeTransaction(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_16;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .makeTransaction(params.senderID, params.receiverID, params.amount, params.creationDate, params.content)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_16 = _c.sent();
                    console.log('Error post CryptowalletController_makeTransaction', ex_16.stack);
                    res.status(500).send(ex_16);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_makeTransaction = CryptowalletController_makeTransaction;
function CryptowalletController_createMoney(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_17;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createMoney(params.adminID, params.reciverID, params.amountToCreate, params.content, params.creationDate)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_17 = _c.sent();
                    console.log('Error post CryptowalletController_createMoney', ex_17.stack);
                    res.status(500).send(ex_17);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createMoney = CryptowalletController_createMoney;
//# sourceMappingURL=controllers.js.map