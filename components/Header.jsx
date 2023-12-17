import Image from "next/image"
import logo from "../assets/logo.png"
import Link from "next/link"
import BtnRed from "./BtnRed"

import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(){
    return(
        <header className="flex flex-row gap-4 h-24 justify-between items-center w-full xl:px-28 px-4 md:px-8 absolute top-0 left-0 z-10">

            <div>
                <Link href="/">
                    <Image src={logo} height={48} />
                </Link>
            </div>

            <div className="xl:flex flex-row hidden gap-6 font-bold">
                <Link className="hover:text-[#FD4C31]" href="/">Home</Link>
                <Link className="hover:text-[#FD4C31]" href="/">About</Link>
                <Link className="hover:text-[#FD4C31]" href="/">Vehicle Models</Link>
                <Link className="hover:text-[#FD4C31]" href="/">Testimonials</Link>
                <Link className="hover:text-[#FD4C31]" href="/">Our Team</Link>
                <Link className="hover:text-[#FD4C31]" href="/">Contact</Link>
            </div>

            <div className="xl:flex flex-row hidden gap-6 items-center">
                <Link className="hover:text-[#FD4C31] font-bold" href="/" >Sign In</Link>
                <BtnRed link="/" title="Register" classname="text-white bg-[#FD4C31] px-8 py-3" />
            </div>
            <button className="flex xl:hidden ">
                <GiHamburgerMenu size={26} />
            </button>

        </header>
    )
}