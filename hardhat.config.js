require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require('dotenv').config();

const accounts = {
  mnemonic:
    process.env.MNEMONIC,
};
const alchemyApiKey = process.env.ALCHEMY_KEY;

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
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
        // url: "https://mainnet-nethermind.blockscout.com/",
      },
      saveDeployments: false,
      tags: ["test", "local"],
      accounts,
      chainId: 1337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    alice: {
      default: 1,
    },
    bob: {
      default: 2,
    },
  },
};
