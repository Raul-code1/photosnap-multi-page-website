import storiesImages from '../assets/data/storiesData';
import { ArrowWhite } from '../components';
import { StoriesImageCard } from '../components/StoriesImageCard';

export const StoriesPage = () => {




  return (
    <div>

      <div className='relative  '>
        <section className='h-[50vh] bg-stories-hero-image-mobile md:bg-stories-hero-image-tablet 
        lg:bg-stories-hero-image-desktop   bg-no-repeat bg-cover bg-center md:h-[70vh] lg:h-[80vh] '>

        </section>
        <div className='h-[80vh] bg-[black] text-[white] py-10 px-14 
            md:bg-[transparent] md:absolute md:top-[10%] md:left-1 md:w-[60%] lg:w-[38%] lg:top-[5%]
        '>
            <p className='font-thin text-[12px] pb-4 md:text-[15px] '  >LAST MONTH`S FEATURES STORY</p>
            <h6 className='text-[34px] pb-8 md:text-[45px] ' >HAZY FULL MOON OF APPALACHIA</h6>
            <p className='whitespace-nowrap pb-4 text-[12px] md:text-[15px]	' ><span  className='text-light-grey'>March 2nd 2020</span> by John Aplessed </p>
            <p className='text-[13px] text-light-grey pb-5 md:text-[15px] ' >The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains,"
               especially in eastern Kentucky and West Virginia, and while the ridges are not high,
                the terrain is extremely rugged.</p>
            <div className='flex items-center text-[12px] md:text-[20px] ' > <span className='mr-10 ml-8 md:ml-0 '>READ THE STORY</span> <ArrowWhite /></div >            
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {
          storiesImages.map(img =><StoriesImageCard hiddenDate key={ img.id } { ...img } /> )
        }


      </div>

    </div>
  )
}
