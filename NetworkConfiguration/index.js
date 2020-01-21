const {Gateway} = require('fabric-network');
const yaml = require('js-yaml');// TODO do we need this?

const connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/paperNet.yaml', 'utf8'));



//TODO WIP
const task = async (action) => {
	switch (action) {
		case 'connectGateway':
			const gateway = new Gateway();
			await gateway.connect(connectionProfile, connectionOptions);
			break;
		case '':
			break;
	}
};
task(process.env.action);