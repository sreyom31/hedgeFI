let Web3 = require('web3');

const connectMeta = (setAddress, setWeb3) => {
    window.ethereum ?
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
        console.log(w3)
    }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
}

export {
    connectMeta
}