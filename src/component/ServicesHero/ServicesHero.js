import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
    return (
        <section className="services-hero-section">
            <div className="services-hero-container">
                <div className="services-hero-eyebrow">
                    <span className="hero-eyebrow-line"></span>
                    <span className="hero-eyebrow-text font-raleway">SPORTS MANAGEMENT & CONSULTING</span>
                </div>

                <h1 className="services-hero-heading font-playfair">
                    Six pillars.<br />
                    <em className="hero-heading-accent font-playfair">One integrated system.</em>
                </h1>

                <div className="services-hero-body font-playfair">
                    <p>
                        Athlete development is not about doing more. It is about developing completely.
                    </p>
                    <p>
                        When these six pillars are aligned, athletes are not only better prepared to perform 
                        — they are better equipped to grow, adapt, and sustain success over time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
