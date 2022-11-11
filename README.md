# Helper contract to make a getBalance multicall

Deployed to:
```
Ethereum: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
Rinkeby: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
Avalanche: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
ArbitrumOne: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
Binance: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
Fantom: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
Polygon: 0x9E7a4300FBC63c59eC556E5F9962a125D369e42C
```

Firstly: set MNEMONIC, ALCHEMY_KEY and OWNER_PRIVATE_KEY into .env file.
```
npm i
```
### Start node:
```
npx hardhat node --hostname localhost
```
### Deploy contract locally:
```
npx hardhat run scripts/deploy.js --network localhost
```
As a result, you will get the contract address. Use this address to get tokens balances.

### Deploy to selected network:
```
hardhat run --network <network> scripts/<file_name>.js
```

```
Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
