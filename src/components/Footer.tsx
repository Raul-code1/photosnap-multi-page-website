import { AiFillFacebook,AiFillYoutube,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

import { Logo,ArrowWhite,LogoWhite } from "./"
import { Link } from 'react-router-dom';


const options = ['HOME','STORIES','FEATURES','PRICING']


export const Footer = () => {
  return (
    <footer className="bg-[black] py-10 px-20 grid grid-cols-1 grid-rows-5 items-center first-letter:
        md:grid-cols-3 md:grid-rows-3   lg:grid-cols-5 
      " >
        <div  className="m-auto md:col-span-1	md:row-span-1" > <LogoWhite /> </div>

        <div className="text-[white] flex gap-x-3 m-auto text-[25px]  md:row-start-3 " >
          <AiFillFacebook className="hover:text-[#0000ee]  transition-all duration-700 cursor-pointer"  />
          <AiFillYoutube className="hover:text-[red]  transition-all duration-700 cursor-pointer " />
          <AiOutlineTwitter className="hover:text-[#4EC9C6] transition-all duration-700 cursor-pointer "   />
          <BsPinterest className="hover:text-[#FFC593] trasition-all duration-700 cursor-pointer " />
          <AiOutlineInstagram className="hover:text-[#BC7198]  transition-all duration-700 cursor-pointer" />
        </div>

      <div className="flex flex-col text-center gap-y-3 text-[white] md:flex-row md:gap-x-4 
        md:col-start-1	 lg:col-start-2 lg:row-span-3 lg:flex-col lg:gap-y-7
      ">
          { options.map( op=><Link
                key={ op }
                to={`/${op.toLocaleLowerCase()}`} 
                className='hover:text-[grey] transition-all duration-700 '
                >
                  { op }
                </Link> ) }
      </div>

      <div className="flex bg-[black]  text-[white]  md:col-start-3 md:row-start-1 lg:col-start-5 " >
        <div className="flex justify-between py-8 ">
          <span className="text-[12px] tracking-[3px] mx-4 md:justify-self-end		">GET AN INVITE</span> <ArrowWhite />
        </div>
      </div>

        <div className=" text-[grey] text-[12px] md:col-start-3 md:row-start-3	lg:col-start-5 " >Copyright 2019. All Rights Reserved</div>

    </footer>
  )
}
