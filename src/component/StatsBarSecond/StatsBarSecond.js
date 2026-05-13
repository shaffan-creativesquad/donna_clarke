import React from 'react'
import "./StatsBarSecond.css"

function StatsBarSecond() {

    const data=[
        {
            title:"1984",
            content:"Olympic Legacy · Los Angeles"
        },
        {
            title:"M.Sc",
            content:"High Performance Coaching"
        },
        {
            title:"8–18",
            content:"The Formation Window"
        },
        {
            title:"MLB",
            content:"Denzel Clarke · Oakland Athletics"
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