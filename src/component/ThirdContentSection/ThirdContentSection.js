import React from 'react'
import "./ThirdContentSection.css"

function ThirdContentSection() {
  return (
    <div className='ThirdContentSection-container standard-padding-space my-lg-5' id='about'>
        <div className='container'>
            <div className='row gy-lg-0 gy-5'>
                <div className='col-lg-6'>
                    <h3 className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-3'>About DC</h3>
                    <h2 className='body-heading'>Olympian.<br/>Author.<br/>Life architect.</h2>
                    <p className={`body-paragraph font-moda italicContent`} >
                      "I stood on the track at the 1984 Los Angeles Olympics — a Canadian heptathlete competing across seven events — and understood something most coaches never say out loud: what you build in pursuit of the result matters infinitely more than the result itself."
                    </p>

                    <p className='body-paragraph'>
                        Donna Clarke is one of Canada's most respected athlete-mothers — a heptathlete who competed for Canada at the 1984 Los Angeles Olympic Games, where the heptathlon demands mastery across seven events: hurdles, high jump, shot put, 200 metres, long jump, javelin, and 800 metres. Seven disciplines. One complete human athlete. The heptathlon does not reward the specialist. It rewards the whole person.
                        <br/>
                        <br/>
                        She raised two extraordinary souls in Pickering, Ontario. Her son Denzel Clarke — #1, center fielder for the MLB's Oakland Athletics — made his major league debut on May 23, 2025, and hit his first career home run against his hometown Toronto Blue Jays at Rogers Centre on May 31. He is already considered one of the finest defensive outfielders in baseball. Donna raised him with the same philosophy she brought to her own Olympic preparation: excellence is whole-person work.
                        <br/>
                        <br/>
                        Today Donna Clarke is a speaker, author, educator, and the founder of the Athlos Collective — the world she built for athletic families who refuse to separate sport from the rest of life. But this space is something else entirely. This is Donna. Her kitchen table in Pickering. Her 5:30am training. Her wisdom earned across seven Olympic events and two lifetimes of raising champions.
                    </p>

                    <div className='row g-1'>
                        <div className='col-lg-6 px-lg-1'>
                        <div className=' bottom-box p-3 '>
                            <h5 className='font-moda color-gold'>'84</h5>
                            <p className='sub-heading'>Los Angeles Olympics · Heptathlete · Canada</p>
                        </div>

                        </div>
                        <div className='col-lg-6 bottom-box p-3'>
                            <h5 className='font-moda color-gold'>M.Sc</h5>
                            <p className='sub-heading'>High Performance Coaching</p>
                        </div>
                        
                        <div className='col-lg-6 px-lg-1'>
                            <div className='bottom-box p-3'>
                                <h5 className='font-moda color-gold'>Chef</h5>
                                <p className='sub-heading'>Culinary School Graduate</p>
                            </div>
                        </div>
                        <div className='col-lg-6 bottom-box p-3'>
                            <h5 className='font-moda color-gold'>MLB</h5>
                            <p className='sub-heading'>Denzel Clarke #1 · Athletics CF · 2025 Debut</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-6 ps-lg-5'>
                     <div  className={`ImageBox d-flex p-4`}>
                        <p className={`body-paragraph font-moda qouteContent mt-auto p-4 mb-0`} >
                          <span className="">On Donna Clarke</span>
                          <br/>
                          "She competed across seven events for Canada at the 1984 Olympics. She then raised a son who plays center field in the major leagues. She does not consider either of these her greatest achievement."
                        </p>

                    </div>
                        <p className={`body-paragraph font-moda italicContent bg-purple color-light p-4 mb-0 mt-1`} >
                            "I competed in seven events at the 1984 Olympics. Denzel now covers center field in the major leagues. Neither of us became what we are because someone made us better athletes. We became what we are because someone showed us <span className='color-gold'>what the work is actually for.</span>"
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdContentSection