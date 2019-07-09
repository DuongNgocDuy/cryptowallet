#!/bin/bash
#init
cd ../../../
#lerna clean
#rm -rf node_modules
#rm package-lock.json
#npm i
#npm run env:restart
#npm run cc:start -- walletchaincode 1
#sleep 10

#Create 1 admin
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createAdmin '{"id":"admin_1","name":"I_AM_ADMIN_1","email":"admin@fpt.edu.vn","role":"Admin"}'
#Create 3 moderators
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createModerator '{"id":"moderator_1","name":"I_AM_MODERATOR_1","email":"moderator1@fpt.edu.vn","walletID":"wallet_1","role":"Moderator"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createModerator '{"id":"moderator_2","name":"I_AM_MODERATOR_2","email":"moderator2@fpt.edu.vn","walletID":"wallet_2","role":"Moderator"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createModerator '{"id":"moderator_3","name":"I_AM_MODERATOR_3","email":"moderator3@fpt.edu.vn","walletID":"wallet_3","role":"Moderator"}'
#Create 5 traders
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createTrader '{"id":"trader_1","name":"I_AM_TRADER_1","email":"trader1@fpt.edu.vn","walletID":"wallet_4","role":"Trader"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createTrader '{"id":"trader_2","name":"I_AM_TRADER_2","email":"trader2@fpt.edu.vn","walletID":"wallet_5","role":"Trader"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createTrader '{"id":"trader_3","name":"I_AM_TRADER_3","email":"trader3@fpt.edu.vn","walletID":"wallet_6","role":"Trader"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createTrader '{"id":"trader_4","name":"I_AM_TRADER_4","email":"trader4@fpt.edu.vn","walletID":"wallet_7","role":"Trader"}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createTrader '{"id":"trader_5","name":"I_AM_TRADER_5","email":"trader5@fpt.edu.vn","walletID":"wallet_8","role":"Trader"}'
#Create 8 wallets
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_1","ownerID":"moderator_3","ownerName":"I_AM_MODERATOR_3","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_2","ownerID":"trader_4","ownerName":"I_AM_TRADER_4","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_3","ownerID":"trader_5","ownerName":"I_AM_TRADER_5","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_4","ownerID":"moderator_2","ownerName":"I_AM_MODERATOR_2","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_5","ownerID":"trader_2","ownerName":"I_AM_TRADER_2","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_6","ownerID":"trader_1","ownerName":"I_AM_TRADER_1","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_7","ownerID":"moderator_1","ownerName":"I_AM_MODERATOR_1","balance":0}'
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createWallet '{"id":"wallet_8","ownerID":"trader_3","ownerName":"I_AM_TRADER_3","balance":0}'

#Test function
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createMoney admin_1 moderator_1 200 06/25/2019 Admin_1_issue_200_tokens_for_moderator_1
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createMoney admin_1 moderator_1 500 06/25/2019 Admin_1_issue_500_tokens_for_moderator_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode createMoney admin_1 moderator_1 10 06/25/2019 Admin_1_issue_10_tokens_for_moderator_3
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction moderator_1 trader_1 100 06/25/2019 Transfer_100_tokens_from_moderator_1_to_trader_1
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction moderator_2 trader_1 100 06/25/2019 Transfer_100_tokens_from_moderator_1_to_trader_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction moderator_1 moderator_2 50 06/25/2019 Transfer_100_tokens_from_moderator_1_to_trader_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction moderator_3 moderator_1 50 06/25/2019 Transfer_50_tokens_from_moderator_1_to_trader_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_1 trader_2 150 06/25/2019 Transfer_150_tokens_from_trader_1_to_trader_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_1 trader_3 25 06/25/2019 Transfer_25_tokens_from_trader_1_to_trader_3
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_1 trader_4 2 06/25/2019 Transfer_2_tokens_from_trader_1_to_trader_4
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_2 trader_3 30 06/25/2019 Transfer_30_tokens_from_trader_2_to_trader_3
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_3 trader_4 5 06/25/2019 Transfer_5_tokens_from_trader_3_to_trader_4
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode makeTransaction trader_5 trader_4 20 06/25/2019 Transfer_20_tokens_from_trader_5_to_trader_4
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_1
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_2
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_3
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_4
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_5
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_6
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_7
npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getWalletHistoryById wallet_8

npm run cc:invoke -- walletchaincode org1 user1 walletchaincode getAllModels

#docker logs $(docker ps -qa | head -n 1) -f
