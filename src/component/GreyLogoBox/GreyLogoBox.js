import React from 'react'
import "./GreyLogoBox.css"

function GreyLogoBox({
    logoImgList=null,
    noMarginTop=false,
    noYPadding=false
}) {
  return (
    <div className={`GreyLogoBox-container ${noMarginTop ?"mb-5":"my-5"}`}>
        <div className={`w-100 grey-slide d-flex flex-lg-row flex-column align-items-center gap-4 justify-content-center ${noYPadding?"py-0":"py-3"}`}>
            {
                logoImgList?.map((ele)=>{
                    return(
                        <img src={ele} alt='logo' className='img-fluid' />
                    )
                })
            }
        </div>
    </div>
  )
}

export default GreyLogoBox