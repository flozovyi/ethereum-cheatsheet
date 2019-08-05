# Web3 examples

All is valid for web3.js version 1.2.0
Documentation: https://web3js.readthedocs.io/en/v1.2.0/
https://github.com/ethereumjs/ethereumjs-tx

## Getting started
### Testnet registration
* Install Metamask to your browser https://metamask.io/
* Create new account in Ropsten testnet in Metamask
* Gather some ETH to your account https://faucet.ropsten.be/
* Check balance for your account both in Metamask and on Etherscan https://ropsten.etherscan.io/

### Development environment
* Clone repository
* Register on Infura https://infura.io and obtain an access key
* Copy sample.env content to .env and fill envs there


### Local node
```bash
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum	
npm install -g ethereumjs-testrpc


```

Launch local ethereum node
```bash
	
testrpc
testrpc --db ~/.testrpc/ --acctKeys ~/.testrpc/accounts.json -d



```



## Useful links
* All about signatures in Ethereum: https://dzone.com/articles/signing-and-verifying-ethereum-signatures
* Smart contract examples:
  * https://solidity.readthedocs.io/en/v0.4.24/solidity-by-example.html
  * https://solidity.readthedocs.io/en/v0.4.24/solidity-by-example.html#voting
  * https://solidity.readthedocs.io/en/v0.4.24/solidity-by-example.html#simple-open-auction
* Generating bytes32 string (with MetaMask): `web3.padRight(web3.fromAscii('hello'), 34)`
* Using Ethers.js for generating bytes32 string (https://docs.ethers.io/ethers.js/html/) `ethers.utils.formatBytes32String('Some string'),`

