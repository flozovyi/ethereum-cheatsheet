require('dotenv').config();

const Web3 = require('web3');
const localEndpoint = `http://localhost:8545`;

const account1 = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1';

const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));

const ABI = require('./smart-contracts/ballot/abi.json');

const contractAddress = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601';
(async () => {
    (async () => {
        const Contract = new web3.eth.Contract(ABI, contractAddress);
        const chairpersonMethod = await Contract.methods.chairperson();
        const chairperson = await chairpersonMethod.call();

        console.log(`chairperson is ${chairperson}`)
    })();


})();
