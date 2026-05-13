import React from 'react'
import DropDownBox from "./DropDownBox"
import "./FaqSection.css"

function FaqSection({  
    heading,
    subHeading,
    showImg=false,
    faqData=[]
}) 
{
    

  return (
    <div className='faq-container py-lg-2 py-5 '>
        <div className='text-content d-flex flex-column align-items-center w-75 mx-auto'>
            <h3 className='body-heading main-title'>{heading}</h3>
            
        </div>
        <div className='dropdown-container row mt-lg-2 mt-4'>
            {
                faqData.map((ele)=>{
                    return(
                        <div className='col-xl-6'>
                            <DropDownBox title={ele.title} content={ele.content} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FaqSection