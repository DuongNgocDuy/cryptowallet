import { Request, Response } from 'express';
import { CryptowalletControllerBackEnd } from '../convector';


export async function CryptowalletController_create_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .create(params.cryptowallet));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getCryptoWalletByID_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getCryptoWalletByID(params.crytowalletID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getCryptoWalletByID', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllCryptoWallet_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllCryptoWallet());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllCryptoWallet', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createAdmin_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createAdmin(params.admin));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createAdmin', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createUser_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createUser(params.user));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createUser', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createWallet_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createWallet(params.wallet));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createWallet', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAdminById_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAdminById(params.adminID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAdminById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getUserById_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getUserById(params.userID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getUserById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getWalletHistoryById_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getWalletHistoryById(params.walletID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getWalletHistoryById', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllUsers_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllUsers());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllUsers', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllWallets_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllWallets());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllWallets', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getAllModels_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getAllModels());
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getAllModels', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_getWalletIDFromEmail_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CryptowalletControllerBackEnd
            .getWalletIDFromEmail(params.userID));
        
    } catch(ex) {
        console.log('Error get CryptowalletController_getWalletIDFromEmail', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_makeTransaction_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .makeTransaction(params.senderID,params.receiverID,params.amount,params.transactionID,params.creationDate,params.content));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_makeTransaction', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CryptowalletController_createMoney_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CryptowalletControllerBackEnd
                .createMoney(params.adminID,params.reciverID,params.amountToCreate,params.transactionID,params.content,params.creationDate));
            
    } catch(ex) {
        console.log('Error post CryptowalletController_createMoney', ex.stack);
        res.status(500).send(ex);
    }
}