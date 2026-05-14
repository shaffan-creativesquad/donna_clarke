import React from 'react'
import Hero from '../component/HomeHero_/Hero'
import Footer from '../component/Footer/Footer'
// import { Helmet } from 'react-helmet'
// import AsSeenIn from '../component/AsSeenIn/AsSeenIn'
// import ThirdContentSection from '../component/ThirdContentSection/ThirdContentSection'
// import StripSection from '../component/StripSection/StripSection'
// import CategorySection from '../component/CategorySection/CategorySection'
// import WisdomSection from '../component/WisdomSection/WisdomSection'
// import SubscribeLetter from '../component/SubscribeLetter/SubscribeLetter'
// import KitchenSection from '../component/KitchenSection/KitchenSection'
// import StageSection from '../component/StageSection/StageSection'
// import WorldSection from '../component/WorldSection/WorldSection'
// import BeautifulSoulsSection from '../component/BeautifulSoulsSection/BeautifulSoulsSection'
// import InstagramSection from '../component/InstagramSection/InstagramSection'
import StatsBarSecond from '../component/StatsBarSecond/StatsBarSecond'
import StorySection from '../component/StorySection/StorySection'
import ThreeWorldsSection from '../component/ThreeWorldsSection/ThreeWorldsSection'
import CompaniesFindDonna from '../component/CompaniesFindDonna/CompaniesFindDonna'
import AboutDonna from '../component/AboutDonna/AboutDonna'
import ProofOfConcept from '../component/ProofOfConcept/ProofOfConcept'
import SixCredentials from '../component/SixCredentials/SixCredentials'
import WhatFamiliesSay from '../component/WhatFamiliesSay/WhatFamiliesSay'


function Home() {
  return (
    <div className='' style={{backgroundColor:"#FDF9F4"}}>
      
    <Hero/>

    <StatsBarSecond/>

    <StorySection/>

    <ThreeWorldsSection/>


    <AboutDonna/>

    <ProofOfConcept/>

    <SixCredentials/>

    <WhatFamiliesSay/>
    <CompaniesFindDonna/>

   <Footer/>
    {/* <AsSeenIn/> */}


    {/* <ThirdContentSection/> */}

    {/* <StripSection/> */}

    {/* <CategorySection/> */}

    {/* <WisdomSection/> */}

    {/* <SubscribeLetter/> */}

    {/* <KitchenSection/> */}

    {/* <StageSection/> */}

    {/* <WorldSection/> */}

    {/* <BeautifulSoulsSection/> */}

    {/* <InstagramSection/> */}

    </div>
  )
}

export default Home