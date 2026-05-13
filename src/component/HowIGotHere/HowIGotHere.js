import React from 'react';
import './HowIGotHere.css';

const HowIGotHere = () => {
    return (
        <section className="hig-section">
            <div className="hig-inner">

                <div className="hig-eyebrow">
                    <span className="hig-eyebrow-line"></span>
                    <span className="hig-eyebrow-text font-raleway">HOW I GOT HERE</span>
                </div>

                <h2 className="hig-heading font-playfair">
                    Every credential<br />
                    <em className="hig-heading-em font-playfair">tells a story.</em>
                </h2>

                <p className="hig-tagline font-cormorant">
                    Mine started on a track in Los Angeles in 1984 — and it did not end there.
                </p>

                <p className="hig-body font-raleway">
                    Sports management and consulting is a field full of people who read about sport.
                    I participated in it at the highest level, studied it at the graduate level, watched
                    my son navigate it as a professional, and spent years helping athletes navigate the
                    parts of their career that no one else was paying attention to. Here is the honest version.
                </p>
            </div>
        </section>
    );
};

export default HowIGotHere;
