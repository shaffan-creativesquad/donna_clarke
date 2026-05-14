import React from 'react';
import { Link } from 'react-router-dom';
import './Enquire.css';

const Enquire = () => {
    return (
        <div className="inq-page">
            {/* ── Hero ──────────────────────────────────────────────── */}
            <div className="inq-hero">
                <div className="inq-inner">
                    <div className="speak-hero-content">
                        <div className="ey ey-burg">Work With Donna</div>
                        <h1 className="display-h display-h-lt speak-hero-h1">
                            Every great outcome<br />
                            <em>starts with a conversation.</em>
                        </h1>
                        <div className="speak-hero-divider"></div>
                        <p className="speak-hero-lede inq-hero-lede">
                            The right guidance at the right time changes everything. Donna takes on a limited number of individual engagements at any time because the work requires genuine attention. This is not a production line. Tell her what you are building — and she will tell you honestly whether she is the right person to help you build it.
                        </p>
                    </div>
                </div>
            </div>
    
            {/* ── Form Section ────────────────────────────────────────── */}
            <section className="sec-warm">
                <div className="inq-inner">
                    <div className="inq-grid">
                        
                        {/* Left sidebar */}
                        <div>
                            <div className="ey">Contact Donna Directly</div>
                            <h3 className="h3 inq-sidebar-h3">Every enquiry receives a personal response.</h3>
                            <div className="thin-rule"></div>
                            <div className="inq-contact-list">
                                <div><div className="h4">Consulting</div><p className="inq-contact-detail">consulting@donnaclarke.com</p></div>
                                <div><div className="h4">Speaking</div><p className="inq-contact-detail">speaking@donnaclarke.com</p></div>
                                <div><div className="h4">Hall of Champions</div><p className="inq-contact-detail">donna@donnaclarke.com</p></div>
                                <div><div className="h4">Donations & Sponsorship</div><p className="inq-contact-detail">giving@donnaclarke.com</p></div>
                                <div><div className="h4">Media & Press</div><p className="inq-contact-detail">media@donnaclarke.com</p></div>
                                <div><div className="h4">Instagram</div><p className="inq-contact-detail">@DonnaClarkesWorld</p></div>
                            </div>

                            <div className="thin-rule"></div>
                            <div className="h4 inq-support-title">Support Our Athletes</div>
                            <div className="inq-charity-badge">
                                <div className="inq-charity-label">Giving Programme Reference</div>
                                <div className="inq-charity-number">[Charitable #]</div>
                                <div className="inq-charity-org">Hall of Champions Cotillion</div>
                            </div>
                            <p className="inq-charity-note">
                                We have a giving programme for exceptional athletes regardless of financial status. Candidates are considered by referral and recommendation only. Contact giving@donnaclarke.com to learn more.
                            </p>

                            <div className="inq-pull-wrap">
                                <div className="pull-q inq-pull-q">
                                    "She is no longer available to be framed through simplified narratives. Her authorship is quieter than that — and far more deliberate."
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="inq-form-wrap">
                            <div className="form-section-title">Your Enquiry</div>

                            <div className="form-row">
                                <div>
                                    <label className="form-label">First Name <span>*</span></label>
                                    <input className="form-input" type="text" placeholder="First name" />
                                </div>
                                <div>
                                    <label className="form-label">Last Name <span>*</span></label>
                                    <input className="form-input" type="text" placeholder="Last name" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div>
                                    <label className="form-label">Email Address <span>*</span></label>
                                    <input className="form-input" type="email" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="form-label">Phone Number</label>
                                    <input className="form-input" type="tel" placeholder="+1 (000) 000-0000" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div>
                                    <label className="form-label">Organisation / Company</label>
                                    <input className="form-input" type="text" placeholder="Organisation name" />
                                </div>
                                <div>
                                    <label className="form-label">City / Location <span>*</span></label>
                                    <input className="form-input" type="text" placeholder="City, Province/State" />
                                </div>
                            </div>

                            <div className="form-divider"></div>
                            <div className="form-section-title">Nature of Enquiry</div>

                            <div className="form-full">
                                <label className="form-label">Type of Enquiry <span>*</span></label>
                                <select className="form-select">
                                    <option value="">Select the primary reason for your enquiry</option>
                                    <option>Consulting — Athlete Development (ages 8–18)</option>
                                    <option>Consulting — Mental Performance Coaching</option>
                                    <option>Consulting — Performance Nutrition</option>
                                    <option>Consulting — Athlete Brand & NIL Strategy</option>
                                    <option>Consulting — Sports Management (Emerging Athletes)</option>
                                    <option>Consulting — Parent Coaching & Family</option>
                                    <option>Hall of Champions — Programme Application (Founding Family)</option>
                                    <option>Hall of Champions — Cotillion Donation / Athlete Sponsorship</option>
                                    <option>Speaking — The Champion Your Child Is Already Becoming</option>
                                    <option>Speaking — Nobody Told Me: The Sports Parent Masterclass</option>
                                    <option>Speaking — What the Start Line Teaches the Boardroom</option>
                                    <option>Media / Press / Interview</option>
                                    <option>Brand Partnership / Corporate Engagement</option>
                                    <option>Quest Sports Canada</option>
                                    <option>The Champion's Table — Cookbook / Nutrition</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>

                            <div className="form-divider"></div>
                            <div className="form-section-title">About the Athlete (if applicable)</div>

                            <div className="form-row">
                                <div>
                                    <label className="form-label">Athlete's Name</label>
                                    <input className="form-input" type="text" placeholder="Athlete's first and last name" />
                                </div>
                                <div>
                                    <label className="form-label">Athlete's Age</label>
                                    <input className="form-input" type="text" placeholder="Age" />
                                </div>
                            </div>

                            <div className="form-full">
                                <label className="form-label">Primary Sport(s)</label>
                                <input className="form-input" type="text" placeholder="e.g. Soccer, Track & Field, Basketball" />
                            </div>

                            <div className="form-full">
                                <label className="form-label">Current Level of Competition</label>
                                <select className="form-select">
                                    <option value="">Select current level</option>
                                    <option>Recreational / House League</option>
                                    <option>Club / Rep Level</option>
                                    <option>Provincial / State Level</option>
                                    <option>National Level</option>
                                    <option>Collegiate / University Level</option>
                                    <option>Professional / Semi-Professional</option>
                                    <option>Not applicable</option>
                                </select>
                            </div>

                            <div className="form-full">
                                <label className="form-label">What You Are Building For</label>
                                <div className="form-check-group">
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Athletic Development — structure and long-term pathway</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Mental Performance — identity, resilience, and preparation</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Performance Nutrition — the home as the first training ground</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Athlete Brand & NIL — identity built before it is needed</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">College / Scholarship Positioning</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Professional Pathway Planning</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Parent Coaching — the environment at home</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="inq-check" /><label className="form-check-label">Hall of Champions — Character, Scholarship & Excellence</label></div>
                                </div>
                            </div>

                            <div className="form-divider"></div>
                            <div className="form-section-title">Your Message</div>

                            <div className="form-full">
                                <label className="form-label">Tell Donna About Your Enquiry <span>*</span></label>
                                <textarea className="form-textarea" rows="5" placeholder="Tell Donna what you are building — the athlete's story, what you're working toward, what prompted you to reach out. The more honest the picture, the better she can respond."></textarea>
                            </div>

                            <div className="form-full">
                                <label className="form-label form-label--opt">How Did You Hear About Donna Clarke?</label>
                                <select className="form-select">
                                    <option value="">Select one</option>
                                    <option>Personal referral — someone who has worked with Donna</option>
                                    <option>Social media — Instagram (@DonnaClarkesWorld)</option>
                                    <option>YouTube — DC Diaries</option>
                                    <option>The Champion's Letter newsletter</option>
                                    <option>Speaking event — keynote or workshop</option>
                                    <option>Quest Sports Canada</option>
                                    <option>Hall of Champions programme</option>
                                    <option>Media coverage / press article</option>
                                    <option>Search engine</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-full">
                                <label className="form-label form-label--opt">Preferred Method of First Contact</label>
                                <select className="form-select">
                                    <option value="">Select preferred contact method</option>
                                    <option>Email</option>
                                    <option>Phone call</option>
                                    <option>Video call (Zoom / Teams)</option>
                                    <option>In-person meeting — Ajax / Durham Region</option>
                                    <option>No preference</option>
                                </select>
                            </div>

                            <div className="form-divider"></div>

                            <div className="inq-checkbox-row">
                                <input type="checkbox" className="inq-check" />
                                <label className="form-check-label">I understand that Donna takes on a limited number of individual engagements at any time, and that this enquiry is the beginning of a conversation — not a commitment from either party.</label>
                            </div>

                            <div className="inq-checkbox-row inq-checkbox-row--last">
                                <input type="checkbox" className="inq-check" />
                                <label className="form-check-label">I would like to receive The Champion's Letter — Donna Clarke's Sunday newsletter. Free. Personal. She writes every word.</label>
                            </div>

                            <div className="inq-submit-wrap">
                                <button className="inq-submit-btn font-raleway inq-submit-btn--full">
                                    Submit Enquiry
                                </button>
                                <p className="inq-submit-note">
                                    All enquiries receive a personal response within 3–5 business days. Your information is never shared or sold.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ────────────────────────────────────────────── */}
            <footer className="inq-footer">
                <div className="inq-inner">
                    <div className="inq-footer-bot">
                        <Link to="/" className="btn-burg-outline font-raleway text-decoration-none">
                            Return Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Enquire;
