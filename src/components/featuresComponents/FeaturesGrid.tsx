
import responsiveSvg from "../../assets/features/desktop/responsive.svg";
import noLimitSvg from "../../assets/features/desktop/no-limit.svg";
import embedSvg from "../../assets/features/desktop/embed.svg";
import customDomainSvg from "../../assets/features/desktop/custom-domain.svg";
import boostExposureSvg from "../../assets/features/desktop/boost-exposure.svg";
import dragAndDropSvg from "../../assets/features/desktop/drag-drop.svg";




interface Props{
    inHomePage?:boolean
}

export const FeaturesGrid = ({ inHomePage=false }:Props) => {
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-10  py-10 px-20 lg:px-24  w-full text-center " >
        <div className=' lg:px-14 '>
                <img className="m-auto" src={ responsiveSvg } alt="" />
            <h5>100% Responsive</h5>
            <p>No matter which the device you re on, our site is fully
                 responsive and stories look beautiful on any scree</p>
        </div>
        <div className=' lg:px-14 '>
                <img className="m-auto" src={ noLimitSvg } alt="" />
            <h5 className="pt-7">No Photo Upload Limit</h5>
            <p className="" >Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. </p>
        </div>
        <div className=' lg:px-14 '>
                <img className="m-auto" src={ embedSvg } alt="" />
            <h5>Available to Embed</h5>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
        </div>
        <div className={ ` lg:px-14 ${inHomePage ?'hidden':'block'}`}>
                <img className="m-auto" src={ customDomainSvg } alt="" />
            <h5>Custom Domain </h5>
            <p> With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! </p>
        </div>
        <div className={ ` lg:px-14 ${inHomePage ?'hidden':'block'}`}>
                <img className="m-auto" src={ boostExposureSvg } alt="" />
            <h5>Boost Your Exposure </h5>
            <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
        </div>
        <div className={ ` lg:px-14 ${inHomePage ?'hidden':'block'}`}>
                <img className="m-auto" src={ dragAndDropSvg } alt="" />
            <h5>Drag & Drop Image </h5>
            <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
        </div>

    </section>
  )
}
