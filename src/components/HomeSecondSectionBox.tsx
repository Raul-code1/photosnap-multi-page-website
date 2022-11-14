import { Link } from 'react-router-dom';
import { FC } from 'react';


import { Arrow } from './Arrow';


export const HomeSecondSectionBox:FC = () => {

    
  return (
    <>
        <section className={`flex flex-col-reverse md:flex-row-reverse md:h-[50vh] lg:h-[60vh] `}>

        <div className="bg-[white] text-[black] relative p-10 md:w-[65%] md:flex md:items-center md:pr-20 lg:w-[45%]
                  lg:justify-center
                  " >
                  

    
             <div className="bg-[] lg:w-[75%] px-[20px] ">

                     <h1 className="font-[400]  text-[30px] mb-4 tracking-[2px] md:text-[35px] 
                         md:tracking-[4px] " >BEAUTIFUL STORIES EVERY TIME.</h1>
                     <p className="font-[100] text-light-grey mb-4  lg:text-justify">
                     We provide design templates to ensure your stories look terrific. 
                     Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
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
              className={`bg-home-second-image-mobile md:bg-home-second-image-tablet md:w-[35%]
                md:h-[100%]  lg:w-[55%]
                    h-[30vh]  lg:bg-home-second-image-desktop  bg-no-repeat bg-cover bg-center  `} >
                {/* Image */}
              </div>
      </section>
    
    </>
  )
}
