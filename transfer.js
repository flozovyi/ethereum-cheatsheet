require('dotenv').config();
const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

const testnetEndpoint = process.env.INFURA_URI;
const localEndpoint = `http://localhost:8545`;

const account1 = '0x443418D2B16f7FB6379c19adc062c3ff1a29e053';
const account2 = '0x2c598F01Fd24407C8E8169030eda60ED3e6554EC';

const web3 = new Web3(new Web3.providers.HttpProvider(testnetEndpoint));
// const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));


(async () => {
    const balance = await web3.eth.getBalance(account1);
    const balanceEth = web3.utils.fromWei(balance, 'ether');
    const nonce = await web3.eth.getTransactionCount(account1);
    console.log(`account ${account1} has ${balanceEth} Ether balance. Transaction count - ${nonce}`);
    const sendAmount = web3.utils.toWei('0.1', 'ether');
    const txDetails = {
        "to": account2,
        "value": web3.utils.toHex(sendAmount),
        "gas": 21000,
        "gasPrice": 10 * 1000000000, // converts the gwei price to wei
        "nonce": nonce,
        "chainId": 3,// EIP 155 chainId - mainnet: 1, ropsten:3, rinkeby: 4
        "networkId": 3
    };

    const transaction = new EthereumTx.Transaction(txDetails, {chain: 'ropsten', hardfork: 'petersburg'});

    transaction.sign(Buffer.from(process.env.ACCOUNT_PRIVATE_KEY, 'hex'));
    transaction.v
    const serializedTransaction = transaction.serialize();
    const txId = await web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'));
    console.log(txId)
})();
