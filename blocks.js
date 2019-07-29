require('dotenv').config();
const Web3 = require('web3');
const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
// const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
const b = await web3.eth.getBlockNumber()
    b
})();
