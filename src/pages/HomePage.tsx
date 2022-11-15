
import { ArrowWhite, HomeSecondSectionBox, HomeThirdSectionBox } from "../components"
import { StoriesImageCard } from "../components/StoriesImageCard"
import storiesImages from '../assets/data/storiesData';
import { FeaturesGrid } from "../components/featuresComponents/FeaturesGrid";




export const HomePage = () => {



  return (
    <>
        {/* Whole section */}
        <section className="flex flex-col-reverse md:flex-row md:h-[50vh] lg:h-[60vh] ">

          <div className="bg-[black] text-[white] relative p-10 md:w-[65%] md:flex md:items-center md:pr-20 lg:w-[45%]
                            lg:justify-center
                            " >
            {/* Gradients bar */}
            <div className="h-[5px] w-[100px] bg-gradient-to-r from-gradient-color-3 to-gradient-color-2 via-gradient-color-1 absolute top-0 md:hidden  "></div>
            <div className=" hidden md:block h-[280px] w-[5px] absolute left-0 top-[26%] 
              bg-gradient-to-b from-gradient-color-3 to-gradient-color-2 via-gradient-color-1
            "></div>

              
              <div className="bg-[] lg:w-[75%] px-[20px] ">

                <h1 className="font-[400]  text-[30px] mb-4 tracking-[2px] md:text-[35px] 
                    md:tracking-[4px] " >CREATE AND SHARE YOUR PHOTOS STORIES.</h1>
                <p className="font-[100] text-light-grey mb-4  lg:text-justify">
                  Photosnap is a platform for photographers and visual storytellers. 
                  We make it easy to share photos, tell stories and connect with others.
                </p>
              <div
                   className="flex items-center hover:border-b-[white] cursor-pointer transition-all duration-100"
                 
                >
                    GET AN INVITE
                    <span className="ml-4" >
                      <ArrowWhite />
                    </span>
                </div> 

              </div>
          </div>

            <div 
            className={`bg-home-first-image-mobile md:bg-home-first-image-tablet md:w-[35%]
              md:h-[100%]  lg:w-[55%]
                  h-[30vh]  lg:bg-home-first-image-desktop  bg-no-repeat bg-cover bg-center  `} >
              {/* Image */}
            </div>
        </section>

        <HomeSecondSectionBox />
        <HomeThirdSectionBox />

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
            {
              storiesImages.map( card=>card.homePage &&<StoriesImageCard hiddenDate={ false } key={ card.id } {...card} /> )
            }
        </div>
        

    
          <FeaturesGrid inHomePage />



        
    </>
  ) 
}
