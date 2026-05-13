import React from 'react'
import "./StageSection.css"

function StageSection() {


    const contentBox = [
    {
        number:"Keynote Address",
        title:"The Champion Your Child Is Already Becoming",
        content:"For corporate events, sports conferences, and educational institutions. DC's signature keynote on the intersection of sport, character, and leadership development. 45–60 minutes. Standing ovation rate: consistent.",
        goldPara:`Enquire for speaking fee`
    },
    {
        number:"Parent Workshop",
        title:"Nobody Told Me: The Sports Parent Masterclass",
        content:"Full-day workshop for sports families. Everything DC knows about being the environment in which an athlete either thrives or survives. Practical, honest, deeply personal.",
        goldPara:`$349 per parent · 80-person maximum`
    },
    {
        number:"Corporate Event",
        title:"What the Start Line Teaches the Boardroom",
        content:"DC's corporate keynote on performance under pressure, the discipline of preparation, and the leadership qualities that Olympic-level competition develops. For senior leadership teams and executives.",
        goldPara:`Enquire for corporate fee`
    },
   
]

  return (
    <div className='StageSection-container standard-padding-space' id='speaking'>
        <div className='my-lg-5'>
            <div className='container'>
                <div className='row align-items-lg-end'>
                    <div className='col-lg-6'>
                        <h3 className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-3'>On the Stage</h3>
                        <h2 className='body-heading'>Donna speaks. <br/> <span className='body-heading color-purple fst-italic'>Rooms change.</span></h2>
                        <p className='body-paragraph'>A 1984 Olympic heptathlete who raised a major league baseball player does not deliver motivational keynotes. Donna Clarke delivers transformative ones. The room that DC speaks to does not leave with a list of action items. It leaves with a different understanding of what sport, family, and achievement actually are.</p>
                    </div>
                   
                </div>

                <div className='row winsdom-container mt-lg-5 mt-4 px-lg-0 px-3'>
                    {
                        contentBox.map(ele=>{
                            return(
                                <div className='col-lg-4 gy-1 px-0'>
                                    <div className='wisdom-content-box p-5 pt-5 pb-4 h-100'>
                                        <h3 className='sub-heading sub-heading-line color-gold'>{ele?.number}</h3>
                                        <h4 className='title font-moda color-dark my-3'>{ele?.title}</h4>
                                        <p className='body-paragraph'>{ele?.content}</p>
                                        <p className=' font-moda box-italic color-purple'>{ele?.goldPara}</p>
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

export default StageSection