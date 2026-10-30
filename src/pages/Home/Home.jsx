import React from 'react'
import SliderSection from '../../components/HomeSections/SliderSection'
import FlashSalesSection from '../../components/HomeSections/FlashSalesSection'
import CategoriesSection from '../../components/HomeSections/CategoriesSection'
import BestSellingSection from '../../components/HomeSections/BestSellingSection'
import MusicBannerSection from '../../components/HomeSections/MusicBannerSection'
import OurProductsSection from '../../components/HomeSections/OurProductsSection'
import NewArrivalSection from '../../components/HomeSections/NewArrivalSection'
import ServicePolicy from '../../components/AboutSections/ServicePolicy'

const Home = () => {
  return (
    <div className='home-page-container'>
      <SliderSection/>
      <FlashSalesSection/>
      <CategoriesSection/>
      <BestSellingSection/>
      <MusicBannerSection/>
      <OurProductsSection/>
      <NewArrivalSection/>
      <ServicePolicy/>
    </div>
  )
}

export default Home