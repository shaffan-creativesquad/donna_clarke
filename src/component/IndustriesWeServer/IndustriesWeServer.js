import React from 'react'
import "./IndustriesWeServer.css"

const industriesList = [
    {
        icons:"/images/icons/our-values-icon-1.svg",
        content:"decorative walls",
        para:"Offer manufacturers a way to expand <b>interior design sales in Ontario</b> through unique wall solutions."
    },
    {
        icons:"/images/icons/our-values-icon-2.svg",
        content:"furniture",
        para:"Represent <b>furniture sales in Ontario</b> to designers, showrooms, and retailers."
    },
    {
        icons:"/images/icons/our-values-icon-3.svg",
        content:"fabrics",
        para:"Connect fabric manufacturers with our network for <b>Ontario B2B sales and retail growth.</b>"
    },
    {
        icons:"/images/icons/our-values-icon-4.svg",
        content:"surfaces",
        para:"Showcase high-quality surfaces to contractors and designers as a <b>trusted Canadian sales partner.</b>"
    },
    {
        icons:"/images/icons/our-values-icon-5.svg",
        content:"décor",
        para:"Provide <b>decor distributor services in Ontario</b> for innovative lighting solutions."
    },
    {
        icons:"/images/icons/our-values-icon-6.svg",
        content:"lighting",
        para:"Expand your <b>manufacturer representation in Ontario</b> for decorative products and home accents."
    },
]

function IndustriesWeServer() {
  return (
    <div className='IndustriesWeServer-container standard-padding-space'>
        <div className='container'>
            <div className='heading-container text-center'>
                <h3 className='body-heading'>Industries We Serve</h3>
            </div>

            <div className='row gy-3 mt-4 align-items-lg-end'>
                {
                    industriesList.map((ele)=>{
                        return(
                            <div className='col-lg-4 text-center'>
                                <img src={ele?.icons} className='img-fluid mb-4' alt='icon' />
                                <h4 className='body-heading' style={{fontSize:"1.5rem"}}>{ele?.content}</h4>
                                <p className='body-paragrap text-center color-dark' dangerouslySetInnerHTML={{__html:ele?.para}}></p>
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    </div>

  )
}

export default IndustriesWeServer