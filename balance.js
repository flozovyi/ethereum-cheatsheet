require('dotenv').config();
const Web3 = require('web3');
const testnetEndpoint = 'https://ropsten.infura.io/v3/207da01c4c0a4bfba8b43dee596b25e2';

const account1 = '0x05eD4C787C6eC5c436D5EF080d5713A662391E37';

const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
// const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
    const balance = await web3.eth.getBalance(account1);
})();
