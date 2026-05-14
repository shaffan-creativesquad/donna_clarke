import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomCTA.css';

const BottomCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="bottom-cta-section">
            <div className="bottom-cta-container">
                <div className="bottom-cta-line"></div>
                <div className="bottom-cta-buttons">
                    <button 
                        className="btn-return-home font-raleway" 
                        onClick={() => navigate('/')}
                    >
                        RETURN HOME
                    </button>
                    <button 
                        className="btn-explore-services font-raleway" 
                        onClick={() => navigate('/work')}
                    >
                        EXPLORE SERVICES
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BottomCTA;
