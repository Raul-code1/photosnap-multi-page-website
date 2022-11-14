import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BtnsBlack } from "./"
import { MobileMenuContext, MobileMenuContexType } from '../context/mobileMenuContext';

export const MobileMenu = () => {

    const { showMenu,handleShowMenu } = useContext( MobileMenuContext ) as MobileMenuContexType

  return (
      <div className={`fixed bg-[rgba(0,0,0,0.72)] w-full h-full 
                    ${ !showMenu && 'opacity-0 invisible'} transition-all duration-700 z-[990]  
        `}
            onClick={ handleShowMenu }
        >

        <div className={` ${ !showMenu && 'translate-y-[-200%]'} 
                        transition-all duration-700
                    flex justify-center flex-col pt-4 bg-[white] pb-4 z-[999] `}>
          
                <div className="text-center flex flex-col gap-5 font-[600] tracking-[3px] ">
                   <Link onClick={ handleShowMenu } to='/stories'>STORIES</Link>
                   <Link onClick={ handleShowMenu } to='/features'>FEATURES</Link>
                   <Link onClick={ handleShowMenu } to='/pricing'>PRICING</Link>
                <div className="w-[75%] m-auto"><hr /></div>

                </div>

                <div className="w-[75%]  m-auto pt-5" onClick={ handleShowMenu }  >
                    <BtnsBlack  />
                </div>
        </div>
      </div>
  )
}
