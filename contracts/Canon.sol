//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Canon is ERC1155 {
    uint256 public constant BOOBS = 0;
    uint256 public constant BTS = 1;

    string public message;
    address owner;

    constructor(string memory _message) ERC1155("") {
        _mint(msg.sender, BOOBS, 10**5, "");
        _mint(msg.sender, BTS, 10**3, "");
        message = _message;
        owner = msg.sender;
    }

    function hello() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public payable{
        require(msg.sender == owner);
        message = _message;
    }
}
