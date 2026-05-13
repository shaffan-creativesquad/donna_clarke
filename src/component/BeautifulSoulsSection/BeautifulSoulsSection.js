import React from 'react'
import "./BeautifulSoulsSection.css"

function BeautifulSoulsSection() {

    const boxData = [
        {
            title:"May 23", 
            content:"MLB Debut · 2025",
        },
        {
            title:"#2", 
            content:"Outfielder OAA · MLB Rookie Season",
        },
        {
            title:"4th", 
            content:"Round · 2021 MLB Draft",
        },
        {
            title:"Pickering", 
            content:"Ontario · Canada",
        },
        
    ]

  return (
    <div className='BeautifulSoulsSection-container standard-padding-space'>
        <div className='container my-lg-5'>
            <div className='row align-items-center gy-lg-0 gy-5'>
                  <div className="col-lg-6">
            <h3 className="sub-heading sub-heading-line color-gold d-flex align-items-center gap-3">
              Two Beautiful Souls
            </h3>
            <h2 className="body-heading color-light fst-italic">
              She raised an <span className="body-heading color-gold fst-italic">Olympian.</span> Then she raised a <span className="body-heading color-gold fst-italic">Major Leaguer.</span>
            </h2>
            <p className="body-paragraph color-para-light my-4">
              Donna Clarke is the mother of two extraordinary children. Her son Denzel Clarke — #1, center fielder for the Oakland Athletics — debuted in the major leagues on May 23, 2025 and immediately became one of the most celebrated defensive outfielders in baseball.
                <br/>
                <br/>
            On May 31, Denzel hit his first career home run against his hometown Toronto Blue Jays at Rogers Centre. Donna was watching. She has always been watching — from Pickering to Los Angeles to every minor league field in between to the major leagues.
            </p>

              <p className={`body-paragraph font-moda qoute-text color-light ps-4`} >
                  "I did not raise an athlete. I raised a person who uses sport to reveal who they already are. Denzel has always known who he is. My job was simply to make sure the world did not talk him out of it."
                  <br/>
                  <span className='sub-heading sub-heading-line color-gold font-raleway'>Donna Clarke</span>
                </p>
          </div>

          <div className='col-lg-6 ps-lg-5'>
            <div className='right-content-box'>
                <div style={{position:"absolute",top:"-1px",left:"32px",right:"32px",height:"2px",background:"linear-gradient(90deg,transparent,#B8944A,transparent)"}}></div>

                <h3 className='sub-heading color-gold sub-heading-line'>Denzel Clarke · #1 · Center Field</h3>

                <div className='row my-4 gy-1'>
                    {
                        boxData.map((ele)=>{
                            return(
                                <div className='col-lg-6 px-0'>
                                    <div className='box p-3'>
                                        <h3 className='color-gold font-moda fst-italic'>{ele?.title}</h3>
                                        <p className='sub-heading sub-heading-line color-para-light mb-0'>{ele?.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <p className='body-paragraph color-para-light mt-3 mb-0'>Cousins with Josh, Bo, and Myles Naylor · Cal State Northridge · 2021 MLB All-Star Futures Game · Team Canada 2023 & 2026 World Baseball Classic · Considered one of baseball's elite defensive outfielders in his rookie season.</p>
            </div>

          </div>


            </div>
        </div>
    </div>
  )
}

export default BeautifulSoulsSection