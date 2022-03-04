const {expect} = require("chai")
const Dongle = artifacts.require("Dongle")

//start test block
constract("Dongle", (accounts)=> {
    beforeEach(async () => {
        //Deploy a new Dongle contract for each test
        this.Dongle = await Dongle.new({
            from: accounts[0],
        });
        await this.Dongle.initialize();
    });

    it("should mint 1 NFT with tokenId 0", async () =>{
        await this.Dongle.mint(accounts[1], 0, 1);
        expect(
            (await this.Dongle.balanceOf(accounts[1], 0)).toString()
        ).to.equal("1");
    })
})



// let NotionToken = artifacts.require("NotionToken");
// // artifacts are an object provided by truffle to interact with the contract

// contract("NotionToken", (accounts) =>  {
//     // console.log(accounts)
//     before(async () => {
//         NotionToken = await NotionToken.deployed()
//         console.log("Notion Address", NotionToken.address)
//         console.log("Notion accounts", NotionToken.accounts)
//         console.log("Notion amount", NotionToken.amount)
//     })
// })
//     it("gives the owner of the token 1M tokens", async () => {
//         let balance = await NotionToken.balanceOf(accounts[0])
//         balance = (web3.utils.fromWei(balance, 'ether'))
//         assert.equal(balance, "1000000000", "Balance should be 1M tokens for contract creator")
//     })

//     it("can transfter tokens between accounts", async () => {
//         const amount = web3.utils.toWei('1000', 'ether')
//         await NotionToken.transfer(accounts[1], amount, { from: accounts[0] })

//         let balance = await NotionToken.balanceOf(accounts[1])
//         balance = web3.utils.fromWei(balance, 'ether')
//         assert.equal(balance, '1000', "Balance should be 1k tokens for contract creator")
//     })

// })

// // contract ("Canon",  )  