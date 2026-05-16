import React from 'react'
import HeroSection from '../Section/LandingPage/HeroSection'
import Layout from '../components/Layout'
import AboutSection from '../Section/LandingPage/AboutSection'
import FinancingSection from '../Section/LandingPage/FinancingSection'
import GrowthSection from '../Section/LandingPage/SupportWealthSection'
import CuratedSolutionsSection from '../Section/LandingPage/CuratedSolutionsSection'
import SectionZoom from '../components/SectionZoom'
import Arvestadesign from '../Section/LandingPage/Arvestadesign'

function LandingPage() {
  return (
    <Layout>

      {/* <SectionZoom> */}
        <HeroSection />
      {/* </SectionZoom> */}

      {/* <SectionZoom> */}
        <AboutSection />
      {/* </SectionZoom> */}

      {/* <SectionZoom> */}
        <FinancingSection />
      {/* </SectionZoom> */}

      <Arvestadesign/>

      {/* <SectionZoom> */}
        {/* <GrowthSection /> */}
      {/* </SectionZoom> */}



      <CuratedSolutionsSection />



    </Layout>
  );
}


export default LandingPage