"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/cryptowallet/create', controllers_1.CryptowalletController_create)
    .get('/cryptowallet/getCryptoWalletByID/:crytowalletID', controllers_1.CryptowalletController_getCryptoWalletByID)
    .get('/cryptowallet/getAllCryptoWallet', controllers_1.CryptowalletController_getAllCryptoWallet)
    .post('/cryptowallet/createAdmin', controllers_1.CryptowalletController_createAdmin)
    .post('/cryptowallet/createTrader', controllers_1.CryptowalletController_createTrader)
    .post('/cryptowallet/createModerator', controllers_1.CryptowalletController_createModerator)
    .post('/cryptowallet/createWallet', controllers_1.CryptowalletController_createWallet)
    .get('/cryptowallet/getAdminById/:adminID', controllers_1.CryptowalletController_getAdminById)
    .get('/cryptowallet/getModeratorById/:modID', controllers_1.CryptowalletController_getModeratorById)
    .get('/cryptowallet/getTraderById/:traderID', controllers_1.CryptowalletController_getTraderById)
    .get('/cryptowallet/getWalletHistoryById/:walletID', controllers_1.CryptowalletController_getWalletHistoryById)
    .get('/cryptowallet/getAllModerators', controllers_1.CryptowalletController_getAllModerators)
    .get('/cryptowallet/getAllTraders', controllers_1.CryptowalletController_getAllTraders)
    .get('/cryptowallet/getAllWallets', controllers_1.CryptowalletController_getAllWallets)
    .get('/cryptowallet/getAllModels', controllers_1.CryptowalletController_getAllModels)
    .post('/cryptowallet/makeTransaction', controllers_1.CryptowalletController_makeTransaction)
    .post('/cryptowallet/createMoney', controllers_1.CryptowalletController_createMoney);
//# sourceMappingURL=router.js.map