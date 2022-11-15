import checkSvg from "../../assets/pricing/desktop/check.svg";



export const PricingTableCompare = () => {
  return (

    <>
      <h5 className="hidden md:block md:text-center md:text-[40px] " >COMPARE</h5>

    <div className="grid grid-cols-2 p-5  pb-20 md:grid-cols-5  lg:px-96 " >

      {/* Table header  */}
      <div className="col-span-2 flex justify-between border-b-[1px] border-[black] pb-5 md:col-span-5
          mg:grid-cols-5
      " >
        <h6 className="mt-10  md:mt-0"  >THE FEATURES</h6>  
        <div className=" opacity-0 invisible md:opacity-100 md:visible md:flex md:gap-x-24
            md:col-span-3 md:pr-3
        " >
          <div className="md:mr-5" >Basic</div>
          <div>Pro</div>
          <div>Business</div>
        </div>
      </div>

      {/* Table body  */}
      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >UNLIMITED STORY POSTING</h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden  " >Basic</span>  <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span> <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>

      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >UNLIMITED PHOTO UPLOAD</h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden  " >Basic</span>  <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span> <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>

      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >EMBEDDING CUSTOM CONTENT</h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span> <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>

      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >CUSTOMIZE METADATA </h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span> <img src={ checkSvg } alt="" />  </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>


      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >ADVANCED METRICS </h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span>   </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>

      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >PHOTO DOWNLOADS </h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span>   </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>


      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >SEARCH ENGINE INDEXING </h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span>   </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>

      <div className="col-span-2 pt-5 md:col-span-5 md:flex md:justify-between border-b-2 border-light-grey " >
        <h6 className="pb-5" >CUSTOM ANALYTICS </h6>  
        <div className="flex justify-between	md:gap-x-36  md:pr-5 pb-2 " >
          <div> <span className="text-[grey] md:hidden   " >Basic</span>    </div>
          <div> <span className="text-[grey] md:hidden " >Pro</span>   </div>
          <div> <span className="text-[grey] md:hidden " >Busciness</span>  <img src={ checkSvg } alt="" /> </div>
        </div>
      </div>


    </div>
    </>
  )
}
