const {FileSystemWallet, X509WalletMixin} = require('fabric-network');
const path = require('path');
const fs = require('fs');

const task = async (action) => {

	let wallet, identity;
	switch (action) {
		case 'instantiateWallet':
			const {walletPath} = process.env;
			const pathResolved = path.resolve(walletPath);
			console.log('walletPath', pathResolved);
			return new FileSystemWallet(pathResolved);
		case 'importIdentities':
			wallet = await task('instantiateWallet');
			const {certPath, keyPath, mspId, label: identityLabel} = process.env;
			const cert = fs.readFileSync(path.resolve(certPath)).toString();
			const key = fs.readFileSync(path.resolve(keyPath)).toString();
			identity = X509WalletMixin.createIdentity(mspId, cert, key);
			await wallet.import(identityLabel, identity);
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
