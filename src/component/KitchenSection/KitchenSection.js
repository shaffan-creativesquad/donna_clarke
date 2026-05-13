import React from 'react'
import "./KitchenSection.css"

function KitchenSection() {

   const contentAr = [
  {
    number: "I",
    title: "Competition Week Meals",
    content: "The meals DC ate the week before every major competition. Adapted for families. Explained with the science."
  },
  {
    number: "II",
    title: "Recovery Nutrition",
    content: "What the body needs in the 30 minutes after hard training. DC cooks it. Then explains why each ingredient is there."
  },
  {
    number: "III",
    title: "The Family Table",
    content: "The Sunday meals that raised Jamari. The recipes that became ritual. Performance food that the whole family actually wants to eat."
  },
  {
    number: "IV",
    title: "Growth Phase Eating",
    content: "What young athletes need at ages 8–18. Specifically. With portions, timing, and the reasoning DC teaches in her nutrition curriculum."
  }
];

  return (
    <div className='KitchenSection-container standard-padding-space' id='kitchen'>
        <div className='container my-lg-5 '>
            <div className='row gy-lg-0 gy-5'>

<div className='col-lg-6'>
                    <div className='box p-lg-5 p-4' >
                        <h3 className='sub-heading sub-heading-line color-gold'>The Champion's Table</h3>
                        <h2 className='font-moda color-dark fst-italic box-main-heading mt-4'>The Cookbook</h2>
                        <p className='body-paragraph'>100 performance recipes · Written by DC · Available November 2026</p>


                        {
                            contentAr.map((ele)=>{
                                return(
                                    <div className='content-box d-flex align-items-start gap-4 p-4 mt-2'>
                                        <h2 className='font-moda color-gold fst-italic'>{ele?.number}</h2>
                                        <div className=''>
                                            <h3 className='font-moda color-dark fst-italic'>{ele?.title}</h3>
                                            <p className='body-paragraph'>{ele?.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <button className='genral-btn mt-4'>Pre-order the Cookbook</button>
                    </div>

                </div>

                <div className='col-lg-6 ps-lg-5'>
                    <h3 className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-3'>In the Kitchen</h3>
                    <h2 className='body-heading'>Food is not fuel. Food is formation.</h2>
                    <p className={`body-paragraph font-moda italicContent fst-italic`} >
                      "I went to culinary school because I could not find anyone who understood both the science of performance nutrition and the art of a meal that actually tastes like something."
                    </p>

                    <p className='body-paragraph'>
                       Donna's relationship with food began where most athlete relationships with food begin — as a means to an end, fuel for training, calories to count. It ended, after culinary school and twenty years of cooking for her family and her athletes, as something entirely different: an act of care, a practice of presence, and the most direct expression of love she has in her vocabulary.
                    <br/>
                    <br/>
                        Every recipe on this site, in the cookbook, and in the Champion's Table kingdom was written with one question: what does this athlete — this specific athlete, at this specific age, in this specific training phase — actually need? Donna has asked that question for every athlete she has ever coached. She asked it at the kitchen table in Pickering, Ontario, long before she asked it in any training facility. And then DC asked a second question: does it taste extraordinary? If the answer to either question was no, the recipe was not ready.        
                    </p>

                    <h2 className='font-moda fst-italic color-purple mt-4 dc-name'>Donna Clarke</h2>

                </div>

            </div>

        </div>

    </div>
  )
}

export default KitchenSection