import React from 'react'
import Header from '../Header/Header'

function PlainHero({
    Heading="",
    fontDark=false,
    date=null
}) {
  return (
    <div className='PlainHero-container'>
        <div className='container'>
            <Header
                fontDark={fontDark}
            />

            <div className='py-5 '>
                <h3 className='color-dark hero-section-heading text-center my-5'>{Heading}</h3>
                {date && <p className='color-dark body-paragraph text-center'>{date}</p>}
            </div>

        </div>

    </div>
  )
}

export default PlainHero