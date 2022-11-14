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
            
        </MenuMobileProvide>

    </>
  )
}
