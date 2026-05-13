import React from 'react'
import "./TextContent.css"
import { useNavigate } from 'react-router-dom';
import DropDownContainer from './DropDownContainer';

function TextContent({
  heading,
  headingH1=false,
  nextLineHeading="",
  subHeading="",
  subPara="",
  subHeadingLine=true,
  postSubHeading="",
  postHeading="",
  postContent="",
  content="",
  btn=false,
  btnRefTel=false,
  btnText,
  btnRef="/",
  shiftRow=false,
  img,
  reviewContent= false,
  review,
  reviewUser,
  userImg,
  mobileTextCenter=true,
  btnImg=false,
  dropDown=false,
  dropDownList=[],
  bulletList=false,
  bulletListData=[],
  customList=false,
  customListData=[],
  btnEnd=false,
  btnEndTel=false,
  fontDark=true,
  lineBetween=false,
  txtAnchor=false,
  reduceBottomSpace=false,
  contentAlignStart=false,
  lazerPictureText=false,
  lazerContent=false,
  lazerContentFirst=false,
  servicesContentPadding=true,
  pdfLink=null,

}) {
  const paragraphs = content.split('\n').map((paragraph, index) => <p key={index} className={`body-paragraph my-1 mb-3 ${fontDark ? "color-dark":"color-light"}`}>{paragraph}</p>);
  const navigate = useNavigate()
  return (
    <div 
      className='text-content-section '
      style={{background:`${fontDark ? "transparent":"black"}`}}
    >
  
      <div className={`${!fontDark && "right-gradient-bottom "} `}>
      <div className={`${!fontDark && "left-gradient-upper "}  ${reduceBottomSpace?"pt-4":"py-4"} ${servicesContentPadding&& "removeTOpPading"}`}>
      <div className={`container ${reduceBottomSpace?"mt-4 mt-xl-4 ":"my-4 my-xl-4 "} `}>
        <div className={`row d-flex ${shiftRow && "flex-row-reverse"} ${contentAlignStart?"align-items-lg-start align-items-center":"align-items-center"}  gy-2`} >
          <div className={`col-lg-6 p-2 px-3 px-lg-2 d-flex flex-column text-center align-items-center justify-content-center ${shiftRow ? "justify-content-lg-end" : "justify-content-lg-start"}`}>
            <img src={img} className='img-fluid' alt='content' loading='lazy'/>
            {lazerPictureText && <h3 className='body-heading' style={{fontWeight:"bold",fontStyle:"italic",fontSize:"1.8rem", color:"#14609C"}}> {lazerContentFirst? "Bioflex Professional Laser System" :"Used By Professional Sports Teams"}</h3>}
          </div>
          <div className={`col-lg-6 ${servicesContentPadding && "pb-lg-5"}`}>
            <div className={`text-content ${mobileTextCenter && "text-center text-lg-start"} px-3 ${lineBetween && "leftBorderedContainer ps-lg-4 ps-0"} ${servicesContentPadding && "pb-lg-5"}`}>
              {subHeading && <p className={`sub-heading mb-0 justify-content-lg-start justify-content-center d-flex align-items-center gap-lg-4 gap-3 ${fontDark ? "color-dark":"color-light"}`}>{subHeadingLine &&<div style={{height:"0",width:"50px",borderTop:`1px solid ${fontDark ? "#252525":"white"}`,margin:"auto 0" }}></div>}{subHeading}</p>}
              {subPara && 
                <div className='d-flex align-items-center justify-content-lg-start justify-content-center gap-3'>
                  <p className='body-paragraph mb-0'>{subPara}</p> 
                  <img src="/images/icons/post-sub-para-icon.png" alt='arrow icon' style={{height:"20px"}}/>
                </div>
              }
              {/* <div className='paddLeft'> */}
              <div className='paddLef'>
                {
                  headingH1 ?
                  <h1 className={`body-heading my-4 ${fontDark ? "color-dark":"color-light"}`}>{heading}<br></br>{nextLineHeading && nextLineHeading}</h1>
                    :
                    <>
                      {
                        heading?
                        <h3 className={`body-heading my-4 ${fontDark ? "color-dark":"color-light"}`}>{heading}<br></br>{nextLineHeading && nextLineHeading}</h3>
                        :
                        <></>
                      }
                    </>
                }
                <p className={`sub-heading mb-3 mb-xxl-4 ${fontDark ? "color-dark":"color-light"}`}>{postSubHeading}</p>
                <div className={`${fontDark ? "color-dark":"color-light"}`}>{paragraphs}</div>
                <h4 className={` mt-3 my-xl-2 mt-xl-4 ${fontDark ? "color-dark":"color-light"}`} style={{fontWeight:"bold"}}>{postHeading}</h4>
                <p className={`body-paragraph my-1 mb-3 ${fontDark ? "color-dark":"color-light"}`}>{postContent}</p>
                

                {
                  btnRefTel ?
                  (
                    <a href='tel:' style={{textDecoration:"none"}}>
                      {btn && <button className={`${fontDark ? "genral-btn":"genral-btn"} mt-4 mt-xl-5 d-flex align-items-center gap-2 mx-auto mx-lg-0`}>{btnText}</button>}
                    </a>
                  ):
                  (
                    <>
                    {
                      txtAnchor?

                       <p className={`anchor-text mt-3 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</p>
                      :
                      <>
                        {btn && <button className={`${fontDark ? "genral-btn":"genral-btn"} mt-4 mt-xl-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</button>}
                      </>
                    }
                    </>
                  )
                }
              </div>
              {
                reviewContent &&
                <>
                  <div className='line-seprator my-2 mt-4'></div>
                  <div className='d-flex align-items-start gap-3 pt-4'>
                    <img src={userImg} alt='user' loading='lazy'/>
                    <div className='my-3'>
                      <p className='body-paragraph mb-1'>{review}</p>
                      <p className='body-paragraph mb-0'>{reviewUser}</p>
                    </div>
                  </div>
                  <button className='text-btn mt-3' onClick={()=>{navigate("/about")}}>ABOUT US</button>
                </>
              }
              {
                dropDown &&
                <>
                  {
                    dropDownList.map((ele,ind)=>{
                      return(
                        <>
                        <DropDownContainer
                          title={ele.title}
                          content={ele.content}
                        />
                        {ind < dropDownList.length-1 ? <div className='line-seprator'></div>:<></>}
                        </>
                      )
                    })
                  }
                </>
              }
              {
                bulletList &&
                <ul className='bulletList-container'>
                  {
                    bulletListData.map((ele,ind)=>{
                      return(
                          <li><p className='body-paragraph'>{ele}</p></li>
                      )
                    })
                  }
                </ul>
              }
              {
                customList &&
                <div className='bulletList-containe'>
                  {
                    customListData.map((ele,ind)=>{
                      return(
                          <div ><div dangerouslySetInnerHTML={{__html : ele}}></div></div>
                      )
                    })
                  }
                </div>
              }
              {
                btnEnd &&
                <button className={`${fontDark ? "genral-btn":"genral-btn"} mt-4 mt-xl-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{navigate(btnRef)}}>{btnText}</button>

              }
              {
                btnEndTel &&
                <div className='d-flex align-items-center justify-content-lg-start justify-content-center flex-lg-row flex-column gap-3'>

                  {
                    pdfLink &&
                  <button className={`${fontDark ? "genral-btn":"genral-btn"} mt-4 mt-xl-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{window.open(pdfLink,"_blank")}}>View More</button>
                  }
                  <button className={`${fontDark ? "genral-btn":"genral-btn"} mt-4 mt-xl-4 d-flex align-items-center gap-2 mx-auto mx-lg-0`} onClick={()=>{window.open("tel:647-367-0067")}}>{btnText}</button>
                </div>
              }
            </div>

           
          </div>
        </div>

        {
          lazerContent &&
              <div className='lazer-text-section text-center mt-4' >
                    <h2 className='body-heading mb-5'>Physiological & Clinical Effects of Laser Therapy</h2>
                    <img src='/images/creatives/lazer-content-img.png' alt='content diagram' className='img-fluid '  />
              </div>
              }
      </div>
      </div>
      </div>

      
    </div>
  )
}

export default TextContent