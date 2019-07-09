import { Request, Response } from 'express';
import { CryptowalletControllerBackEnd } from '../convector';


export async function CryptowalletController_create(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .create(params.cryptowallet));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getCryptoWalletByID(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getCryptoWalletByID(params.crytowalletID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getCryptoWalletByID', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllCryptoWallet(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllCryptoWallet());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllCryptoWallet', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createAdmin(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createAdmin(params.admin));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createAdmin', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createTrader(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createTrader(params.trader));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createTrader', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createModerator(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createModerator(params.moderator));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createModerator', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createWallet(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createWallet(params.wallet));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createWallet', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAdminById(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAdminById(params.adminID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAdminById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getModeratorById(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getModeratorById(params.modID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getModeratorById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getTraderById(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getTraderById(params.traderID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getTraderById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getWalletHistoryById(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getWalletHistoryById(params.walletID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getWalletHistoryById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllModerators(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllModerators());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllModerators', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllTraders(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllTraders());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllTraders', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllWallets(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllWallets());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllWallets', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllModels(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllModels());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllModels', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_makeTransaction(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .makeTransaction(params.senderID,params.receiverID,params.amount,params.creationDate,params.content));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_makeTransaction', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createMoney(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createMoney(params.adminID,params.reciverID,params.amountToCreate,params.content,params.creationDate));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createMoney', ex.stack);
        res.status(500).send(ex);
    }
}