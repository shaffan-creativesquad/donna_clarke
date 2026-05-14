import React from 'react';
import './WhatFamiliesSay.css';

const testimonials = [
    {
        quote: '"Donna and her team saw in our son in the first session what seven years of coaching had not surfaced — specifically, not generally. They named the exact mental pattern that was costing him at competition. He was 14. Nobody had ever said that to him. It changed everything."',
        name: 'T. Okonkwo',
        description: 'Father of a competitive track athlete · Lagos, Nigeria'
    },
    {
        quote: '"I thought I was doing everything right as a sports parent — until Donna and her team\'s Parent Masterclass. I walked out knowing three specific things I had been saying for years that were working against my daughter without my knowing. I went home and apologised."',
        name: 'A. Patel',
        description: 'Mother of a competitive gymnast · Ajax, Ontario'
    },
    {
        quote: '"Donna and her team rebuilt our entire approach to our son\'s nutrition. We had been treating it as an afterthought. She helped us understand what he actually needed as a growing athlete and how to build it into our real life. His energy levels at training changed within three weeks."',
        name: 'M. Williams',
        description: 'Mom of a competitive swimmer · Scottsdale, Arizona'
    }
];

const WhatFamiliesSay = () => {
    return (
        <section className="families-say-section">
            <div className="families-say-header-wrapper">
                <div className="families-say-eyebrow">
                    <span className="families-say-eyebrow-line"></span>
                    <span className="families-say-eyebrow-text font-raleway">WHAT FAMILIES SAY</span>
                </div>
                <h2 className="families-say-title font-playfair">
                    The families who have <br /> <em className="families-say-title-em">already felt the difference.</em>
                </h2>
            </div>

            <div className="families-say-grid">
                {testimonials.map((test, idx) => (
                    <div className="families-say-card" key={idx}>
                        <div className="families-say-card-top-line"></div>
                        <div className="families-say-stars">
                            ★ ★ ★ ★ ★
                        </div>
                        <p className="families-say-quote font-cormorant">{test.quote}</p>
                        <div className="families-say-author-info">
                            <h4 className="families-say-author-name font-raleway">{test.name}</h4>
                            <p className="families-say-author-desc font-raleway">{test.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatFamiliesSay;
