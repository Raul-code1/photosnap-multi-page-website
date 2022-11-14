import { Link } from 'react-router-dom';
import { Arrow } from './Arrow';

export const HomeThirdSectionBox = () => {
  return (
    <section className={`flex flex-col-reverse md:flex-row md:h-[50vh] lg:h-[60vh] `}>

        <div className="bg-[white] text-[black] relative p-10 md:w-[65%] md:flex md:items-center md:pr-20 lg:w-[45%]
                  lg:justify-center
                  " >
                  

    
             <div className="bg-[] lg:w-[75%] px-[20px] ">

                     <h1 className="font-[400]  text-[30px] mb-4 tracking-[2px] md:text-[35px] 
                         md:tracking-[4px] " >DESIGNED FOR EVERYONE.</h1>
                     <p className="font-[100] text-light-grey mb-4  lg:text-justify">
                     Photosnap can help you create stories that resonate with your audience.
                      Our tool is designed for photographers of all levels, brands, businesses you name it. 
                     </p>
            <Link
                   className="flex items-center hover:border-b-[white] cursor-pointer transition-all duration-100"
                    to='/stories'
            >
                    VIEW THE STORIES
                    <span className="ml-4" >
                      <Arrow />
                    </span>
            </Link> 

            </div>
        </div>

              <div 
              className={`bg-home-third-image-mobile md:bg-home-third-image-tablet md:w-[35%]
                md:h-[100%]  lg:w-[55%]
                    h-[30vh]  lg:bg-home-third-image-desktop  bg-no-repeat bg-cover bg-center  `} >
                {/* Image */}
              </div>
      </section>
  )
}
