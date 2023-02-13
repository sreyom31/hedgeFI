import { useEffect, useState } from "react"
import { connectMeta } from "../meta"

const Landing = () => {

    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)

    const connectAccount = () => {
        connectMeta(setAddress, setWeb3);
    }

    return (
        <section className="pt-24 bg-gradient-to-br from-blue-900 to-black">
            <button className="outline-none py-4 px-12 text-2xl bg-blue-400
            hover:bg-blue-600 hover:outline-none" onClick={connectAccount}>
                Connect Meta-mask
            </button>
        </section>
    )
}

export default Landing