import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Cryptowallet } from './models/cryptowallet.model';
import { Admin } from './models/admin.model';
import { User } from './models/user.model';
import { Wallet } from './models/wallet.model';
export declare class CryptowalletController extends ConvectorController<ChaincodeTx> {
    create(cryptowallet: Cryptowallet): Promise<void>;
    getCryptoWalletByID(crytowalletID: string): Promise<Cryptowallet>;
    getAllCryptoWallet(): Promise<Cryptowallet[]>;
    createAdmin(admin: Admin): Promise<void>;
    createUser(user: User): Promise<void>;
    createWallet(wallet: Wallet): Promise<void>;
    getAdminById(adminID: string): Promise<Admin>;
    getUserById(userID: string): Promise<User>;
    getWalletHistoryById(walletID: string): Promise<Wallet>;
    getAllUsers(): Promise<User[]>;
    getAllWallets(): Promise<Wallet[]>;
    getAllModels(): Promise<void>;
    getWalletIDFromEmail(userID: string): Promise<string>;
    makeTransaction(senderID: string, receiverID: string, amount: number, transactionID: string, creationDate: Date, content: string): Promise<void>;
    createMoney(adminID: string, reciverID: string, amountToCreate: number, transactionID: string, content: string, creationDate: Date): Promise<void>;
}
