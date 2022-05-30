# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Deploy locally
Firstly: set MNEMONIC and ALCHEMY_KEY into .env file.
```
npm i
```
Start node:
```
npx hardhat node --hostname 0.0.0.0
```
Deploy contrat:
```
node scripts/sample-script.js
```
As a result, you will get the contract address. Use this address to get tokens balances.

