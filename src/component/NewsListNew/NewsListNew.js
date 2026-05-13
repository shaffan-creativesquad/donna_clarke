import React,{useState,useEffect} from "react";
import "./NewsListNew.css";
import NewsCard from "./NewsListNewCard";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {Spinner} from "react-bootstrap"

let defaultBlogObj ;

function NewsListNew() {


  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const [blogs, setBlogs] = useState([]);
  const[firstBlog,setFirstBlog] = useState([])

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let blogAPICalled = false;

  useEffect(() => {
    getAllBlogsListing();

  }, []);

  const getAllBlogsListing = () => {
    if (blogAPICalled) return;
    blogAPICalled = true;

    setLoading(true);
    axios
      .get("/blogs", {})
      .then((res) => {
        console.log(res);
        
        if (res.data.status === "success") {
          let Updated_data_Blogs = [];
          let Updated_recent_blogs = [];
          const otherBlog = res.data.data;
          
          otherBlog.forEach((item) => {
            Updated_data_Blogs.push({
              id: item.blog_id,
              main_heading: item.title,
              paragraph: item.brief_paragraph,
              logo: "/favicon.png",
              entity: "Creative Squad",
              date: item.published_date,
              slug_url: item.slug_url,
              category: item.category,
              blog_creative: item.blog_image,
            });
          });
          otherBlog.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              blog_description: item.title,
              date: item.published_date,
            });
          });
          setBlogs(Updated_data_Blogs);
          defaultBlogObj = Updated_data_Blogs;
          setLoading(false);
        }
          
      })
      .catch((err) => {
        console.log("eror =>",err);
        setLoading(false);
      });
  };

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (id) => {
    if (!id) return;
    let slug = convertToSlug(id);
    navigate(`/artical/${slug}`);

  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNewsData = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if(page <= (Math.ceil(blogs.length/itemsPerPage)))
    {
      setCurrentPage(page);
    }
    else{
      return
    }
  }

  return (
    <>
    {loading ? 
        (<div className="w-100 text-center mb-5">
          <Spinner
            style={{ color: "black", width: "120px", height: "120px" }}
          />
        </div>):
        <>
       
        <div className={`NewsListNew-container standard-padding-space py-3`}>
          <div className="container">
          <div className="row">
            {currentNewsData.map((ele) => (
              <div 
                key={ele.id} 
                className={`col-lg-4 col-md-6 mx-sm-auto gy-4 mb-3 `}
                // style={currentPage !== 0 ? { animation: "fade-animation 0.5s ease-in-out", animationIterationCount: 1, animationFillMode: "forwards" } : {}}
              >
                <NewsCard 
                 img={ele.blog_creative}
                 title={ele.main_heading}
                 para={ele.paragraph}
                 anchor={ele.slug_url}
                 redirectionFunction={redirectUserToBlog}
                 date={ele.date}
                />
              </div>
            ))}
          </div>
          <div className="page-btn-container pt-4 my-5 d-flex align-items-center justify-content-center gap-3">
            {/* <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button><img src="/images/icons/blog-arrow-right.svg" className="next-icon"/></button> */}
            {[...Array(Math.ceil(blogs.length / itemsPerPage)).keys()].map((page) => {
              if (page + 1 <= 3) {
                return (
                  <button
                    key={page + 1}
                    className={currentPage === page + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </button>
                );
              } else {
                return (
                  <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
                    <img src="/images/icons/blog-arrow-right.png" className="next-icon" alt="Next" />
                  </button>
                );
              }
            })}
          </div>
        </div>
          
      </div>
      </>}
    </>
  );
}

export default NewsListNew;
