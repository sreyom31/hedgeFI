import { useState } from "react"
import { connectMeta } from "./meta"

const Header = () => {

    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)   

    const connectAccount = () => {
        connectMeta(setAddress, setWeb3)
    }

    return (
        <header className="w-full fixed top-0 left-1/2 py-4 flex text-white
        justify-around items-center -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="text-3xl">
                Logo
            </div>
            <ul className="flex space-x-12 text-xl">
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
            <div className="py-2 px-10 bg-blue-400 hover:bg-blue-500 
            text-xl text-black rounded-lg cursor-pointer" onClick={connectAccount}>
                Connect
            </div>
        </header>
    )
}

export default Header