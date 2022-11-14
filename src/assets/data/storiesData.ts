import mountainesDesk from '../stories/desktop/mountains.jpg'
import mountainesMob from '../stories/mobile/mountains.jpg'

import cityscapesDesk from '../stories/desktop/cityscapes.jpg'
import cityscapesmob from '../stories/mobile/cityscapes.jpg'

import voyageDesk from '../stories/desktop/18-days-voyage.jpg'
import voyageMob from '../stories/mobile/18-days-voyage.jpg'

import architecturalsDesk from '../stories/desktop/architecturals.jpg'
import architecturalsMob from '../stories/mobile/architecturals.jpg'

import worlTourDesk from '../stories/desktop/world-tour.jpg'
import worlTourMob from '../stories/mobile/world-tour.jpg'

import unforeseenDesk from '../stories/desktop/unforeseen-corners.jpg'
import unforeseenMob from '../stories/mobile/unforeseen-corners.jpg'

import africaKingDesk from '../stories/desktop/king-on-africa.jpg'
import africaKingMob from '../stories/mobile/king-on-africa.jpg'

import nowhereDesk from '../stories/desktop/trip-to-nowhere.jpg'
import nowhereMob from '../stories/mobile/trip-to-nowhere.jpg'

import reageSeaDesk from '../stories/desktop/rage-of-the-sea.jpg'
import reageSeaMob from '../stories/mobile/rage-of-the-sea.jpg'

import runningDesk from '../stories/desktop/running-free.jpg'
import runningMob from '../stories/mobile/running-free.jpg'

import behindWaveDesk from '../stories/desktop/behind-the-waves.jpg'
import behindWaveDMob from '../stories/mobile/behind-the-waves.jpg'

import calmWatersDesk from '../stories/desktop/calm-waters.jpg'
import calmWatersMob from '../stories/mobile/calm-waters.jpg'

import milkiWayDesk from '../stories/desktop/milky-way.jpg'
import milkiWayMob from '../stories/mobile/milky-way.jpg'

import darkForestDesk from '../stories/desktop/dark-forest.jpg'
import darkForestMob from '../stories/mobile/dark-forest.jpg'

import somwarpetsDesk from '../stories/desktop/somwarpet.jpg'
import somwarpetsMob from '../stories/mobile/somwarpet.jpg'

import landOfDreamsDesk from '../stories/desktop/land-of-dreams.jpg'
import landOfDreamsMob from '../stories/mobile/land-of-dreams.jpg'

export interface ImagesStories{
    id:number,
    date?:string,
    title:string,
    author:string,
    imgDesktop:any;
    imgMobile:string;
    homePage?:boolean

}

const storiesImages:ImagesStories[]=[
    {
        id:0,
        date:'April 16th 2020',
        title:'The Mountains',
        author:'by John Applessed',
        imgDesktop:mountainesDesk,
        imgMobile:mountainesMob,
        homePage:true
    },
    {
        id:1,
        date:'April 14th 2020',
        title:'Sunset cityscapes',
        author:' by Benjamin Crus',
        imgDesktop:cityscapesDesk,
        imgMobile:cityscapesmob,
        homePage:true
    },
    {
        id:2,
        date:'April 11th 2020',
        title:'18 Days Voyage',
        author:' By Alexander Boording',
        imgDesktop:voyageDesk,
        imgMobile:voyageMob,
        homePage:true
    },
    {
        id:3,
        date:'April 9th 2020',
        title:'Architecturals',
        author:' By Samantha Brooke',
        imgDesktop:architecturalsDesk,
        imgMobile:architecturalsMob,
        homePage:true
    },
    {
        id:4,
        date:'April 7th 2020',
        title:'Wolrd Tour 2019',
        author:' By Timothy Wagner',
        imgDesktop:worlTourDesk,
        imgMobile:worlTourMob,
        homePage:false
    },
    {
        id:5,
        date:'April 3d 2020',
        title:'Unforeseen Corners',
        author:' By William Malcom',
        imgDesktop:unforeseenDesk,
        imgMobile:unforeseenMob,
        homePage:false
    },
    {
        id:6,
        date:'March 29th 2020',
        title:'King on Africa: Part II',
        author:' By Tim Hillenburg',
        imgDesktop:africaKingDesk,
        imgMobile:africaKingMob,
        homePage:false
    },
    {
        id:7,
        date:'March 21th 2020',
        title:'The Trip to Nowhere',
        author:' By Felicia Rourke ',
        imgDesktop:nowhereDesk,
        imgMobile:nowhereMob,
        homePage:false
    },
    {
        id:8,
        date:'March 15th 2020',
        title:'Rage of The Sea',
        author:' By Mohammed Abdul ',
        imgDesktop:reageSeaDesk,
        imgMobile:reageSeaMob,
        homePage:false
    },
    {
        id:9,
        date:'March 16th 2020',
        title:'Runnig Free',
        author:' By Michelle ',
        imgDesktop:runningDesk,
        imgMobile:runningMob,
        homePage:false
    },
    {
        id:10,
        date:'March 11th 2020',
        title:'Behind the Waves',
        author:' By Lamarr Wilson ',
        imgDesktop:behindWaveDesk,
        imgMobile:behindWaveDMob,
        homePage:false
    },
    {
        id:11,
        date:'March 9th 2020',
        title:'Calm Waters',
        author:' By Smantha Brooke ',
        imgDesktop:calmWatersDesk,
        imgMobile:calmWatersMob,
        homePage:false
    },
    {
        id:12,
        date:'March 5th 2020',
        title:'The Milky Way',
        author:' By Benjamin Cruz ',
        imgDesktop:milkiWayDesk,
        imgMobile:milkiWayMob,
        homePage:false
    },
    {
        id:13,
        date:'March 4th 2020',
        title:'Night at The Dark Forest',
        author:' By Mohammed Abdul ',
        imgDesktop:darkForestDesk,
        imgMobile:darkForestMob,
        homePage:false
    },
    {
        id:14,
        date:'March 1th 2020',
        title:'Somwarpets Beauty',
        author:' By Michelle ',
        imgDesktop:somwarpetsDesk,
        imgMobile:somwarpetsMob,
        homePage:false
    },
    {
        id:15,
        date:'March 25th 2020',
        title:'Land of Dreams',
        author:' By William Malcolm ',
        imgDesktop:landOfDreamsDesk,
        imgMobile:landOfDreamsMob,
        homePage:false
    },

]




export default storiesImages;