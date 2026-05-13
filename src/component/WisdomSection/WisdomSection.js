import React from 'react'
import "./WisdomSection.css"

const contentBox = [
    {
        number:"01",
        title:"On the body",
        content:"Your body is not your instrument. It is you. The athlete who trains their body as a separate concern from their mind trains half a person. DC lifts at 5:30am not for performance — for integration.",
        goldPara:`"Feed it like it is sacred. Rest it like it is precious. Train it like it is capable of more than you have yet imagined."`
    },
    {
        number:"02",
        title:"On raising athletes",
        content:"You are not raising an athlete. You are raising a person who uses sport as the training ground for every other domain of life. The most important thing you can do as a sports parent has nothing to do with sport.",
        goldPara:'"What you say in the car on the way home matters more than what any coach says in any session. Learn what to say."'
    },
    {
        number:"03",
        title:"On food and performance",
        content:"DC went to culinary school because she watched talented athletes hit ceilings that were nutritional, not physical. Food is not comfort. Food is not reward. Food is infrastructure. What you eat is part of the training.",
        goldPara:`"The Champion's Table was built for the athlete who understands that the kitchen is the second training room."`
    },
    {
        number:"04",
        title:"On character",
        content:"Character is not a natural quality — it is a skill. It must be built the same way every other skill is built: deliberately, consistently, over time, with a coach who understands what they are developing and why.",
        goldPara:`"The athlete who only knows how to win does not know who they are. I coach both."`
    },
    {
        number:"05",
        title:"On women and strength",
        content:"The fitness industry spent decades telling women to be smaller. DC lifts because she has always understood the difference between shrinking and building. The Iron Kingdom was built for the women who have always known the difference too.",
        goldPara:`"I do not train to be less. I train to be more. Every woman who walks into the Iron Kingdom already knows what I mean."`
    },
    {
        number:"06",
        title:"On the long game",
        content:"The window between 8 and 18 is not a performance window. It is a human formation window. Every year that passes without intentional development is a year that cannot be recovered. The urgency is real. And it is kind.",
        goldPara:`"The athletes who are 8 years old today will run the next generation. The work starts now."`
    },
]

function WisdomSection() {
  return (
    <div className='WisdomSection-container standard-padding-space' id='wisdom'>
        <div className='my-lg-5'>
            <div className='container'>
                <div className='row align-items-lg-end'>
                    <div className='col-lg-6'>
                        <h3 className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-3'>DC's Wisdom</h3>
                        <h2 className='body-heading'>What twenty years of elite sport taught me about everything else.</h2>
                        <p className='body-paragraph'>DC does not dispense motivation. She dispenses truth — earned truth, lived truth, the kind of understanding that only arrives after you have stood on enough start lines, driven enough early morning commutes, and sat across enough kitchen tables from families trying to figure this out.</p>
                    </div>
                    <div className='col-lg-6 ps-lg-5'>
                         <p className={`body-paragraph font-moda italicContent ps-4`} >
                            "The heptathlon demanded seven disciplines from me. I gave it seven. What it gave back was a person who understood that excellence is never one thing. Denzel understood this before I told him. He covers center field the same way I competed — as if every dimension of the person matters equally."
                        </p>
                    </div>
                </div>

                <div className='row winsdom-container mt-5 px-lg-0 px-3'>
                    {
                        contentBox.map(ele=>{
                            return(
                                <div className='col-lg-4 gy-1 px-0'>
                                    <div className='wisdom-content-box p-lg-5 py-4 px-lg-5 px-4 h-100'>
                                        <h3 className='number font-moda body-heading'>{ele?.number}</h3>
                                        <h3 className='title font-moda color-dark'>{ele?.title}</h3>
                                        <p className='body-paragraph'>{ele?.content}</p>
                                        <p className='sub-heading color-gold font-moda box-italic'>{ele?.goldPara}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    </div>
  )
}

export default WisdomSection