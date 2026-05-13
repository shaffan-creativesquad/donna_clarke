import React from 'react';
import { Link } from 'react-router-dom';
import './AboutDonna.css';

const AboutDonna = () => {
    return (
        <section className="AboutDonna-section">
            <div className="AboutDonna-image-container">
                <div className="AboutDonna-placeholder-square">
                    <div className="AboutDonna-image-caption">
                        <p className="AboutDonna-caption-name">DONNA CLARKE — EDITORIAL PORTRAIT</p>
                        <p className="AboutDonna-caption-detail">Warm, authoritative, elegant<br/>800x1000px - Portrait</p>
                    </div>
                </div>
                <div className="AboutDonna-image-info">
                    <p>DONNA CLARKE · AJAX, ONTARIO · FOUNDER, ATHLOS COLLECTIVE</p>
                </div>

            </div>

            
            <div className="AboutDonna-content-container">
                <div className="AboutDonna-subtitle-wrapper">
                    <div className="AboutDonna-subtitle-line"></div>
                    <span className="AboutDonna-subtitle">ABOUT DONNA</span>
                </div>
                
                <h2 className="AboutDonna-title">
                    The Olympian who <em>never stopped</em> studying the game.
                </h2>
                <div className="AboutDonna-title-line"></div>



                
                <div className="AboutDonna-text-block">
                    <p className="AboutDonna-description">
                        I stood in the tunnel of the 1984 Los Angeles Olympics knowing one thing: I was not supposed to be there — and I was exactly where I was meant to be. Six months earlier I was an average gymnast. Something greater than my own ability had been building me into something I could not yet see. The heptathlon does not reward the specialist. It rewards the complete human being — and I believe that is no accident. That conviction has never left me. It led me from the track, to my kitchen, to my son's career, and now to every family I have the privilege of walking alongside.
                    </p>
                    <p className="AboutDonna-description">
                        Donna is a 1984 Canadian Olympian, a certified Mental Performance Coach, a culinary school Honours graduate specialising in athlete nutrition, a certified Marketing and Branding professional for athletes, and in pursuit of her Master's in High Performance Coaching. She raised her son, Denzel Clarke — now center fielder for the Athletics in MLB — using all of these disciplines simultaneously. Not as separate tracks. As one integrated system.
                    </p>
                </div>
                
                <div className="AboutDonna-quote-block">
                    <div className="AboutDonna-quote-wrapper">
                        <p className="AboutDonna-quote">
                            "The years between 8 and 18 are not a performance window. They are a human formation window. I work in that window because what is built there cannot be rebuilt later."
                        </p>
                    </div>
                    <p className="AboutDonna-attribution">— Donna Clarke</p>

                    
                    <div className="AboutDonna-button-wrapper">
                        <Link to="/how-i-got-here" className="AboutDonna-button gold-grad-btn text-decoration-none">HER FULL STORY</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutDonna;
