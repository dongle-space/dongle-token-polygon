const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const Dongle = artifacts.require("./Dongle.sol");

module.exports = async function (deployer) {
    // console.log(Dongle)
  const instance = await deployProxy(Dongle, [], {deployer, kind: "uups"});
  console.log("Deployed", instance.address);
};

