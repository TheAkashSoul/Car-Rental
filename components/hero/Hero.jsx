import BtnRed from "../BtnRed";
import mainCar from "../../assets/main-car.png"
import heroBg from "../../assets/hero-bg.png"
import Image from "next/image";
import BookCar from "./BookCar";


export default function Hero(){
    return(
        <main>
            <div className="flex flex-col relative">
                <div className="flex flex-row">
                    <div className="flex flex-col gap-4 xl:pl-28 px-4 md:pl-8 z-5">

                        <div className="flex flex-col gap-4 mt-36 items-center justify-center text-center md:items-start md:text-start md:mt-40">

                            <p className="text-black font-bold text-xl">Plan your trip now</p>

                            <h1 className="text-black font-bold text-5xl md:w-[70%]">Save <span className="text-[#FD4C31]">big</span> with our car rental</h1>

                            <p className="w-[90%] mb-4 font-extralight text-base">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>

                        </div>

                        <div className="flex flex-col md:flex-row mt-2 gap-6 items-center justify-center md:justify-start">
                            <BtnRed 
                            link="#bookAcar" 
                            title="Book Ride" 
                             classname="text-white bg-[#FD4C31] text-xl px-10 py-6" />

                            <BtnRed link="/" 
                            title="Learn More" 
                            classname="text-white bg-black text-xl px-10 py-6 hover:text-black hover:bg-white hover:border hover:border-black" />
                        </div>
                    </div>
                    <div className="relative top-0 right-0 z-3  hidden md:block">
                        {/* car img */}
                        <Image className="" src={heroBg} height={900} alt="background" />
                        <div className="">
                             <Image className="absolute xl:top-48 md:top-32 top-16 xl:right-36 md:right-28 z-4" src={mainCar} height={500} alt="car" />
                        </div>
                    </div>
                </div>

                <div className="px-20 flex items-center justify-center mt-16 md:mt-8 xl:mt-[-60px] z-20 mb-20">
                    {/* book a car */}
                    <BookCar />
                </div>
            </div>
        </main>
    )
}