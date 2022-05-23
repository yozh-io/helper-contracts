const name = "TokenHelper";

const deployFunction = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const tx = await deploy(name, {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });

  await deployments.save(name, {
    abi: [],
    address: tx.address,
  });
};

deployFunction.tags = [name];
deployFunction.dependencies = [];

module.exports = deployFunction;
