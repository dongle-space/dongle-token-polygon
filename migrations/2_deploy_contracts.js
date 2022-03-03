const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Dongle = artifacts.require("./Dongle.sol");

module.exports = async function (deployer) {
  const instance = await deployProxy(Dongle, {deployer});
  console.log('Deployed', instance.address);
};