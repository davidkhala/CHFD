const {FileSystemWallet, X509WalletMixin} = require('fabric-network');
const path = require('path');
const fs = require('fs');
const {instantiateWallet,importIdentities} =require('./wallet')
const task = async (action) => {

	let wallet, identity;
	switch (action) {
		case 'instantiateWallet':
			const {walletPath} = process.env;
			return instantiateWallet(walletPath);
		case 'importIdentities':
			wallet = await task('instantiateWallet');
			const {certPath, keyPath, mspId, label: identityLabel} = process.env;
			await importIdentities(wallet, certPath,keyPath,mspId,identityLabel);
			return wallet;
		case 'manageIdentity':
			//Select and manage identity from a wallet
			const {label} = process.env;
			wallet = await task('importIdentities');
			let IdentityInfoList = await wallet.list();
			console.log(`wallet list()`);
			for (const IdentityInfo of IdentityInfoList) {
				console.log(IdentityInfo);
			}
			identity = await wallet.export(label);
			console.log(`select ${label}`, identity);
			await wallet.delete(label);

			console.log(`wallet list():after delete`);
			IdentityInfoList = await wallet.list();
			for (const IdentityInfo of IdentityInfoList) {
				console.log(IdentityInfo);
			}


			break;
		default:
			console.log({action});

	}
};
task(process.env.action);
