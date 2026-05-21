import React from 'react'
import Hero from '../component/HomeHero_/Hero'
import Footer from '../component/Footer/Footer'
import { Helmet } from 'react-helmet'
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


    </div>
  )
}

export default Home