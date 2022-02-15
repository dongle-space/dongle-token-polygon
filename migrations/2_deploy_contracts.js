const NotionToken = artifacts.require("./NotionToken.sol");
const Canon = artifacts.require("./Canon.sol")

module.exports = function (deployer) {
  deployer.deploy(NotionToken, 1000000000);
};

module.exports = function (deployer) {
  deployer.deploy(Canon, "Hello world constructor");
};