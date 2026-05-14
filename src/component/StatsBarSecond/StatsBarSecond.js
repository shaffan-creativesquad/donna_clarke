import React from 'react'
import "./StatsBarSecond.css"

function StatsBarSecond() {

    const data=[
        {
            title:"Structure",
            content:"Precedes Success"
        },
        {
            title:"Home",
            content:"Is the First Institution"
        },
        {
            title:"Preparation",
            content:"Over Performance"
        },
        {
            title:"Formation",
            content:"Before Visibility"
        },
    ]

  return (
    <div className='StatsBarSecond-container'>
        <div className='container-fluid px-0'>
            <div className='row gx-0'>

                {
                    data.map((ele, index)=>{
                        return(
                            <div key={index} className='col-lg-3 text-center stats-item'>
                                <h3 className='font-playfair color-purple '>{ele?.title}</h3>
                                <p className='font-raleway color-purple body-paragraph text-uppercase fw-semibold'>{ele?.content}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default StatsBarSecond