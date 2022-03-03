const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const DongleV1 = artifacts.require("./Dongle.sol");

module.exports = async function (deployer) {
    // console.log(Dongle)
  const instance = await deployProxy(DongleV1, [], {deployer, kind: "uups"});
  console.log("Deployed", instance.address);
};

