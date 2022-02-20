//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Canon is ERC1155, Ownable {
    uint256 public constant BOOBS = 0; //meaning and exact scope of "public": 
    uint256 public constant BTS = 1;

    string public message;
    // address owner;

    //   Constructor code is only run when the contract is created
    constructor(string memory _message) ERC1155("") { //ERC1155는 어떤 uri를 받는다. 
        _mint(msg.sender, BOOBS, 10**5, ""); //_mint function은 발행을 하는 것 같다. msg.sender는 아마도 초기 소유자인 것 같다.  정확하지 않다. 
        _mint(msg.sender, BTS, 10**3, ""); //The mint function sends an amount of newly created coins to another address.
        message = _message;
        // owner = msg.sender;
    }

    function mint(uint256 amount) public onlyOwner { //public means that it can be called by anyone in the blockchain, but this function checkts whether it is the owner or not(according to https://www.youtube.com/watch?v=XRKf1mpeOHU&t=3s )
        _mint(msg.sender, BOOBS, amount, "");
    }

    function hello() public view returns (string memory) {
        return message;
    }

    // function setMessage(string memory _message) public payable{
    //     require(msg.sender == owner);
    //     message = _message;
    // }
}
