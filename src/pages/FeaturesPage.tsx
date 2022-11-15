import { BgBeta } from "../components"
import { FeaturesHero,FeaturesGrid } from "../components/featuresComponents"

export const FeaturesPage = () => {
  return (
   <>
     <FeaturesHero />

    <FeaturesGrid inHomePage={ false }/>
    
    <BgBeta />

   </>
  )
}
