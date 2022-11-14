import { Routes,Route,Navigate } from "react-router-dom";

import { FeaturesPage, HomePage, PricingPage, StoriesPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>    
        <Route path='/' element={ <HomePage/> }  />
        <Route path='/stories' element={ <StoriesPage /> }  />
        <Route path='/features' element={ <FeaturesPage /> }  />
        <Route path='/pricing' element={ <PricingPage /> }  />
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
