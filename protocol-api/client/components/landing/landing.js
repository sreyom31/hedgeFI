import { useEffect, useState } from "react"
import { connectMeta } from "../meta"
import Content from "./content"

const Landing = () => {

    

    return (
        <section className="pt-24 h-screen bg-gradient-to-br from-blue-900 to-black">
            <div className="container h-full mx-auto grid grid-cols-2">
                <Content />
                <div></div>
            </div>
        </section>
    )
}

export default Landing