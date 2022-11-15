import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";



import { BtnsBlack,CloseBtn,Logo,MenuBtn } from "./";
import { MobileMenuContext, MobileMenuContexType } from '../context/mobileMenuContext';

export const NavBar = () => {

    const navigate=useNavigate();

    const{ showMenu,handleShowMenu }=useContext( MobileMenuContext ) as MobileMenuContexType

  return (
    <nav className="p-4 flex justify-between items-center md:px-[75px] lg:px-[150px] lg:pt-6 ">

        <div 
            onClick={()=>navigate('/')} 
            className='cursor-pointer'
        >
            <Logo />
        </div>

        <div className="hidden font-dm  font-bold text-sm  md:flex md:gap-5 lg:gap-20 " >
            <Link  className="hover:text-light-grey transition-all duration-300 tracking-[2px]" to='/stories'>STORIES</Link>
            <Link  className="hover:text-light-grey transition-all duration-300 tracking-[2px]" to='/features'>FEATURES</Link>
            <Link  className="hover:text-light-grey transition-all duration-300 tracking-[2px]" to='/pricing'>PRICING</Link>
        </div>
        
       <BtnsBlack hiddenBtn='hidden' />

        <div 
            className="md:hidden" 
            onClick={ handleShowMenu }
        >
            {
                showMenu ?<CloseBtn />:<MenuBtn />
            }

            
            
        </div>
    </nav>
  )
}
