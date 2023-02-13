import IntergrationCard from "./integrationCard"

const Intergration = () => {

    const data = [
        {
            title: "Intergration 1",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "Intergration 2",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "Intergration 3",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "Intergration 1",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "Intergration 2",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "Intergration 3",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
    ]

    const cards = data.map((item, index) => {
        return (
            <IntergrationCard key={index} title={item.title} details={item.details} />
        )
    })

    return (
        <section className="py-24 text-white text-center bg-gradient-to-bl from-black to-blue-900">
            <p className="text-4xl mb-6">One Intergration to rule them all</p>
            <p className="text-lg text-gray-300 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-lg text-gray-300 mb-16">
                lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="container mx-auto grid grid-cols-3 gap-12">
                {...cards}
            </div>
        </section>
    )
}


export default Intergration