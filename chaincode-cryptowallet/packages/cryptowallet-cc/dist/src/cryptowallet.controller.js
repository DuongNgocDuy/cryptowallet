"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var cryptowallet_model_1 = require("./models/cryptowallet.model");
var admin_model_1 = require("./models/admin.model");
var moderator_model_1 = require("./models/moderator.model");
var trader_model_1 = require("./models/trader.model");
var wallet_model_1 = require("./models/wallet.model");
var CryptowalletController = (function (_super) {
    tslib_1.__extends(CryptowalletController, _super);
    function CryptowalletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CryptowalletController.prototype.create = function (cryptowallet) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, cryptowallet.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getCryptoWalletByID = function (crytowalletID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var crytowallet, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, cryptowallet_model_1.Cryptowallet.getOne(crytowalletID)];
                    case 1:
                        crytowallet = _a.sent();
                        return [2, crytowallet];
                    case 2:
                        error_1 = _a.sent();
                        console.log('MEGAFYK ERROR:', error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAllCrytoWalle = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var crytowallet, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, cryptowallet_model_1.Cryptowallet.getAll('io.worldsibu.walletchaincode')];
                    case 1:
                        crytowallet = _a.sent();
                        return [2, crytowallet];
                    case 2:
                        error_2 = _a.sent();
                        console.log('MEGAFYK ERROR:', error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.createAdmin = function (admin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, admin.save()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log('MEGAFYK LOGGER:', error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.createTrader = function (trader) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, trader.save()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log('MEGAFYK LOGGER:', error_4);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.createModerator = function (moderator) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, moderator.save()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log('MEGAFYK LOGGER:', error_5);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.createWallet = function (wallet) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_6;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, wallet.save()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log('MEGAFYK LOGGER:', error_6);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAdminById = function (adminID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, error_7;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, admin_model_1.Admin.getOne(adminID)];
                    case 1:
                        user = _a.sent();
                        return [2, user];
                    case 2:
                        error_7 = _a.sent();
                        console.log('MEGAFYK ERROR', error_7);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getModeratorById = function (modID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mod, error_8;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, moderator_model_1.Moderator.getOne(modID)];
                    case 1:
                        mod = _a.sent();
                        return [2, mod];
                    case 2:
                        error_8 = _a.sent();
                        console.log('MEGAFYK ERROR', error_8);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getTraderById = function (traderID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var trader, error_9;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, trader_model_1.Trader.getOne(traderID)];
                    case 1:
                        trader = _a.sent();
                        return [2, trader];
                    case 2:
                        error_9 = _a.sent();
                        console.log('MEGAFYK ERROR', error_9);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getWalletHistoryById = function (walletID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var wallet, error_10;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, wallet_model_1.Wallet.getOne(walletID)];
                    case 1:
                        wallet = _a.sent();
                        return [2, wallet];
                    case 2:
                        error_10 = _a.sent();
                        console.log('MEGAFYK ERROR', error_10);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAllModerators = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var moderators, error_11;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, moderator_model_1.Moderator.getAll('io.worldsibu.moderator')];
                    case 1:
                        moderators = _a.sent();
                        return [2, moderators];
                    case 2:
                        error_11 = _a.sent();
                        console.log("MEGAFYK ERROR:", error_11);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAllTraders = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var traders, error_12;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, trader_model_1.Trader.getAll('io.worldsibu.trader')];
                    case 1:
                        traders = _a.sent();
                        return [2, traders];
                    case 2:
                        error_12 = _a.sent();
                        console.log("MEGAFYK ERROR:", error_12);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAllWallets = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var wallets, error_13;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, wallet_model_1.Wallet.getAll('io.worldsibu.wallet')];
                    case 1:
                        wallets = _a.sent();
                        return [2, wallets];
                    case 2:
                        error_13 = _a.sent();
                        console.log("MEGAFYK ERROR:", error_13);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.getAllModels = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var storedAdmins, storedModerators, storedTraders, storedWallets;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, admin_model_1.Admin.getAll('io.worldsibu.admin')];
                    case 1:
                        storedAdmins = _a.sent();
                        console.log(storedAdmins);
                        return [4, moderator_model_1.Moderator.getAll('io.worldsibu.moderator')];
                    case 2:
                        storedModerators = _a.sent();
                        console.log(storedModerators);
                        return [4, trader_model_1.Trader.getAll('io.worldsibu.trader')];
                    case 3:
                        storedTraders = _a.sent();
                        console.log(storedTraders);
                        return [4, wallet_model_1.Wallet.getAll('io.worldsibu.wallet')];
                    case 4:
                        storedWallets = _a.sent();
                        console.log(storedWallets);
                        return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.makeTransaction = function (senderID, receiverID, amount, creationDate, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var senderWallet, receiverWallet, error_14;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4, wallet_model_1.Wallet.getOne(senderID)];
                    case 1:
                        senderWallet = _a.sent();
                        return [4, wallet_model_1.Wallet.getOne(receiverID)];
                    case 2:
                        receiverWallet = _a.sent();
                        senderWallet.balance = senderWallet.balance - amount;
                        senderWallet.transactionDetails.push({
                            sender: senderWallet.ownerName,
                            receiver: receiverWallet.ownerName,
                            amount: amount,
                            creationDate: creationDate,
                            content: content
                        });
                        receiverWallet.balance += amount;
                        receiverWallet.transactionDetails.push({
                            sender: senderWallet.ownerName,
                            receiver: receiverWallet.ownerName,
                            amount: amount,
                            creationDate: creationDate,
                            content: content
                        });
                        return [4, senderWallet.save()];
                    case 3:
                        _a.sent();
                        return [4, receiverWallet.save()];
                    case 4:
                        _a.sent();
                        return [3, 6];
                    case 5:
                        error_14 = _a.sent();
                        console.log('MEGAFYK ERROR', error_14);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    CryptowalletController.prototype.createMoney = function (adminID, reciverID, amountToCreate, content, creationDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var admin, receiverWallet, error_15;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4, admin_model_1.Admin.getOne(adminID)];
                    case 1:
                        admin = _a.sent();
                        return [4, wallet_model_1.Wallet.getOne(reciverID)];
                    case 2:
                        receiverWallet = _a.sent();
                        if (admin.role === 'admin') {
                            receiverWallet.balance += amountToCreate;
                            receiverWallet.transactionDetails.push({
                                sender: admin.name,
                                receiver: receiverWallet.ownerName,
                                amount: amountToCreate,
                                creationDate: creationDate,
                                content: content
                            });
                        }
                        return [4, receiverWallet.save()];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4:
                        error_15 = _a.sent();
                        console.log('MEGAFYK ERROR', error_15);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(cryptowallet_model_1.Cryptowallet))
    ], CryptowalletController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "getCryptoWalletByID", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], CryptowalletController.prototype, "getAllCrytoWalle", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(admin_model_1.Admin))
    ], CryptowalletController.prototype, "createAdmin", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(trader_model_1.Trader))
    ], CryptowalletController.prototype, "createTrader", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(moderator_model_1.Moderator))
    ], CryptowalletController.prototype, "createModerator", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(wallet_model_1.Wallet))
    ], CryptowalletController.prototype, "createWallet", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "getAdminById", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "getModeratorById", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "getTraderById", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "getWalletHistoryById", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], CryptowalletController.prototype, "getAllModerators", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], CryptowalletController.prototype, "getAllTraders", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], CryptowalletController.prototype, "getAllWallets", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], CryptowalletController.prototype, "getAllModels", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number())),
        tslib_1.__param(3, convector_core_1.Param(yup.Date())),
        tslib_1.__param(4, convector_core_1.Param(yup.string()))
    ], CryptowalletController.prototype, "makeTransaction", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_1.Param(yup.number())),
        tslib_1.__param(3, convector_core_1.Param(yup.string())),
        tslib_1.__param(4, convector_core_1.Param(yup.Date()))
    ], CryptowalletController.prototype, "createMoney", null);
    CryptowalletController = tslib_1.__decorate([
        convector_core_1.Controller('cryptowallet')
    ], CryptowalletController);
    return CryptowalletController;
}(convector_core_1.ConvectorController));
exports.CryptowalletController = CryptowalletController;
//# sourceMappingURL=cryptowallet.controller.js.map