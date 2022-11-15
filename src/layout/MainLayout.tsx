import { FC, PropsWithChildren } from 'react';

import { NavBar,MobileMenu, Footer } from '../components';
import { MenuMobileProvide } from '../context/mobileMenuContext';


export const MainLayout:FC<PropsWithChildren> = ({ children }) => {



  return (
    <>    
        <MenuMobileProvide>
            <NavBar />
            
            
            <main className='relative'>
              <MobileMenu />
                { children }
            </main>

          <Footer />

            <div className='bg-[black]  text-[white]  text-center ' >
              Challenge by <a className='text-[blue] underline '  href="https://www.frontendmentor.io/">Front end Mentor</a>
               Coded by <a className='text-[blue] underline '  href="https://github.com/Raul-code1">Raul Pineda</a></div>

        </MenuMobileProvide>



    </>
  )
}
