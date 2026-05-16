// import AboutHeroSection from "../Section/AboutPage/AboutHeroSection";
// import AboutIntroSection from "../Section/AboutPage/AboutIntroSection";
// import ValuesSection from "../Section/AboutPage/ValuesSection";
// import GrowthSection from "../Section/AboutPage/GrowthSection";
// import CuratedSolutionsSection from "../Section/AboutPage/CuratedSolutionsSection";
// import LeadershipSection from "../Section/AboutPage/LeadershipSection";

// const AboutPage = () => {
//   return (
//     <div className="bg-black">
//       <AboutHeroSection />
//       <AboutIntroSection />
//       <ValuesSection />
//       <GrowthSection />
//       <CuratedSolutionsSection />
//       <LeadershipSection />
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react'
import AboutHeroSection from "../Section/AboutPage/AboutHeroSection";
import AboutIntroSection from "../Section/AboutPage/AboutIntroSection";
import ValuesSection from "../Section/AboutPage/ValuesSection";
import GrowthSection from "../Section/AboutPage/GrowthSection";
import CuratedSolutionsSection from "../Section/AboutPage/CuratedSolutionsSection";
import LeadershipSection from "../Section/AboutPage/LeadershipSection";
import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout>
      <div>
        <AboutHeroSection />
        <AboutIntroSection />
        <ValuesSection />
        <GrowthSection />
        <CuratedSolutionsSection />
        <LeadershipSection />
      </div>
    </Layout>
  )
}

export default AboutPage