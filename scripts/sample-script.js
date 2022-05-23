// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy
  const TokenHelper = await hre.ethers.getContractFactory("TokenHelper");
  const tokenHelper = await TokenHelper.attach(
    "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134"
  );

  const result = await tokenHelper.batchTokenInfo(
    "0x929dC4dDe12aF8424DF1B92f686203E09CFEe7b4",
    [
      "0x0000000000000000000000000000000000000000",
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    ],
    "0x1111111254fb6c44bAC0beD2854e76F90643097d"
  );
  console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
