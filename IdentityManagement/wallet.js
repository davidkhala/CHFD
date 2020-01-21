const {FileSystemWallet, X509WalletMixin} = require('fabric-network');
const path = require('path');
const fs = require('fs');
exports.instantiateWallet = (walletPath) => {
	const pathResolved = path.resolve(walletPath);
	console.log('walletPath', pathResolved);
	return new FileSystemWallet(pathResolved);
};
exports.importIdentities = async (wallet, certPath, keyPath, mspId, label) => {
	const cert = fs.readFileSync(path.resolve(certPath)).toString();
	const key = fs.readFileSync(path.resolve(keyPath)).toString();
	const identity = X509WalletMixin.createIdentity(mspId, cert, key);
	await wallet.import(label, identity);
};