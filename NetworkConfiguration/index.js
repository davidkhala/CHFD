const {Gateway} = require('fabric-network');
const path = require('path');

const task = async (action) => {
	let gateway, wallet= {};// wallet not required

	switch (action) {
		case 'connectGateway':
			const {connectionProfile} = process.env;
			const connectionProfileFile = path.resolve(connectionProfile);
			gateway = new Gateway();
			await gateway.connect(connectionProfileFile, {wallet});
			return gateway;
		case 'getNetworks':
			gateway = await task('connectGateway');
			const {channelName} = process.env;
			const network = await gateway.getNetwork(channelName);
			//TODO peer down in first-network
			console.log(network);
			break;
	}
};
task(process.env.action);