import { useState } from 'react';

import { PricingCards, PricingHero, PricingTableCompare, SwitchPricing } from "../components/pricingComponents"

export const PricingPage = () => {

  const [changePricing, setChangePricing] = useState( true )

  const handleChangePricing = () =>setChangePricing( !changePricing )

  return (
    <>
      <PricingHero />

      <SwitchPricing priceState={ changePricing } changeState={ handleChangePricing } />

      <PricingCards priceState={ changePricing} />

      <PricingTableCompare />
    
    </>
  )
}
