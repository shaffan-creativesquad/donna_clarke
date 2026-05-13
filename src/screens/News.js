import React from 'react'
import Footer from '../component/Footer/Footer'
import PlainHero from '../component/PlainHero/PlainHero'
import NewsListNew from '../component/NewsListNew/NewsListNew'

function News() {
  return (
    <>
     
       <PlainHero
            Heading="Blogs"
            fontDark={true}
        />
    
       <NewsListNew/>

    <Footer/>
  
    </>
  )
}

export default News