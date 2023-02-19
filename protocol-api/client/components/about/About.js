import AboutCard from "./aboutCard";

const About = () => {


    const data = [
        {
            title: "About-1",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "About-2",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            title: "About-3",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
    ]

    const cards = data.map((item, index) => {
        return (
            <AboutCard key={index} title={item.title} details={item.details} />
        )
    })

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 to-black">
            <div className="container mx-auto">

                <p className="text-lg text-gray-300 mb-8">
                    lorem ipsum dolor sit amet consectetur adipisicing.
                </p>

                <p className="text-5xl text-white mb-16">
                    Made for The Next <br />
                    Generation Of Financial <br />
                    Players
                </p>

                <div className="grid grid-cols-3 gap-16 text-white">
                    {...cards}
                </div>
            </div>
        </section>
    );
}

export default About;