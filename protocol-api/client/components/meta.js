let Web3 = require('web3');

const connectMeta = (dispatch) => {

    window.ethereum ?
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {

        let w3 = new Web3(ethereum);
        console.log(dispatch)
        dispatch(connectWallet({
            address: accounts[0],
            connected: true,
            web3: w3
        }))

        console.log(accounts[0])

    }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
}

export {
    connectMeta
}