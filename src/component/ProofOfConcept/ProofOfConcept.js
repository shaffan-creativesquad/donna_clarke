import React from 'react';
import './ProofOfConcept.css';

const ProofOfConcept = () => {
    return (
        <section className="ProofOfConcept-section">
            <div className="ProofOfConcept-left">
                <div className="ProofOfConcept-subtitle-wrapper">
                    <div className="ProofOfConcept-subtitle-line"></div>
                    <span className="ProofOfConcept-subtitle font-raleway">THE PROOF OF CONCEPT</span>
                </div>
                
                <h2 className="ProofOfConcept-title color-light font-playfair">
                    She became an Olympian.<br/>
                    <em className='font-playfair'>Then she raised a Major Leaguer.</em>
                </h2>
                <div className="ProofOfConcept-title-line"></div>


                <div className="ProofOfConcept-text-block">
                    <p className="ProofOfConcept-description font-raleway">
                        I did not raise an athlete. I raised a person who uses sport to reveal who they already are. Denzel has always known who he is. Donna Clarke is the mother of two extraordinary children: Meighen, a creative soul, and Denzel Clarke, center fielder for the Athletics in Major League Baseball — who made his MLB debut on May 23, 2025.
                    </p>
                    <p className="ProofOfConcept-description">
                        On May 31, Denzel hit his first career home run against his hometown Toronto Blue Jays at Rogers Centre. Donna was watching from the stands. The methodology that produced Denzel is the same one she brings to every family she works with.
                    </p>
                </div>

                <div className="ProofOfConcept-quote-container">
                    <p className="ProofOfConcept-quote font-raleway">
                        "The system works. I know because I watched it work over 20 years — in my own household, on my own son."
                    </p>
                </div>
            </div>

            <div className="ProofOfConcept-right">
                <div className="ProofOfConcept-stats-container">
                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">#1</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4 className='font-raleway'>Center Fielder</h4>
                            <p>Oakland Athletics · Major League Baseball</p>
                        </div>
                    </div>
                    
                    <div className="ProofOfConcept-stat-item">
                        <span className="ProofOfConcept-stat-value font-playfair">May 23</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4>MLB Debut</h4>
                            <p>2025 Oakland Athletics</p>
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
                        <span className="ProofOfConcept-stat-value font-playfair">2024/26</span>
                        <div className="ProofOfConcept-stat-info">
                            <h4>Senior National Team</h4>
                            <p>World Baseball Classic</p>
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
