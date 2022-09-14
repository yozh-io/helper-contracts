require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require('dotenv').config();

const privateKey = process.env.OWNER_PRIVATE_KEY;
const mnemonic = process.env.MNEMONIC;
const alchemyKey = process.env.ALCHEMY_KEY || 'bP-PD1vNyqRuOv4zqfTiRlhKLhCnu13u';


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`,
      },
      chainId: 1,
      gasPrice: 'auto',
      accounts: {
        mnemonic,
        count: 10,
        accountsBalance: '1000000000000000000000',
      },
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyKey}`,
      chainId: 4,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`,
      chainId: 1,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    polygon: {
      url: ` https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      chainId: 137,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      chainId: 10,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    avalanche: {
      url: `https://api.avax.network/ext/bc/C/rpc`,
      chainId: 43114,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    arbitrumOne: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      chainId: 42161,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    fantom: {
      url: `https://rpc.fantom.network`,
      chainId: 250,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    gnosis: {
      url: `https://rpc.gnosischain.com`,
      chainId: 100,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    },
    binance: {
      url: `https://bsc-dataseed.binance.org/`,
      chainId: 56,
      gasPrice: 'auto',
      accounts: [`0x${privateKey}`],
    }
  },
};
