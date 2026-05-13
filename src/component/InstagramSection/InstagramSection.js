import React from 'react'
import "./InstagramSection.css"

function InstagramSection() {
  return (
    <div className="InstagramSection-container standard-padding-space">
      <div className="container my-lg-5">
        <div className="d-flex align-items-center flex-lg-row flex-column justify-content-lg-between">
          <h2 className="font-moda color-purple fst-italic">
            @DonnaClarkesWorld
          </h2>
          <button className="genral-btn">FOLLOW DC</button>
        </div>

        <div className='mt-4'>
          <div className="social-grid reveal visible delay-1">
            <div className="social-post">
              <div className="sp-bg sp1"></div>
              <div className="sp-overlay">
                <span className="sp-type">Training · DC Lifts</span>
              </div>
            </div>
            <div className="social-post">
              <div className="sp-bg sp2"></div>
              <div className="sp-overlay">
                <span className="sp-type">Kitchen · Recipe</span>
              </div>
            </div>
            <div className="social-post">
              <div className="sp-bg sp3"></div>
              <div className="sp-overlay">
                <span className="sp-type">Community · Athletes</span>
              </div>
            </div>
            <div className="social-post">
              <div className="sp-bg sp4"></div>
              <div className="sp-overlay">
                <span className="sp-type">Family · Wisdom</span>
              </div>
            </div>
            <div className="social-post">
              <div className="sp-bg sp5"></div>
              <div className="sp-overlay">
                <span className="sp-type">On Stage · Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramSection