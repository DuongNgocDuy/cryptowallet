import * as express from 'express';
import { 
    CryptowalletController_create,
    CryptowalletController_getCryptoWalletByID,
    CryptowalletController_getAllCryptoWallet,
    CryptowalletController_createAdmin,
    CryptowalletController_createTrader,
    CryptowalletController_createModerator,
    CryptowalletController_createWallet,
    CryptowalletController_getAdminById,
    CryptowalletController_getModeratorById,
    CryptowalletController_getTraderById,
    CryptowalletController_getWalletHistoryById,
    CryptowalletController_getAllModerators,
    CryptowalletController_getAllTraders,
    CryptowalletController_getAllWallets,
    CryptowalletController_getAllModels,
    CryptowalletController_makeTransaction,
    CryptowalletController_createMoney } from './controllers'
export default express.Router()
.post('/cryptowallet/create', CryptowalletController_create)
.get('/cryptowallet/getCryptoWalletByID/:crytowalletID', CryptowalletController_getCryptoWalletByID)
.get('/cryptowallet/getAllCryptoWallet', CryptowalletController_getAllCryptoWallet)
.post('/cryptowallet/createAdmin', CryptowalletController_createAdmin)
.post('/cryptowallet/createTrader', CryptowalletController_createTrader)
.post('/cryptowallet/createModerator', CryptowalletController_createModerator)
.post('/cryptowallet/createWallet', CryptowalletController_createWallet)
.get('/cryptowallet/getAdminById/:adminID', CryptowalletController_getAdminById)
.get('/cryptowallet/getModeratorById/:modID', CryptowalletController_getModeratorById)
.get('/cryptowallet/getTraderById/:traderID', CryptowalletController_getTraderById)
.get('/cryptowallet/getWalletHistoryById/:walletID', CryptowalletController_getWalletHistoryById)
.get('/cryptowallet/getAllModerators', CryptowalletController_getAllModerators)
.get('/cryptowallet/getAllTraders', CryptowalletController_getAllTraders)
.get('/cryptowallet/getAllWallets', CryptowalletController_getAllWallets)
.get('/cryptowallet/getAllModels', CryptowalletController_getAllModels)
.post('/cryptowallet/makeTransaction', CryptowalletController_makeTransaction)
.post('/cryptowallet/createMoney', CryptowalletController_createMoney)
