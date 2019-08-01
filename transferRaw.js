require('dotenv').config();

const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

// const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

const account1 = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1';
const account2 = '0xffcf8fdee72ac11b5c542428b35eef5769c409f0';

// const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
    const balance = await web3.eth.getBalance(account1);
    const balanceEth = web3.utils.fromWei(balance, 'ether');
    const nonce = await web3.eth.getTransactionCount(account1);
    console.log(`account ${account1} has ${balanceEth} Ether balance. Transaction count - ${nonce}`);
    const sendAmount = web3.utils.toWei('1', 'ether');
    const txDetails = {
        "to": account2,
        "value": web3.utils.toHex(sendAmount),
        // "gas": 21000,
        "gasPrice": 1 * 1000000000, // converts the gwei price to wei
        "nonce": nonce,
        // "chainId": 3,// EIP 155 chainId - mainnet: 1, ropsten:3, rinkeby: 4
    };
    const gasEstimation = await web3.eth.estimateGas(txDetails);
    txDetails.gas=gasEstimation;
    console.log('gasEstimation',gasEstimation)
    // const transaction = new EthereumTx.Transaction(txDetails, {chain: 'ropsten', hardfork: 'petersburg'});
    const transaction = new EthereumTx.Transaction(txDetails); //no extra parameter for local node

    transaction.sign(Buffer.from(process.env.ACCOUNT_PRIVATE_KEY, 'hex'));
    const serializedTransaction = transaction.serialize();
    const tx = await web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'));
    console.log(tx)
})();
