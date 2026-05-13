import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

function ThankYou() {
  return (
    <div>
          <Header
            fontDark={true}
        />
        <div className="coming-soon-container">
      <img src="/images/new-logo.svg" alt='logo' className='logo-img mb-2' />
      
      <h1 className="main-title">
        Thank You!
      </h1>
      
      <div className="divider"></div>
      
      <p className="description">
      We have received your request and will contact you soon!
      </p>
    </div>
       <Footer/>
    </div>
  )
}

export default ThankYou