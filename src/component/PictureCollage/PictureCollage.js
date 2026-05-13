import React from 'react'
import "./PictureCollage.css"

function PictureCollage({
    collageData=null
}) {
  return (
    <div className='PictureCollage-container'>
         <div className='picture-collage-container container-fluid'>
            <div className='row align-items-center g-4 '>
                {
                    collageData && 
                    collageData.map((ele)=>{
                        return(
                            <div className={`${ele?.gridSize} px-3`}>
                            <div className={`ElastronFabric-img-container ${ele?.classes}`} style={{backgroundImage:`url(${ele?.imgSrc})`}}></div>
                            </div>

                        )
                    })
                }
            </div>

        </div>

    </div>
  )
}

export default PictureCollage