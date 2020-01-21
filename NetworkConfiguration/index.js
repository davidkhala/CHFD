const {Gateway} = require('fabric-network');
const path = require('path');
const {connectionProfile} = process.env;
const connectionProfileFile = path.resolve(connectionProfile);
//TODO WIP
const wallet = {};
const task = async (action) => {
	let gateway;
	switch (action) {
		case 'connectGateway':
			gateway = new Gateway();
			await gateway.connect(connectionProfileFile, {wallet});
			return gateway;
		case 'getNetworks':
			gateway = await task('connectGateway');
			const {channelName} = process.env;
			const network = await gateway.getNetwork(channelName);
			//TODO  Error: No identity has been assigned to this client
			console.log(network);
			break;
	}
};
task(process.env.action);