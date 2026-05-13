import React,{useState,useEffect} from 'react'
import "./BlogCard.css"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"
import {Spinner} from 'react-bootstrap'

function MainCard({
    img,
    date,
    title,
    content,
    link,
    redirectionFuntion
}) {

    return(
        <div>
            <img src={img} className='img-fluid' alt='blog thumbnail' loading='lazy'/>

            <p className='body-paragraph my-3 date d-flex align-items-center gap-2'>RECENT ARTICLE <div style={{border:"1px solid black",width:"35px"}}></div> <span>{date}</span></p>

            <h3 className='title color-white' >{title}</h3>

            <p className='body-paragraph'><div dangerouslySetInnerHTML={{__html:content}}></div></p>

            <p className='anchor color-yellow'
                onClick={()=>{redirectionFuntion(link)}}
            > Read Article<img src='/images/icons/arrow-right.png' style={{width:"20px",height:"10px"}} className='mx-2' alt='arrow icon' loading='lazy'/></p>
        </div>
    )
}

function SecondaryCard({
    img,
    date,
    title,
    link,
    redirectionFuntion
})
{
    return(
        <div>
            <div className='container mx-xl-3'>
                <div className='row mb-5 alig-items-center'>
                    <div className='col-lg-4 secondary-img-container' style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        {/* <img src={img} alt='blog thumbnail' className='img-fluid' /> */}
                    </div>

                    <div className='col-lg-8'>
                    <p className='body-paragraph mt-2 mb-3 date d-flex align-items-center gap-2'>RECENT ARTICLE <div style={{border:"1px solid black",width:"35px"}}></div> <span>{date}</span></p>
                        <h3 className='title mb-0 color-white mb-3'>{title}</h3>
                        <p className='anchor color-yellow'
                            onClick={()=>{redirectionFuntion(link)}}
                        > 
                        Read Article<img src='/images/icons/arrow-right.png' style={{width:"20px",height:"10px"}} className='mx-2' alt='arrow icon' loading='lazy'/></p>
                    </div>

                </div>

            </div>
        </div>
    )
}

function BlogCard() {
    const navigate = useNavigate()
    const [mainBlogsData, setMainBlogsData] = useState();
    const [blogsData, setBlogsData] = useState();
  
    const [loading, setLoading] = useState(false);
  
    let blogAPICalledId = false;
    let allBlogsCalled = false;
  
    const getAllBlogs = async () => {
      if (allBlogsCalled) return;
      allBlogsCalled = true;
  
      setLoading(true);
      
      axios
        .get(`/blogs`, {})
        .then((res) => {
          if (res.data.status === "success") {
            let Updated_recent_blogs = [];
            
            let mainBlog = res.data.data.slice(0,1);
            setMainBlogsData(mainBlog[0])


            let blog = res.data.data.slice(1, 4);
            setBlogsData(blog);
  
            
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setBlogsData(null)
          setLoading(false);
        });
    };
  
    useEffect(() => {
      getAllBlogs();
    }, []);

    const convertToSlug = (str) => {
        return str.toLowerCase().replace(/\s+/g, "-");
      };
    
      const redirectUserToBlog = (id) => {
        if (!id) return;
        let slug = convertToSlug(id);
    
        navigate(`/artical/${slug}`);
      };

  return (
    <div className='BlogCard-container py-5 '>
        <div className='container my-4 my-xxl-5'>
            <div className='main'>
                <div className='text-content text-center text-lg-start'>
                    <div className='row gy-3 align-items-center'>
                        <div className='col-lg-6'>
                            <h3 className='body-heading font-bebus color-blue' >BLOGS & ARTICLES</h3>
                        </div>

                        <div className='col-lg-6 text-center text-lg-end my-3 my-lg-0'>
                            <button className='genral-btn-light '  onClick={()=>{navigate("/blog")}}>OUR BLOGS</button>
                        </div>
                    </div>
                    
                </div>

                {
                    loading ?
                        <div
                            style={{ width: "100%", height: "100vh" }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Spinner
                            style={{ color: "black", width: "120px", height: "120px" }}
                            />
                        </div>
                    :
                        <div className='row gy-3 mt-4'>
                            {
                                mainBlogsData &&
                                <div className='col-lg-6'>
                                    <MainCard
                                        img={mainBlogsData.blog_image}
                                        date={mainBlogsData.published_date}
                                        title={mainBlogsData.title}
                                        content={mainBlogsData.brief_paragraph}
                                        link={mainBlogsData.slug_url}
                                        redirectionFuntion={redirectUserToBlog}
                                    />

                                </div>
                            }

                            {
                                blogsData && 
                                <div className='col-lg-6'>
                                    <div className='d-flex flex-column'>
                                        {
                                            blogsData.map((blog)=>{
                                                return(
                                                    <SecondaryCard
                                                        img={blog.blog_image}
                                                        date={blog.published_date}
                                                        title={blog.title}
                                                        link={blog.slug_url}
                                                        redirectionFuntion={redirectUserToBlog}
                                                    />
                                                )
                                            })
                                        }
                                        
                                    </div>  
                                </div>
                            }

                        </div>
                }

            </div>


        </div>

    </div>
  )
}

export default BlogCard