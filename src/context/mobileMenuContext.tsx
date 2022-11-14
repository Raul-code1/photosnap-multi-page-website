import { createContext, useState, PropsWithChildren, ReactNode } from 'react';


export type MobileMenuContexType={
    showMenu:boolean,
    handleShowMenu:()=>void
}


export const MobileMenuContext=createContext({});




interface Props{
    children:ReactNode;
}

export const MenuMobileProvide=({ children }:Props)=>{

    const [showMenu, setShowMenu] = useState(false)   

    const handleShowMenu=():void=>setShowMenu( !showMenu )

    return(
        <MobileMenuContext.Provider value={{
            showMenu,
            handleShowMenu
        }}>
            { children }
        </MobileMenuContext.Provider>
    )
}

