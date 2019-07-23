import * as express from 'express';
import { 
    CryptowalletController_create_post,
    CryptowalletController_getCryptoWalletByID_get,
    CryptowalletController_getAllCryptoWallet_get,
    CryptowalletController_createAdmin_post,
    CryptowalletController_createUser_post,
    CryptowalletController_createWallet_post,
    CryptowalletController_getAdminById_get,
    CryptowalletController_getUserById_get,
    CryptowalletController_getWalletHistoryById_get,
    CryptowalletController_getAllUsers_get,
    CryptowalletController_getAllWallets_get,
    CryptowalletController_getAllModels_get,
    CryptowalletController_getWalletIDFromEmail_get,
    CryptowalletController_makeTransaction_post,
    CryptowalletController_createMoney_post } from './controllers'
export default express.Router()
.post('/cryptowallet/create', CryptowalletController_create_post)
.get('/cryptowallet/getCryptoWalletByID/:crytowalletID', CryptowalletController_getCryptoWalletByID_get)
.get('/cryptowallet/getAllCryptoWallet', CryptowalletController_getAllCryptoWallet_get)
.post('/cryptowallet/createAdmin', CryptowalletController_createAdmin_post)
.post('/cryptowallet/createUser', CryptowalletController_createUser_post)
.post('/cryptowallet/createWallet', CryptowalletController_createWallet_post)
.get('/cryptowallet/getAdminById/:adminID', CryptowalletController_getAdminById_get)
.get('/cryptowallet/getUserById/:userID', CryptowalletController_getUserById_get)
.get('/cryptowallet/getWalletHistoryById/:walletID', CryptowalletController_getWalletHistoryById_get)
.get('/cryptowallet/getAllUsers', CryptowalletController_getAllUsers_get)
.get('/cryptowallet/getAllWallets', CryptowalletController_getAllWallets_get)
.get('/cryptowallet/getAllModels', CryptowalletController_getAllModels_get)
.get('/cryptowallet/getWalletIDFromEmail/:userID', CryptowalletController_getWalletIDFromEmail_get)
.post('/cryptowallet/makeTransaction', CryptowalletController_makeTransaction_post)
.post('/cryptowallet/createMoney', CryptowalletController_createMoney_post)
