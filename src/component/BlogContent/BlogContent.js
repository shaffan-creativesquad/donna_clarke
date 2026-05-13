import React from 'react'
import "./BlogContent.css"

function BlogContent({ text, blogsData,recentBlogs }) {
 
  return (
    <div className='BlogContent-container py-5'>
        <div className='container my-3'>
          <div className='row gy-4 flex-column-reverse flex-lg-row'>
            <div className='col-12'>
              <div className='blog-content'>
                <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
                  {blogsData.map((item) => (
                    <>
                      <h2 className="content-heading color-dark" style={{textTransform:"capatalize"}}>{item.heading}</h2>
                      <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
                    </>
                  ))}
                
                </div>
            </div>
           
          </div>

            

        </div>

    </div>
  )
}

export default BlogContent