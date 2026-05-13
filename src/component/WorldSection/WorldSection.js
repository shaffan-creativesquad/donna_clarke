import React from 'react'
import "./WorldSection.css"

function WorldSection() {

   const boxData = [
  {
    title: "The Champion's Table Cookbook",
    price: "$55"
  },
  {
    title: "The Athlete's Journal — Comprehensive",
    price: "$38"
  },
  {
    title: "Champion's Path Book Series (6 books)",
    price: "$118 bundle"
  },
  {
    title: "Athlos Strength Subscription",
    price: "$47/mo"
  },
  {
    title: "DC Lifts Personal Programming",
    price: "$197/mo"
  },
  {
    title: "The Champion Parka",
    price: "From $145"
  },
  {
    title: "Champion's Letter — Free",
    price: "Subscribe"
  },
  {
    title: "Parent Masterclass Day",
    price: "$349"
  }
];

  return (
    <div className="WorldSection-container standard-padding-space" id='books'>
      <div className="container my-lg-5">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="sub-heading sub-heading-line color-gold d-flex align-items-center gap-3">
              DC's World
            </h3>
            <h2 className="body-heading color-light">
              Donna <br />
              <span className="body-heading color-gold">
                writes. Builds. Creates.
              </span>
            </h2>
            <p className="body-paragraph color-para-light">
              Donna Clarke's written work spans three distinct audiences: the
              young athlete who is just beginning, the serious competitor who
              wants the inner edge, and the family whose table she has been
              setting for twenty years. From the children's series to the
              athlete's journal to the cookbook — all of it is here.
            </p>

            <div className="box-container">
              {boxData.map((ele) => {
                return (
                  <div className="box d-flex align-items-center justify-content-between p-4 mt-1">
                    <p className="body-paragraph color-light mb-0">
                      {ele?.title}
                    </p>
                    <h5 className="font-moda color-gold fst-italic mb-0" style={{width:"fit-content"}}>
                      {ele?.price}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <div className="shop-right">
              <div className="shop-book">
                <div className="book-cover">
                  <div className="bc-author">DC</div>
                  <div className="bc-line"></div>
                  <div className="bc-title-small">The</div>
                  <div className="bc-title-main font-moda">
                    Champion's
                    <br />
                    Table
                  </div>
                  <div className="bc-line"></div>
                  <div className="bc-title-small">100 Performance Recipes</div>
                </div>
                <div className="book-label">Pre-order · November 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldSection