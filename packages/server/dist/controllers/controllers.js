"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
function CryptowalletController_create_post(req, res) {
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
exports.CryptowalletController_create_post = CryptowalletController_create_post;
function CryptowalletController_getCryptoWalletByID_get(req, res) {
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
exports.CryptowalletController_getCryptoWalletByID_get = CryptowalletController_getCryptoWalletByID_get;
function CryptowalletController_getAllCryptoWallet_get(req, res) {
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
exports.CryptowalletController_getAllCryptoWallet_get = CryptowalletController_getAllCryptoWallet_get;
function CryptowalletController_createAdmin_post(req, res) {
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
exports.CryptowalletController_createAdmin_post = CryptowalletController_createAdmin_post;
function CryptowalletController_createUser_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_5;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createUser(params.user)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_5 = _c.sent();
                    console.log('Error post CryptowalletController_createUser', ex_5.stack);
                    res.status(500).send(ex_5);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createUser_post = CryptowalletController_createUser_post;
function CryptowalletController_createWallet_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_6;
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
                    ex_6 = _c.sent();
                    console.log('Error post CryptowalletController_createWallet', ex_6.stack);
                    res.status(500).send(ex_6);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createWallet_post = CryptowalletController_createWallet_post;
function CryptowalletController_getAdminById_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_7;
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
                    ex_7 = _c.sent();
                    console.log('Error get CryptowalletController_getAdminById', ex_7.stack);
                    res.status(500).send(ex_7);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAdminById_get = CryptowalletController_getAdminById_get;
function CryptowalletController_getUserById_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_8;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getUserById(params.userID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_8 = _c.sent();
                    console.log('Error get CryptowalletController_getUserById', ex_8.stack);
                    res.status(500).send(ex_8);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getUserById_get = CryptowalletController_getUserById_get;
function CryptowalletController_getWalletHistoryById_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_9;
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
                    ex_9 = _c.sent();
                    console.log('Error get CryptowalletController_getWalletHistoryById', ex_9.stack);
                    res.status(500).send(ex_9);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getWalletHistoryById_get = CryptowalletController_getWalletHistoryById_get;
function CryptowalletController_getAllUsers_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_10;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getAllUsers()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_10 = _c.sent();
                    console.log('Error get CryptowalletController_getAllUsers', ex_10.stack);
                    res.status(500).send(ex_10);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllUsers_get = CryptowalletController_getAllUsers_get;
function CryptowalletController_getAllWallets_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_11;
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
                    ex_11 = _c.sent();
                    console.log('Error get CryptowalletController_getAllWallets', ex_11.stack);
                    res.status(500).send(ex_11);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllWallets_get = CryptowalletController_getAllWallets_get;
function CryptowalletController_getAllModels_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_12;
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
                    ex_12 = _c.sent();
                    console.log('Error get CryptowalletController_getAllModels', ex_12.stack);
                    res.status(500).send(ex_12);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getAllModels_get = CryptowalletController_getAllModels_get;
function CryptowalletController_getWalletIDFromEmail_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_13;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .getWalletIDFromEmail(params.userID)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_13 = _c.sent();
                    console.log('Error get CryptowalletController_getWalletIDFromEmail', ex_13.stack);
                    res.status(500).send(ex_13);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_getWalletIDFromEmail_get = CryptowalletController_getWalletIDFromEmail_get;
function CryptowalletController_makeTransaction_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_14;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .makeTransaction(params.senderID, params.receiverID, params.amount, params.transactionID, params.creationDate, params.content)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_14 = _c.sent();
                    console.log('Error post CryptowalletController_makeTransaction', ex_14.stack);
                    res.status(500).send(ex_14);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_makeTransaction_post = CryptowalletController_makeTransaction_post;
function CryptowalletController_createMoney_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_15;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.CryptowalletControllerBackEnd
                            .createMoney(params.adminID, params.reciverID, params.amountToCreate, params.transactionID, params.content, params.creationDate)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_15 = _c.sent();
                    console.log('Error post CryptowalletController_createMoney', ex_15.stack);
                    res.status(500).send(ex_15);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.CryptowalletController_createMoney_post = CryptowalletController_createMoney_post;
//# sourceMappingURL=controllers.js.map