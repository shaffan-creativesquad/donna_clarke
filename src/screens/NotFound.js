import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

function NotFound() {
  return (
    <>

       <Header
            fontDark={true}
        />
    <div className="coming-soon-container">
        <div className="text-center my-5 py-5">
          <h3 className="body-heading">404</h3>
          <p>Requested Page Could Not Be Found</p>
        </div>
      </div>
       <Footer/>
    </>
  );
}

export default NotFound;
