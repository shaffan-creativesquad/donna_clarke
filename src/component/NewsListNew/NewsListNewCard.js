import React from 'react'
import "./NewsListNewCard.css"
import { useNavigate } from 'react-router-dom';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

function NewsCard(props) {
  const navigate = useNavigate()
  const title = truncateText(props.title,50)
  // const breifPara = truncateText(props.para,70)
  return (
    <div className="news_card_new pb-3 h-100 " >
      <img src={props.img} className="card_img img-fluid" alt="blog thumbnail" />
      <div className="card_text d-flex flex-column align-items-start py-3 px-3">
      <p className="body-paragraph mb-1" style={{color:"#818181"}}>{props.date}</p>
      <div className="line-seprator my-3"></div>
        <h4 className={`content-heading`}>{title}
        </h4>

        <a
            onClick={()=>{props.redirectionFunction(props.anchor)}}
            className='mt-3'
            style={{color:"black",textDecoration:"underline",fontWeight:"bold"}}
          >Read More</a>
        
      </div>
    </div>
  )
}

export default NewsCard