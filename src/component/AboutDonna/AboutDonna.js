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
                    <span className="AboutDonna-subtitle">Who She Is</span>
                </div>
                
                <h2 className="AboutDonna-title">
                    A woman who knows how to set a house in order and <em>build people inside it.</em>
                </h2>
                <div className="AboutDonna-title-line"></div>



                
                <div className="AboutDonna-text-block">
                    <p className="AboutDonna-description">
                        Donna Clarke builds strong homes that produce strong people. Sport, nutrition, coaching, and education are expressions of that. But underneath all of it is the same instinct — to create order, establish standards, and prepare people for the environments they will eventually step into. She does not leave development to chance. She studies what a child needs, what a household requires, and what a system lacks. Then she builds accordingly.
                    </p>
                    <p className="AboutDonna-description">
                        Her authority does not rest on what she achieved. Those are outcomes. Her authority rests in her understanding that environments determine results. As a young athlete she built discipline to protect her peace. As an Olympian she learned that excellence is never accidental. As a mother she refused to hand over her children's formation to systems that did not align with her values. The pattern has been consistent across every season of her life.
                    </p>
                </div>
                
                <div className="AboutDonna-quote-block">
                    <div className="AboutDonna-quote-wrapper">
                        <p className="AboutDonna-quote">
                            "Her mandate is rooted in formation. Children and families should be shaped intentionally — not left to adapt to whatever system is loudest or most convenient."
                        </p>
                    </div>
                    <p className="AboutDonna-attribution">— Donna Clarke Brand Direction</p>

                    
                    <div className="AboutDonna-button-wrapper">
                        <Link to="/foundation" className="AboutDonna-button gold-grad-btn text-decoration-none">THE FULL STORY</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutDonna;
