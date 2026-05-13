import React, { useState } from 'react';
import './CategorySection.css';

const CategorySection = () => {
  const tabs = ['ALL', 'KITCHEN', 'TRAINING', 'WISDOM', 'FAMILY'];
  const [activeTab, setActiveTab] = useState('TRAINING');

  const cardData = {
    TRAINING: [
      {
        id: 1,
        title: "The Sunday Rice Bowl That Raised a Professional Athlete",
        category: "KITCHEN",
        content:"The recipe DC has made every Sunday for twenty years. The meal that became a ritual. The table where Jamari learned that recovery starts before the next session.",
        type: "feature",
        color: "#D4B982",
      },
      {
        id: 2,
        title: "Why I Still Lift at 40-Something",
        category: "TRAINING",
        content:"Not for the aesthetics. Never for the aesthetics. DC on what Olympic lifting has always been for — and why she will never stop.",
        type: "standard",
        color: "#5C2D3E",
      },
      {
        id: 3,
        title: "The Car Ride Home",
        category: "WISDOM",
        content:"The most important coaching session your athlete ever receives. And you are the coach. What to say in the 20 minutes that change everything.",
        type: "standard",
        color: "#C4B69C",
      },
      {
        id: 4,
        title:"The Day Denzel Hit His First MLB Home Run Against the Blue Jays",
        content: "May 31, 2025. Rogers Centre. Donna was in the stands. Her son — an Athletics center fielder, a child of Pickering — hit one out against his hometown team. She had seen this before. Seven events. One complete athlete.",
        category: "FAMILY",
        type: "standard",
        color: "#1A1410",
      },
      {
        id: 5,
        title: "What an Olympic Start Line Actually Feels Like",
        content:"DC has never written about this. The sound. The silence before the gun. The thing she understood in that moment that she has spent her entire coaching career trying to recreate for others.",
        category: "TRAINING",
        type: "standard",
        color: "#8E8672",
      },
    ],
  };

  const currentCards = cardData[activeTab] || cardData['TRAINING'];

  return (
    <section className="category-section standard-padding-space" id='life'>
      <div className="container my-lg-5">
        <header className="tab-header d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-end gy-lg-0 gy-5">
          <div className='d-flex flex-column'>
            <h3 className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-3'>The DC Life</h3>
            <h2 className='body-heading'>Where sport meets <br></br>the rest of life.</h2>
          </div>
          <nav className="tab-nav d-flex flex-lg-row flex-wrap flex-lg-nowrap ">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn pt-lg-0 pt-4 ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        <div className="card-grid">
          {currentCards.map((card, index) => (
            <div 
              key={card.id} 
              className={`card-item ${index === 0 ? 'feature-card' : 'standard-card'}`}
              style={{ '--bg-color': card.color }}
            >
              <div className="card-image-placeholder"></div>
              <div className="card-content p-3">
                <span className="card-catagory sub-heading color-gold">{card.category}</span>
                <h3 className="card-title font-moda">{card.title}</h3>
                <p className='body-paragraph'>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;