const Dongle = artifacts.require("./Dongle.sol");

module.exports = function (deployer) {
  deployer.deploy(Dongle);
};