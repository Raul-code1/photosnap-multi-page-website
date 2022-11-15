import { Link } from 'react-router-dom';
import { ArrowWhite } from './ArrowWhite';

export const BgBeta = () => {
  return (
    <section className=' relative bg-bg-beta-image-mobile  bg-center bg-no-repeat bg-cover h-[30vh] text-[white] px-10  py-20
        md:bg-beta-image-tablet md:flex md:items-center md:justify-between md:h-[25vh]
        lg:bg-beta-image-desktop  lg:h-[40vh] lg:px-32
    '>
        <div className="h-[5px] w-[100px] bg-gradient-to-r from-gradient-color-3 to-gradient-color-2 via-gradient-color-1 absolute top-0 md:hidden"></div>
        <div className=" w-[5px]  absolute top-0 left-0 bottom-0 hidden md:block
           bg-gradient-to-b from-gradient-color-3 to-gradient-color-2 via-gradient-color-1
        "></div>
        
        <div className='text-[30px] tracking-[2px] pb-5 lg:text-[40px]' >WERE IN BETA. <br /> GET YOUR INVITE <br /> TODAY! </div>
        
        <div className='flex items-center ' >
            <Link to='/'  className='pr-10' > GET AN INVITE </Link>
            <ArrowWhite /> 
        </div>

    </section>
  )
}
