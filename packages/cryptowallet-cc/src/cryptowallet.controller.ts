import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Cryptowallet } from './models/cryptowallet.model';
import { Admin } from './models/admin.model';
import { Moderator } from './models/moderator.model';
import { Trader } from './models/trader.model';
import { Wallet } from './models/wallet.model';

@Controller('cryptowallet')
export class CryptowalletController extends ConvectorController<ChaincodeTx> {

  @Invokable()
  public async create(
    @Param(Cryptowallet)
    cryptowallet: Cryptowallet
  ) {
    await cryptowallet.save();
  }

  @Invokable()
  public async getCryptoWalletByID(
    @Param(yup.string())
    crytowalletID: string
  ) {
    try {
      const crytowallet = await Cryptowallet.getOne(crytowalletID);
      return crytowallet;
    } catch (error) {
      console.log('MEGAFYK ERROR:', error);
    }
  }

  @Invokable()
  public async getAllCryptoWallet() {
    try {
      const crytowallet = await Cryptowallet.getAll('io.worldsibu.walletchaincode');
      return crytowallet;
    } catch (error) {
      console.log('MEGAFYK ERROR:', error);
    }
  }

  //========================*CREATE*===========================//

  //create Admin
  @Invokable()
  public async createAdmin(
    @Param(Admin)
    admin: Admin
  ) {
    try {
      await admin.save();
    } catch (error) {
      console.log('MEGAFYK LOGGER:', error);
    }
  }

  //create Trader
  @Invokable()
  public async createTrader(
    @Param(Trader)
    trader: Trader
  ) {
    try {
      await trader.save();
    } catch (error) {
      console.log('MEGAFYK LOGGER:', error);
    }
  }

  //create Moderator
  @Invokable()
  public async createModerator(
    @Param(Moderator)
    moderator: Moderator
  ) {
    try {
      await moderator.save();
    } catch (error) {
      console.log('MEGAFYK LOGGER:', error);
    }
  }

  //Create Wallet
  @Invokable()
  public async createWallet(
    @Param(Wallet)
    wallet: Wallet
  ) {
    try {
      await wallet.save();
    } catch (error) {
      console.log('MEGAFYK LOGGER:', error);
    }
  }

  //========================*END CREATE*==========================//

  //==================*GET BY ID*========================//

  //get Admin by id
  @Invokable()
  public async getAdminById(
    @Param(yup.string())
    adminID: string
  ) {
    try {
      const user = await Admin.getOne(adminID);
      return user;
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }

  //get Moderator by id
  @Invokable()
  public async getModeratorById(
    @Param(yup.string())
    modID: string
  ) {
    try {
      const mod = await Moderator.getOne(modID);
      return mod;
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }

  //get Trader by id
  @Invokable()
  public async getTraderById(
    @Param(yup.string())
    traderID: string
  ) {
    try {
      const trader = await Trader.getOne(traderID);
      return trader;
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }

  // get by id by for Wallet History
  @Invokable()
  public async getWalletHistoryById(
    @Param(yup.string())
    walletID: string
  ) {
    try {
      const wallet = await Wallet.getOne(walletID);
      return wallet;
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }

  //========================*END*==========================//

  //========================*GET ALL*==========================//
  //get all moderators
  @Invokable()
  public async getAllModerators() {
    try {
      const moderators = await Moderator.getAll('io.worldsibu.moderator');
      return moderators;
    } catch (error) {
      console.log("MEGAFYK ERROR:", error);
    }
  }

  //get all traders
  @Invokable()
  public async getAllTraders() {
    try {
      const traders = await Trader.getAll('io.worldsibu.trader');
      return traders;
    } catch (error) {
      console.log("MEGAFYK ERROR:", error);
    }
  }

  //get all wallets
  @Invokable()
  public async getAllWallets() {
    try {
      const wallets = await Wallet.getAll('io.worldsibu.wallet');
      return wallets;
    } catch (error) {
      console.log("MEGAFYK ERROR:", error);
    }
  }

  @Invokable()
  public async getAllModels() {
    const storedAdmins = await Admin.getAll('io.worldsibu.admin');
    console.log(storedAdmins);

    const storedModerators = await Moderator.getAll('io.worldsibu.moderator');
    console.log(storedModerators);

    const storedTraders = await Trader.getAll('io.worldsibu.trader');
    console.log(storedTraders);

    const storedWallets = await Wallet.getAll('io.worldsibu.wallet');
    console.log(storedWallets);
  }

  //========================*END*==========================//


  //Create a transaction between sender and receiver
  @Invokable()
  public async makeTransaction(
    @Param(yup.string())
    senderID: string,
    @Param(yup.string())
    receiverID: string,
    @Param(yup.number())
    amount: number,
    @Param(yup.date())
    creationDate: Date,
    @Param(yup.string())
    content: string,
  ) {
    try {
      const senderWallet = await Wallet.getOne(senderID);
      const receiverWallet = await Wallet.getOne(receiverID);
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
      await senderWallet.save();
      await receiverWallet.save();
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }

  //admin create money for a trader or moderator
  @Invokable()
  public async createMoney(
    @Param(yup.string())
    adminID: string,
    @Param(yup.string())
    reciverID: string,
    @Param(yup.number())
    amountToCreate: number,
    @Param(yup.string())
    content: string,
    @Param(yup.date())
    creationDate: Date,
  ) {
    try {
      const admin = await Admin.getOne(adminID);
      const receiverWallet = await Wallet.getOne(reciverID);
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
      await receiverWallet.save();
    } catch (error) {
      console.log('MEGAFYK ERROR', error);
    }
  }
}