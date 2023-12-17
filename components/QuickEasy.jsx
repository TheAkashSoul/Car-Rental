import Image from "next/image";

import carLogo_1 from '../assets/car-q_e.png'
import carLogo_2 from '../assets/car-q_e-2.png'
import carLogo_3 from '../assets/car-q_e-3.png' 

export default function QuickEasy(){
    return(
        <section className="xl:px-28 px-4 md:px-8">
            <div className="flex flex-col items-center justify-center mt-14 mb-20">
                <div className="flex flex-col text-center">
                    <p className="my-4 font-bold text-2xl">Plan your trip now</p>
                    <h3 className="my-2 font-extrabold text-5xl">Quick & easy car rental</h3>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 xl:gap-40 mt-20">
                    <div className="flex flex-col gap-2 text-center items-center w-[17rem]">
                        <Image src={carLogo_1} height={200} />
                        <h4 className="font-bold text-2xl">Select Car</h4>
                        <p className="font-light">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center items-center w-[17rem]">
                        <Image src={carLogo_3} height={200} />
                        <h4 className="font-bold text-2xl">Contact Operator</h4>
                        <p className="font-light">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center items-center w-[17rem]">
                        <Image src={carLogo_2} height={200} />
                        <h4 className="font-bold text-2xl">Let's Drive</h4>
                        <p className="font-light">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            </div>
        </section>
    )
}