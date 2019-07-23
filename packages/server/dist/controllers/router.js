"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/cryptowallet/create', controllers_1.CryptowalletController_create_post)
    .get('/cryptowallet/getCryptoWalletByID/:crytowalletID', controllers_1.CryptowalletController_getCryptoWalletByID_get)
    .get('/cryptowallet/getAllCryptoWallet', controllers_1.CryptowalletController_getAllCryptoWallet_get)
    .post('/cryptowallet/createAdmin', controllers_1.CryptowalletController_createAdmin_post)
    .post('/cryptowallet/createUser', controllers_1.CryptowalletController_createUser_post)
    .post('/cryptowallet/createWallet', controllers_1.CryptowalletController_createWallet_post)
    .get('/cryptowallet/getAdminById/:adminID', controllers_1.CryptowalletController_getAdminById_get)
    .get('/cryptowallet/getUserById/:userID', controllers_1.CryptowalletController_getUserById_get)
    .get('/cryptowallet/getWalletHistoryById/:walletID', controllers_1.CryptowalletController_getWalletHistoryById_get)
    .get('/cryptowallet/getAllUsers', controllers_1.CryptowalletController_getAllUsers_get)
    .get('/cryptowallet/getAllWallets', controllers_1.CryptowalletController_getAllWallets_get)
    .get('/cryptowallet/getAllModels', controllers_1.CryptowalletController_getAllModels_get)
    .get('/cryptowallet/getWalletIDFromEmail/:userID', controllers_1.CryptowalletController_getWalletIDFromEmail_get)
    .post('/cryptowallet/makeTransaction', controllers_1.CryptowalletController_makeTransaction_post)
    .post('/cryptowallet/createMoney', controllers_1.CryptowalletController_createMoney_post);
//# sourceMappingURL=router.js.map