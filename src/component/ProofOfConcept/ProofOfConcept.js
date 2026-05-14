import React from 'react';
import './ProofOfConcept.css';
import FadeUp from '../FadeUp/FadeUp';

const ProofOfConcept = () => {
    return (
        <section className="ProofOfConcept-section">
            <div className="ProofOfConcept-left">
                <div className="ProofOfConcept-subtitle-wrapper">
                    <div className="ProofOfConcept-subtitle-line"></div>
                    <span className="ProofOfConcept-subtitle font-raleway">WHAT THIS PRODUCES</span>
                </div>
                
                <FadeUp direction="up">
                    <h2 className="ProofOfConcept-title color-light font-playfair">
                        She became an Olympian.<br/>
                        <em className='font-playfair'>Then she raised a Major Leaguer.</em>
                    </h2>
                </FadeUp>
                <div className="ProofOfConcept-title-line"></div>


                <div className="ProofOfConcept-text-block">
                    <p className="ProofOfConcept-description font-raleway">
                        Donna Clarke is the mother of Denzel Clarke, center fielder for the Athletics in Major League Baseball. He debuted on May 23, 2025, and hit his first career home run on May 31 against the Toronto Blue Jays at Rogers Centre — at home — while she watched from the stands.
                    </p>
                    <p className="ProofOfConcept-description">
                        She did not raise a baseball player. She raised a person who uses sport to reveal who he already is. The methodology applied to Denzel across twenty years is the same one she brings to every family she works with. Not as a performance story. As a formation story.
                    </p>
                </div>

                <div className="ProofOfConcept-quote-container">
                    <p className="ProofOfConcept-quote font-raleway">
                        "Her authority rests in her understanding that environments determine results. She does not leave growth to chance."
                    </p>
                </div>
            </div>

            <div className="ProofOfConcept-right">
                <div className="ProofOfConcept-stats-container">
                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">#1</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4 className='font-raleway'>Center Fielder</h4>
                            <p>Athletics · Major League Baseball</p>
                        </div>
                    </div>
                    
                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">May 23</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4>MLB Debut</h4>
                            <p>2025 · Athletics</p>
                        </div>
                    </div>

                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">May 31</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4>First Career Home Run</h4>
                            <p>Rogers Centre · vs Toronto Blue Jays · Hometown</p>
                        </div>
                    </div>

                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">20 years</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4>Formation</h4>
                            <p>The real timeline behind the result</p>
                        </div>
                    </div>
                </div>

                <div className="ProofOfConcept-placeholder-container">
                    <div className="ProofOfConcept-placeholder-square">
                        <div className="ProofOfConcept-placeholder-caption">
                            <p className="ProofOfConcept-caption-title">DONNA + DENZEL — FAMILY PHOTO</p>
                            <p className="ProofOfConcept-caption-detail">Warm, authentic · Client to supply · 800x533px</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofOfConcept;
