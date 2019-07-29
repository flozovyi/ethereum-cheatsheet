require('dotenv').config();
const Web3 = require('web3');
const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
// const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));

const ABI = require('./smart-contracts/ballot/abi.json');
const ballotAddress = '0xb27c80dfe5afa747c8187253e50deb86f037f3ed';
(async () => {
    const ballotContract = new web3.eth.Contract(ABI, ballotAddress);
    const chairpersonMethod = await ballotContract.methods.chairperson();
    const chairperson = await chairpersonMethod.call();
    console.log(`chairperson is ${chairperson}`)
})();
