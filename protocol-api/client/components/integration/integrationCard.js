import Image from 'next/image'
import myImage from '../../public/me.jpeg'

const IntergrationCard = ({title, details}) => {
    return (
        <div className="w-full px-8 py-7 text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-md
        hover:bg-opacity-20 hover:backdrop-blur-lg duration-300">
            <div className="h-[50px] w-[50px] mx-auto overflow-hidden rounded-full">
                <Image src={myImage} alt="Picture of the author"/>
            </div>
            <p className="text-xl mt-4 mb-8">{title}</p>
            <p className="text-lg">{details}</p>
        </div>
    )
}

export default IntergrationCard;