import { FC } from 'react';


interface Props{
   
    hiddenBtn?:string;
}

export const BtnsBlack:FC<Props> = ({ hiddenBtn='' }) => {
  return (
    <div className={`${hiddenBtn} text-sm font-dm text-white text-[white] cursor-pointer
                     transition-all duration-500 text-center
                     bg-[black] hover:bg-light-grey hover:text-[black] px-9  py-3 font-500  md:block` } >
        <button>GET AN INVITE</button>
    </div>
  )
}
