require('dotenv').config();
const ethers = require('ethers');
const Web3 = require('web3');
const localEndpoint = `http://localhost:8545`;

const account1 = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1';

const web3 = new Web3(new Web3.providers.HttpProvider(localEndpoint));

const bytecode = require('./smart-contracts/ballot/bytecode').object;
const ABI = require('./smart-contracts/ballot/abi');


(async () => {
    const newContract = new web3.eth.Contract(ABI, null, {
        from: account1,
    });
    const arguments = [
        [
            ethers.utils.formatBytes32String('Nick'),
            ethers.utils.formatBytes32String('Tom'),
            ethers.utils.formatBytes32String('Bob'),
        ]
    ];
    const deploymentData = {
        data: `0x${bytecode}`,
        arguments
    };
    const estimatedGas = await newContract.deploy(deploymentData).estimateGas();
    const newContractInstance = await newContract.deploy(deploymentData).send({
        gas: estimatedGas
    });

    const contractAddress = newContractInstance._address;
    const contractNewInstance = new web3.eth.Contract(ABI, contractAddress, {
        from: account1,
    });
    const voteResult = await contractNewInstance.methods.vote(1).send()

})();
