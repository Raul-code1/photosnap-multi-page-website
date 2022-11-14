import { SwitchProps } from './SwitchPricing';

interface Props extends SwitchProps{}

export const PricingCards = ({ priceState }:SwitchProps) => {
  return (

    <section className='grid grid-cols-1 py-24 lg:grid-cols-3 lg:px-10 gap-y-4 ' >

        {/* One card */}
        <div className='grid grid-cols-1 grid-rows-3 pt-10 bg-light-grey text-center  h-[55vh] mx-5
            md:h-[30vh] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-1
            lg:h-[50vh]  lg:py-8  lg:w-[80%]
        ' >

          <div className='md:pl-10 0 lg:pr-10  lg:mb-5'>
            <h6 className='text-[25px] font-bold md:text-justify lg:text-center lg:pb-6 '>Basic</h6>
            <p className='text-[grey] md:text-justify lg:text-center ' >Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
          </div>

            <div className='md:row-span-2  ' >
               <span className='text-[38px] font-bold tracking-[2px] ' >{( priceState )?'$190.00':'$19.00'}</span> <br />
               <span>{( priceState )?'Per Year':'Per Month'}</span>
            </div>

          <div className='lg:pt-10' >
              <button className='bg-[black] text-[white] w-[75%] py-2 ' > PICK PLAN </button>
          </div>

        </div>

        {/* One card */}

        <div className='grid grid-cols-1 grid-rows-3 pt-10 bg-[black] text-[white] text-center  h-[55vh] mx-5
            md:h-[30vh] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-1
            lg:h-[60vh] lg:translate-y-[-32px]  lg:py-8  lg:w-[80%]
            ' >

          <div className='md:pl-10 0 lg:pr-10  lg:mb-5'>
            <h6 className='text-[25px] font-bold md:text-justify lg:text-center lg:pb-6 '>Pro</h6>
            <p className='text-[grey] md:text-justify lg:text-center ' >More advanced features available. Recommended for photography veterans and professionals.</p>
          </div>

            <div className='md:row-span-2 lg:pb-16 ' >
               <span className='text-[38px] font-bold tracking-[2px] ' >{( priceState )?'$390.00':'$39.00'}</span> <br />
               <span>{( priceState )?'Per Year':'Per Month'}</span>
            </div>

          <div className='lg:pb-10' >
              <button className='bg-[white] text-[black] w-[75%] py-2 ' > PICK PLAN </button>
          </div>

        </div>

        {/* One card */}

        <div className='grid grid-cols-1 grid-rows-3 pt-10 bg-light-grey text-center  h-[55vh] mx-5
            md:h-[30vh] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-1
            lg:h-[50vh]  lg:py-8  lg:w-[80%]
            ' >

          <div className='md:pl-10 0 lg:pr-10  lg:mb-5'>
            <h6 className='text-[25px] font-bold md:text-justify lg:text-center lg:pb-6 '>Business</h6>
            <p className='text-[grey] md:text-justify lg:text-center ' >Additional features available such as more detailed metrics. Recommended for business owners.</p>
          </div>

            <div className='md:row-span-2  ' >
               <span className='text-[38px] font-bold tracking-[2px] ' >{( priceState )?'$990.00':'$99.00'}</span> <br />
               <span>{( priceState )?'Per Year':'Per Month'}</span>
            </div>

          <div className='lg:pt-10' >
              <button className='bg-[black] text-[white] w-[75%] py-2 ' > PICK PLAN </button>
          </div>

        </div>

    </section>
  )
}
