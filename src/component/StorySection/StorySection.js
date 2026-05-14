import React from 'react';
import './StorySection.css';
import FadeUp from '../FadeUp/FadeUp';

function StorySection() {
    return (
        <div className="StorySection-container">
            <div className="container">

                <div className="StorySection-separator">
                    <div className="line"></div>
                    <span className="text font-raleway">THREE PILLARS. ONE ARCHITECT.</span>
                    <div className="line"></div>
                </div>

                <FadeUp>
                    <h2 className="StorySection-title font-playfair">
                        The work Donna Clarke<br />
                        has always <em className="StorySection-accent">been doing.</em>
                    </h2>
                </FadeUp>

                <p className="StorySection-body font-playfair">
                    Sport is the arena. The home is the institution. The athlete is never just the
                    athlete — they are the outcome of everything built around them.
                </p>

            </div>
        </div>
    );
}

export default StorySection;
