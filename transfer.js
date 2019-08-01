require('dotenv').config();

const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

// const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

const account1 = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1';
const account2 = '0x37B486ff67DF35687B200132f4BA2c9b0f2d64eF';

// const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
    const balance = await web3.eth.getBalance(account1);
    const balanceEth = web3.utils.fromWei(balance, 'ether');
    const nonce = await web3.eth.getTransactionCount(account1);
    console.log(`account ${account1} has ${balanceEth} Ether balance. Transaction count - ${nonce}`);
    const sendAmount = web3.utils.toWei('1', 'ether');
    const txDetails = {
        "from": account1,
        "to": account2,
        "value": web3.utils.toHex(sendAmount),
        // "gas": 21000,
        "gasPrice": 1 * 1000000000, // converts the gwei price to wei
        // "nonce": nonce,
        // "chainId": 3,// EIP 155 chainId - mainnet: 1, ropsten:3, rinkeby: 4
    };
    const gasEstimation = await web3.eth.estimateGas(txDetails);
    txDetails.gas = gasEstimation;
    console.log('gasEstimation', gasEstimation);



    const tx = await web3.eth.sendTransaction(txDetails);
    console.log(tx);


    const signedRawTx = await web3.eth.accounts.signTransaction({
        to: account2,
        value: web3.utils.toHex(sendAmount),
        gas: gasEstimation
    }, `0x${process.env.ACCOUNT_PRIVATE_KEY}`);
    const txRaw = await web3.eth.sendSignedTransaction(signedRawTx.rawTransaction);
    console.log(txRaw)
})();
