import { useEffect, useState } from "react"
import { connectMeta } from "../meta"
import Image from "next/image"
import Content from "./content"

import myImage from "../../public/me.jpeg"

const Landing = () => {

    

    return (
        <section className="pt-24 h-screen bg-gradient-to-br from-blue-900 to-black">
            <div className="container h-full mx-auto grid grid-cols-2">
                <Content />
                <div className="flex items-center justify-center">
                    <div className="h-[500px] w-[500px] overflow-hidden rounded-full">
                        <Image src={myImage} alt="Picture of the author"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing