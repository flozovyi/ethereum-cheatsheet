require('dotenv').config();
const Web3 = require('web3');
// const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

// const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
const b = await web3.eth.getBlockNumber()
const block = await web3.eth.getBlock(5)
    const tx1 = await web3.eth.getTransaction('0x8272fdf0e769192e221bcf3ba7b89f92b5cc191d57550c0663fcea10a39e9e41')
    const tx1r = await web3.eth.getTransactionReceipt('0x8272fdf0e769192e221bcf3ba7b89f92b5cc191d57550c0663fcea10a39e9e41')
    console.log(tx1r)
})();
