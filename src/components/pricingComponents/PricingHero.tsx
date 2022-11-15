
export const PricingHero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:h-[50vh] lg:h-[70vh]">

    <div className="bg-[black] text-[white] relative p-10 md:w-[65%] md:flex md:items-center md:pr-20 lg:w-[40%] " >
    {/* Gradient bar */}
        <div className="h-[5px] w-[100px] bg-gradient-to-r from-gradient-color-3 to-gradient-color-2 via-gradient-color-1 absolute top-0 md:hidden"></div>
        <div className="h-[150px] hidden md:block w-[5px]  absolute left-0 lg:h-[100px] 
             bg-gradient-to-b from-gradient-color-3 to-gradient-color-2 via-gradient-color-1
        "></div>


      <div className="lg:pl-11">

            <h1 className="font-[400]  text-[30px] mb-4 tracking-[2px] md:text-[35px] 
                    md:tracking-[4px]   " >PRICING</h1>
              <p className="font-[100] text-[grey] mb-4">
              Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
              It s the simple way to create and share your photos.
              </p>


      </div>
    </div>

    <div 
         className={`bg-pricing-hero-image-mobile md:bg-pricing-hero-image-tablet md:w-[35%]
           md:h-[100%] h-[50vh] lg:w-[60%] lg:bg-pricing-hero-image-desktop  bg-no-repeat bg-cover bg-center  `} >
        {/* Image */}
    </div>
</section>
  )
}
