import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleNavToSection = (sectionId) => {
        if (window.location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(sectionId), 400);
        }
    };

    return (
        <div className="new-footer-container">
            <div className="new-footer-content">
                
                {/* Column 1 */}
                <div className="new-footer-col-1">
                    <h2 className="new-footer-logo font-playfair">Donna Clarke</h2>
                    <p className="new-footer-subtitle font-raleway">THE OLYMPIAN SPORTS MOM</p>
                    <p className="new-footer-bio font-raleway">
                        1984 Canadian Olympian. Certified Mental Performance Coach. Culinary School Honours Graduate. Certified Marketing & Branding for Athletes. M.Sc High Performance Coaching (in pursuit). Proud Mom of Denzel Clarke, Oakland Athletics MLB. Founder, Athlos Collective - Ajax, Ontario.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="new-footer-col">
                    <h4 className="new-footer-heading font-raleway">ABOUT</h4>
                    <ul className="new-footer-links font-raleway">
                        <li onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>About Donna</li>
                        <li onClick={() => navigate('/how-i-got-here')}>How I Got Here</li>
                        <li onClick={() => handleNavToSection('six-credentials')}>The Six Credentials</li>
                        <li>Denzel's Story</li>
                        <li>The Athlos Collective</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="new-footer-col">
                    <h4 className="new-footer-heading font-raleway">WORK WITH DONNA</h4>
                    <ul className="new-footer-links font-raleway">
                        <li onClick={() => navigate('/services')}>Services</li>
                        <li onClick={() => navigate('/speaking')}>Speaking</li>
                        <li onClick={() => navigate('/hall-of-champions')}>Hall of Champions</li>
                        <li onClick={() => navigate('/enquire')}>Submit an Enquiry</li>
                        <li onClick={() => navigate('/hall-of-champions')}>The Champion's Table</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="new-footer-col">
                    <h4 className="new-footer-heading font-raleway">CONNECT</h4>
                    <ul className="new-footer-links font-raleway">
                        <li>consulting@donnaclarke.com</li>
                        <li>speaking@donnaclarke.com</li>
                        <li>@DonnaClarkeWorld</li>
                        <li>DC Diaries — YouTube</li>
                        <li>The Champion's Letter</li>
                        <li>athloscollective.com</li>
                    </ul>
                </div>

            </div>

            <div className="new-footer-bottom font-raleway">
                <div className="new-footer-copyright">
                    © 2028 Donna Clarke · donnaclarke.com · An Athlos Collective Programme · Ajax, Ontario · All rights reserved
                </div>
                <div className="new-footer-legal">
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Media Kit</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;