
export interface SwitchProps{
  priceState:boolean;
  changeState?:()=> void;
}


export const SwitchPricing = ({ priceState,changeState }:SwitchProps) => {
  return (
    <>
      <div className="flex gap-x-4 items-center justify-center py-11 ">



          <div className={` ${( priceState )?'text-[grey]':'text-[black]'} `} >Monthly</div>

          <div 
              onClick={ changeState }
              className={`flex w-[70px] h-[30px]  rounded-full cursor-pointer
              ${ ( priceState ) ?'bg-[black]':'bg-light-grey' }
              `} 
              >
            <div className={` h-[30px] w-[30px]  rounded-full  transition-all duration-300
              ${ ( priceState ) ?'bg-[white] ml-10 ':'bg-[black]' }
              `} >
              </div>
          </div>

          <div  className={` ${( priceState )?'text-[black]':'text-[grey]'} `} >Yearly</div>

      </div>
    </>
  )
}
