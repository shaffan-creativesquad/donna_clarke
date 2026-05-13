import React from 'react'
import "./StripSection.css"

function StripSection() {
  const items = [
    { title: "In the Kitchen", desc: "Recovery Meals · Performance Nutrition · Family Table" },
    { title: "On the Platform", desc: "DC Lifts · Olympic Weightlifting · 5:30am Sessions" },
    { title: "On the Road", desc: "Speaking · Keynotes · Masterclasses · Summits" },
    { title: "In the Community", desc: "Athlos Collective · Champion's Ground · Founding Class" },
    { title: "The Cookbook", desc: "Champion's Table · Performance Recipes · Available Now" },
    { title: "The Journal", desc: "The Athlete's Journal · 365 Days · The Inner Game" },
    { title: "For Young Athletes", desc: "Champion's Path · 6-Book Series · Ages 4–10" },
    { title: "Donna's Story", desc: "1984 Olympian · Heptathlete · Pickering, Ontario · Seven Events, One Life" },
  ];

  const RenderItems = () => (
    <>
      {items.map((item, index) => (
        <div className="strip-item" key={index}>
          <strong className='color-gold sub-heading' style={{letterSpacing:"3px"}}>{item.title}</strong>
          <span className='font-moda'>{item.desc}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className='StripSection-container py-4'>
        <div className="strip-track my-4">
            <RenderItems />
            <RenderItems />
        </div>
    </div>
  )
}

export default StripSection;