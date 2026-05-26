import React from 'react'
import HeroSection from '../Section/LandingPage/HeroSection'
import Layout from '../components/Layout'
import AboutSection from '../Section/LandingPage/AboutSection'
import FinancingSection from '../Section/LandingPage/FinancingSection'
import GrowthSection from '../Section/LandingPage/SupportWealthSection'
import CuratedSolutionsSection from '../Section/LandingPage/CuratedSolutionsSection'
import SectionZoom from '../components/SectionZoom'
import Arvestadesign from '../Section/LandingPage/Arvestadesign'
import InvestorSection from '../Section/LandingPage/InvestorSection'

function LandingPage() {
  return (
    <Layout>

      {/* <SectionZoom> */}
        <HeroSection />
      {/* </SectionZoom> */}

      <Arvestadesign/>

      <CuratedSolutionsSection />
      {/* <SectionZoom> */}
        <FinancingSection />
      {/* </SectionZoom> */}

      {/* <SectionZoom> */}
        {/* <AboutSection /> */}
      {/* </SectionZoom> */}

      

      

      {/* <SectionZoom> */}
        {/* <GrowthSection /> */}
      {/* </SectionZoom> */}

      <InvestorSection />



    </Layout>
  );
}


export default LandingPage
