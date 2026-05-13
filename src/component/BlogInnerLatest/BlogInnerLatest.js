import React from 'react'
import "./BlogInnerLatest.css"
import NewsCard from '../NewsList/NewsCard'
import { useNavigate } from 'react-router-dom';

function BlogInnerLatest({
    latestNewsData=null
}) {
    const navigate = useNavigate()

    const convertToSlug = (str) => {
        return str.toLowerCase().replace(/\s+/g, "-");
      };
    
      const redirectUserToBlog = (id) => {
        if (!id) return;
        let slug = convertToSlug(id);
    
        navigate(`/artical/${slug}`);
      };
  return (
    <div className='BlogInnerLatest-container '>
        <div className='right-gradient-bottom'>
        <div className='left-gradient-upper standard-padding-space'>
        <div className='container my-4'>
            <div className='d-flex justify-content-between align-items-center gap-4 flex-column flex-md-row my-5'>
                    <h3 className='body-heading color-light'>Latest posts</h3>
                    <button className='genral-btn' onClick={()=>{navigate("/blog")}}>BROWSE ARTICLES</button>

            </div>

            <div className='row'>
                {latestNewsData && latestNewsData.map((ele,ind) => (
                <div 
                    key={ele.id} 
                    className={`col-lg-6 mx-sm-auto gy-4 mb-3 box-${ind%2}`}
                    // style={currentPage !== 0 ? { animation: "fade-animation 0.5s ease-in-out", animationIterationCount: 1, animationFillMode: "forwards" } : {}}
                >
                    <NewsCard 
                    img={ele.logo}
                    title={ele.blog_description}
                    anchor={ele.slug_url}
                    redirectionFunction={redirectUserToBlog}
                    date={ele.date}
                    catagory={"RESOURCES"}
                    />
                </div>
                ))}
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BlogInnerLatest