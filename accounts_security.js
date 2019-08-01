require('dotenv').config();

const Web3 = require('web3');
const localEndpoint = `http://localhost:8545`;

const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));

(async () => {

// //create account
    const newAccount = await web3.eth.personal.newAccount(process.env.ACCOUNT_PASSWORD);
// //0x55Ee6c1946F00130122E364681F2f42F1651df50
    console.log(newAccount)
//
//     await web3.eth.personal.unlockAccount("0x546EB84F365bDD1e14313eBCa34d7Bb240245034", process.env.ACCOUNT_PASSWORD, 10)
//         .then(console.log('Account unlocked!'));
    const tx = await web3.eth.sendTransaction({
        "from": '0x546EB84F365bDD1e14313eBCa34d7Bb240245034',
        "to": '0xbeea04b7042187c76f0e8eabf212a97f868a2c08',
        "value": web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        "gas": 21000,
        "gasPrice": 1 * 1000000000
    });

    console.log(tx);
    // await web3.eth.personal.lockAccount("0x546EB84F365bDD1e14313eBCa34d7Bb240245034", process.env.ACCOUNT_PASSWORD)
    //     .then(console.log('Account locked!'));
})();
