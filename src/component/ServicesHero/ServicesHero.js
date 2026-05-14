import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
    return (
        <section className="services-hero-section">
            <div className="services-hero-container">
                <div className="services-hero-eyebrow">
                    <span className="hero-eyebrow-line"></span>
                    <span className="hero-eyebrow-text font-raleway">The Work</span>
                </div>

                <h1 className="services-hero-heading font-playfair">
                    Athlete development is not about doing more.<br />
                    <em className="hero-heading-accent font-playfair">It is about developing completely.</em>
                </h1>

                <div className="services-hero-body">
                    <p>
                        When physical ability, mindset, nutrition, environment, and identity develop together — athletes are not only better prepared to perform. They are better equipped to grow, adapt, and sustain success over time. Talent alone does not determine outcomes. Structure does.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
