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
import { User } from './models/user.model';
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
      console.log('ERROR HAPPENED: ', error);
    }
  }

  @Invokable()
  public async getAllCryptoWallet() {
    try {
      const crytowallet = await Cryptowallet.getAll('io.worldsibu.walletchaincode');
      return crytowallet;
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
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
      console.log('ERROR HAPPENED: ', error);
    }
  }

  //create User
  @Invokable()
  public async createUser(
    @Param(User)
    user: User
  ) {
    try {
      await user.save();
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
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
      console.log('ERROR HAPPENED: ', error);
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
      console.log('ERROR HAPPENED: ', error);
    }
  }


  //get User by id
  @Invokable()
  public async getUserById(
    @Param(yup.string())
    userID: string
  ) {
    try {
      const user = await User.getOne(userID);
      return user;
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
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
      console.log('ERROR HAPPENED: ', error);
    }
  }

  //========================*END*==========================//

  //========================*GET ALL*==========================//

  //get all Users
  @Invokable()
  public async getAllUsers() {
    try {
      const users = await User.getAll('io.worldsibu.user');
      return users;
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
    }
  }

  //get all Wallets
  @Invokable()
  public async getAllWallets() {
    try {
      const wallets = await Wallet.getAll('io.worldsibu.wallet');
      return wallets;
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
    }
  }

  @Invokable()
  public async getAllModels() {
    const storedAdmins = await Admin.getAll('io.worldsibu.admin');
    console.log(storedAdmins);

    const storedUsers = await User.getAll('io.worldsibu.user');
    console.log(storedUsers);

    const storedWallets = await Wallet.getAll('io.worldsibu.wallet');
    console.log(storedWallets);
  }

  //========================*END*==========================//

  public async getWalletIDFromEmail(
    @Param(yup.string())
    userID: string
  ){
    try{
      const user = await User.getOne(userID);
      return user.walletID;
    }catch(error){
      console.log('ERROR HAPPENED: ', error);
    }
  }


  //Create a transaction between sender and receiver
  @Invokable()
  public async makeTransaction(
    @Param(yup.string())
    senderID: string,
    @Param(yup.string())
    receiverID: string,
    @Param(yup.number())
    amount: number,
    @Param(yup.string())
    transactionID: string,
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
        transactionID,
        sender: senderWallet.ownerName,
        receiver: receiverWallet.ownerName,
        amount: amount,
        creationDate: creationDate,
        content: content
      });
      receiverWallet.balance += amount;
      receiverWallet.transactionDetails.push({
        transactionID,
        sender: senderWallet.ownerName,
        receiver: receiverWallet.ownerName,
        amount: amount,
        creationDate: creationDate,
        content: content
      });
      await senderWallet.save();
      await receiverWallet.save();
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
    }
  }

  //admin create money for a user 
  @Invokable()
  public async createMoney(
    @Param(yup.string())
    adminID: string,
    @Param(yup.string())
    reciverID: string,
    @Param(yup.number())
    amountToCreate: number,
    @Param(yup.string())
    transactionID: string,
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
          transactionID,
          sender: admin.name,
          receiver: receiverWallet.ownerName,
          amount: amountToCreate,
          creationDate: creationDate,
          content: content
        });
      }
      await receiverWallet.save();
    } catch (error) {
      console.log('ERROR HAPPENED: ', error);
    }
  }
}