require('dotenv').config();

const Web3 = require('web3');
const localEndpoint = `http://localhost:8545`;

const account1 = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1';

const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));

const bytecode = require('./smart-contracts/ballot/bytecode').object;

(async () => {
    const nonce = await web3.eth.getTransactionCount(account1);
    let newContractTx = {
        nonce: nonce,
        data: '0x' + bytecode,
        from: account1,
        gasLimit: web3.utils.toHex(6000000)
    };
    newContractTx.gas = await web3.eth.estimateGas(newContractTx);
    console.log(newContractTx.gas)
    const signedNewContractTx = await web3.eth.accounts.signTransaction(newContractTx, `0x${process.env.ACCOUNT_PRIVATE_KEY}`);
    const txCreatedContract = await web3.eth.sendSignedTransaction(signedNewContractTx.rawTransaction);
    console.log(txCreatedContract);

})();
