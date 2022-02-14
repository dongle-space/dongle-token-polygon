const NotionToken = artifacts.require("./NotionToken.sol");

module.exports = function (deployer) {
  deployer.deploy(NotionToken, 1000000000);
};
