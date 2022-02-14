let NotionToken = artifacts.require("NotionToken");

contract("NotionToken", (accounts) =>  {
    // console.log(accounts)
    before(async () => {
        NotionToken = await NotionToken.deployed()
        console.log("Notion Address", NotionToken.address)
        console.log("Notion accounts", NotionToken.accounts)
        console.log("Notion amount", NotionToken.amount)
    })

    it("gives the owner of the token 1M tokens", async () => {
        let balance = await NotionToken.balanceOf(accounts[0])
        balance = (web3.utils.fromWei(balance, 'ether'))
        assert.equal(balance, "1000000000", "Balance should be 1M tokens for contract creator")
    })

    it("can transfter tokens between accounts", async () => {
        const amount = web3.utils.toWei('1000', 'ether')
        await NotionToken.transfer(accounts[1], amount, { from: accounts[0] })

        let balance = await NotionToken.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance should be 1k tokens for contract creator")
    })

})