// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Cryptowallet, CryptowalletController } from '../src';

describe('Cryptowallet', () => {
  let adapter: MockControllerAdapter;
  let cryptowalletCtrl: ConvectorControllerClient<CryptowalletController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    cryptowalletCtrl = ClientFactory(CryptowalletController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'CryptowalletController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Cryptowallet({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await cryptowalletCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Cryptowallet>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});