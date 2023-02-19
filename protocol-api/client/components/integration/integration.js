import IntergrationCard from "./integrationCard"

const Intergration = () => {

    const data = [
        {
            title: "Capital Hedging",
            details: "With our insurance protocol, you can hedge your capital against potential losses. This means that you can protect your assets and investments from unforeseen risks."
        },
        {
            title: "Decentralized and secure",
            details: "Our platform is built on the blockchain network, which ensures security, transparency, and immutability. You can be confident that your data and assets are safe and protected."
        },
        {
            title: "Smart contracts",
            details: "Our platform uses smart contracts to automate the insurance process, eliminating the need for intermediaries and providing a faster and more efficient service."
        },
        {
            title: "Customizable policies",
            details: "We offer customizable insurance policies to meet your specific needs. Whether you need coverage for your business, property, or personal assets, we've got you covered."
        },
        {
            title: "Easy claims processing",
            details: "Our platform streamlines the claims process, making it easy and hassle-free. You can file a claim quickly and easily, and our automated system will take care of the rest."
        },
        {
            title: "Low fees",
            details: "Our platform charges low fees, which means that you can get the coverage you need without breaking the bank. We also offer discounts for long-term customers."
        },
    ]

    const cards = data.map((item, index) => {
        return (
            <IntergrationCard key={index} title={item.title} details={item.details} />
        )
    })

    return (
        <section className="py-24 text-white text-center bg-gradient-to-bl from-black to-blue-900">
            <p className="text-4xl mb-6">How We Work</p>
            <p className="text-lg text-gray-300 mb-2">
                We eliminate the need for intermediaries and provide
            </p>
            <p className="text-lg text-gray-300 mb-16">
                a seamless and efficient insurance experience.
            </p>
            <div className="container mx-auto grid grid-cols-3 gap-12">
                {...cards}
            </div>
        </section>
    )
}


export default Intergration