import React from 'react';
import './HowIGotHere.css';

const HowIGotHere = () => {
    return (
        <section className="hig-section">
            <div className="hig-inner">

                <div className="hig-eyebrow">
                    <span className="hig-eyebrow-line"></span>
                    <span className="hig-eyebrow-text font-raleway">Anchoring Authorship in Stewardship and Structure</span>
                </div>

                <h2 className="hig-heading font-playfair">
                    She has always <br /> been 
                    <em className="hig-heading-em font-playfair"> this builder.</em>
                </h2>

                <p className="hig-tagline font-cormorant">
                    The titles and credentials are not the beginning of the story. They are evidence of it.
                </p>

                <p className="hig-body font-raleway">
                    There is a kind of authority that does not need to announce itself. It is built, quietly, over decades — from conviction rather than recognition, from responsibility rather than ambition. Donna Clarke's public work is not something newly invented. It is something that has been lived repeatedly and is now being made visible with intention.
                </p>
                <p className="hig-body font-raleway mt-4">This is the honest version of how she got here — not a list of accomplishments, but a map of the decisions behind them.</p>
            </div>
        </section>
    );
};

export default HowIGotHere;
