import React from 'react';
import { Link } from 'react-router-dom';
import './CompaniesFindDonna.css';
import FadeUp from '../FadeUp/FadeUp';

const CompaniesFindDonna = () => {
    return (
        <section className="companies-section">
            <div className="companies-bg-text font-playfair">DONNA CLARKE</div>
            
            <div className="companies-content">
                <div className="companies-left">
                    <h2 className="companies-title font-playfair">
                        This is where <br/> <em className="companies-title-em font-playfair">companies find Donna.</em>
                    </h2>
                    <p className="companies-description font-raleway">
                        This is not a promotional website. It is a record of a life spent in service to the formation of the next generation. If you are a company, institution, media organisation, or family that has been sent here — you are in the right place. The conversation starts with the enquiry below.
                    </p>
                </div>
                
                <div className="companies-right">
                    <Link to="/enquire" className="companies-btn btn-gold font-raleway text-decoration-none text-center">Begin the Enquiry</Link>
                    <Link to="/speaking" className="companies-btn btn-outline font-raleway text-decoration-none text-center">Speaking Engagements</Link>
                    <Link to="/hall-of-champions" className="companies-btn btn-outline font-raleway text-decoration-none text-center">Hall of Champions</Link>
                </div>
            </div>
        </section>
    );
};

export default CompaniesFindDonna;
