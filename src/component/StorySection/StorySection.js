import React from 'react';
import './StorySection.css';

console.log("StorySection component loaded");

function StorySection() {
    return (
        <div className="StorySection-container">
            <div className="container">
                <div className="StorySection-separator">
                    <div className="line"></div>
                    <span className="text">THREE WORLDS. ONE WOMAN.</span>
                    <div className="line"></div>
                </div>
                
                <h2 className="StorySection-title font-playfair">
                    The complete story of
                </h2>
                <h2 className="StorySection-name font-playfair">
                    Donna Clarke.
                </h2>
            </div>
        </div>
    );
}

export default StorySection;
