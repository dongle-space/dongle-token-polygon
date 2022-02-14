//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NotionToken is ERC20 {
    constructor(uint256 _supply) ERC20("Notion", "NTN") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }

}

