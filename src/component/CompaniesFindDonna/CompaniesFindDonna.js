import React from 'react';
import { Link } from 'react-router-dom';
import './CompaniesFindDonna.css';

const CompaniesFindDonna = () => {
    return (
        <section className="companies-section">
            <div className="companies-bg-text font-playfair">DONNA CLARKE</div>
            
            <div className="companies-content">
                <div className="companies-left">
                    <h2 className="companies-title font-playfair">
                        Companies find <em className="companies-title-em font-playfair">Donna</em> here.
                    </h2>
                    <p className="companies-description font-raleway">
                        This is not a transactional website. This is where those who have been sent here — by someone who has worked with Donna, read about her, or listened to her speak — come to understand who she is and what she does. If you are a company, programme, media outlet, or institution looking to engage Donna Clarke, the conversation starts here.
                    </p>
                </div>
                
                <div className="companies-right">
                    <Link to="/enquire" className="companies-btn btn-gold font-raleway text-decoration-none text-center">WORK WITH DONNA</Link>
                    <Link to="/speaking" className="companies-btn btn-outline font-raleway text-decoration-none text-center">SPEAKING ENQUIRIES</Link>
                    <Link to="/hall-of-champions" className="companies-btn btn-outline font-raleway text-decoration-none text-center">HALL OF CHAMPIONS</Link>
                </div>
            </div>
        </section>
    );
};

export default CompaniesFindDonna;
