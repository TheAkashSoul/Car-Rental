import Link from "next/link";

export default function BtnRed({link, title, classname, icon}){
    return(
        <Link className={`${classname} hover:bg-[#ed4127] rounded-md shadow-sm shadow-[#FD4C31] font-bold`} href={link} >{title}</Link>
    )
}