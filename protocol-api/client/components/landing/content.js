import { useState } from "react"
import { connectMeta } from "../meta"

const Content = () => {

    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)

    const connectAccount = () => {
        connectMeta(setAddress, setWeb3);
    }

    return (
        <div className="flex flex-col justify-center h-full w-3/4 mx-auto
        space-y-12 text-white">
            <p className="text-4xl leading-normal italic">
                With our innovative protocol, you can rest assured that your capital will be hedged against potential losses.
            </p>
            <p className="text-lg text-gray-200">
                By leveraging the power of blockchain, we eliminate the need for intermediaries and provide a seamless and efficient insurance experience.
            </p>
            <div>
                <div className="py-2 px-12 duration-300 bg-blue-400 hover:bg-blue-600
                text-2xl text-black cursor-pointer inline-block rounded-lg"
                onClick={connectAccount}>
                    Connect MetaMask
                </div>
            </div>
            
        </div>
    )
}

export default Content