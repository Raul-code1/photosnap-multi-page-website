
import { ImagesStories } from '../assets/data/storiesData';
import { ArrowWhite } from './ArrowWhite';
import { Link } from 'react-router-dom';


interface Props  extends ImagesStories{
    hiddenDate:boolean;
}

export const StoriesImageCard = ({ date,title,author,imgDesktop,imgMobile,homePage,hiddenDate }:Props) => {

  
  return (
    <div className="relative bg-[aqua]   h-[60vh]  hover:translate-y-[-35px] transition-all duration-500  w-full
            hover:border-b-[6px] hover:border-gradient-color-2
    ">
            <img  className="h-[100%] w-full md:hidden "  src={imgMobile} alt="" />
            <img  className="h-[100%] w-full hidden md:block "  src={ imgDesktop} alt="" />

            <div className='text-[white] absolute w-[80%] bottom-[30px]  left-[30px]' >
                {
                    (hiddenDate) && <h3>{ date }</h3>
                }

               <h4 className='font-[700] text-[20px] '  > { title }</h4>
                <p className='text-[100]' >{ author }</p>
                <br />
                <hr style={{ color:'white' }} />
                <br />
                <Link to='/stories' className='flex items-center justify-between' >READ STORY <ArrowWhite /> </Link >
                
            </div>

        </div>
  )
}
