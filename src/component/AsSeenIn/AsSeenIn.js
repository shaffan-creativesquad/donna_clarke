import React from 'react'
import "./AsSeenIn.css"

function AsSeenIn() {
  return (
    <div className='AsSeenIn-container py-4'>
        <div className='container d-lg-flex d-none  flex-lg-row flex-column align-items-center justify-content-between'>
            <p className='color-dark mb-0'>As seen in</p>
            <p className='color-dark mb-0 seen-font font-moda'>CBC</p>
            <p className='color-dark mb-0 seen-font font-moda'>Globe & Mail</p>
            <p className='color-dark mb-0 seen-font font-moda'>Vogue Canada</p>
            <p className='color-dark mb-0 seen-font font-moda'>The Athletic</p>
            <p className='color-dark mb-0 seen-font font-moda'>TSN</p>
            <p className='color-dark mb-0 seen-font font-moda'>Maclean's</p>
            <p className='color-dark mb-0 seen-font font-moda'>Breakfast Television</p>
            <p className='color-dark mb-0 seen-font font-moda'>Canadian Press</p>
            <p className='color-dark mb-0 seen-font font-moda'>Sportsnet</p>
        </div>
        <div className='container d-lg-none d-flex flex-column align-items-center '>
            <p className='color-dark mb-0'>As seen in</p>
            <div className='row'>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>CBC</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Globe & Mail</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Vogue Canada</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>The Athletic</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>TSN</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Maclean's</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Canadian Press</p></div>
            <div className='col-6 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Sportsnet</p></div>
            <div className='col-12 text-center pb-1'><p className='color-dark mb-0 seen-font font-moda'>Breakfast Television</p></div>

            </div>
            
        </div>
    </div>
  )
}

export default AsSeenIn