import Image from 'next/image'
import myImage from '../../public/me2.png'

const AboutCard = ({title, details}) => {
    return (
        <div className="w-full px-8 pt-10 pb-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-md
        hover:bg-opacity-20 hover:backdrop-blur-lg duration-300 group">
            <div className="h-[60px] w-[60px] overflow-hidden rounded-full group-hover:scale-150 duration-300">
                <Image src={myImage} alt="Picture of the author"/>
            </div>
            <p className="text-xl mt-8 group-hover:mt-16 mb-12 duration-300">{title}</p>
            <p className="text-lg">{details}</p>
        </div>
    )
}

export default AboutCard;