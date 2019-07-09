import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Cryptowallet } from './models/cryptowallet.model';
import { Admin } from './models/admin.model';
import { Moderator } from './models/moderator.model';
import { Trader } from './models/trader.model';
import { Wallet } from './models/wallet.model';
export declare class CryptowalletController extends ConvectorController<ChaincodeTx> {
    create(cryptowallet: Cryptowallet): Promise<void>;
    getCryptoWalletByID(crytowalletID: string): Promise<Cryptowallet>;
    getAllCryptoWallet(): Promise<Cryptowallet[]>;
    createAdmin(admin: Admin): Promise<void>;
    createTrader(trader: Trader): Promise<void>;
    createModerator(moderator: Moderator): Promise<void>;
    createWallet(wallet: Wallet): Promise<void>;
    getAdminById(adminID: string): Promise<Admin>;
    getModeratorById(modID: string): Promise<Moderator>;
    getTraderById(traderID: string): Promise<Trader>;
    getWalletHistoryById(walletID: string): Promise<Wallet>;
    getAllModerators(): Promise<Moderator[]>;
    getAllTraders(): Promise<Trader[]>;
    getAllWallets(): Promise<Wallet[]>;
    getAllModels(): Promise<void>;
    makeTransaction(senderID: string, receiverID: string, amount: number, creationDate: Date, content: string): Promise<void>;
    createMoney(adminID: string, reciverID: string, amountToCreate: number, content: string, creationDate: Date): Promise<void>;
}
