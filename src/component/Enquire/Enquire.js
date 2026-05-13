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
                            Start the<br />
                            <em>conversation here.</em>
                        </h1>
                        <div className="speak-hero-divider"></div>
                        <p className="speak-hero-lede" style={{ maxWidth: '560px' }}>
                            The first conversation costs nothing. The right guidance at the right time changes everything. Donna takes on a limited number of individual engagements at any time because the work requires genuine attention, not a production line.
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
                            <div className="ey">Contact Information</div>
                            <h3 className="h3" style={{ color: 'var(--burg-3)', marginBottom: '20px' }}>Reach Donna directly.</h3>
                            <div className="thin-rule"></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                                <div><div className="h4">Consulting</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>consulting@donnaclarke.com</p></div>
                                <div><div className="h4">Speaking</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>speaking@donnaclarke.com</p></div>
                                <div><div className="h4">Hall of Champions</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>donna@donnaclarke.com</p></div>
                                <div><div className="h4">Donations & Sponsorship</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>giving@donnaclarke.com</p></div>
                                <div><div className="h4">Media & Press</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>media@donnaclarke.com</p></div>
                                <div><div className="h4">Instagram</div><p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--mid)' }}>@DonnaClarkesWorld</p></div>
                            </div>

                            <div className="thin-rule"></div>
                            <div className="h4" style={{ marginBottom: '12px' }}>Charitable Donations</div>
                            <div style={{ background: 'var(--burg)', border: '2px solid var(--gold)', padding: '20px', textAlign: 'center', marginBottom: '14px' }}>
                                <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(250,246,239,.45)', marginBottom: '8px' }}>Charitable Registration</div>
                                <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: '500', color: 'var(--gold-2)' }}>[Charitable #]</div>
                                <div style={{ fontSize: '11px', color: 'rgba(250,246,239,.3)', marginTop: '6px' }}>Hall of Champions Cotillion</div>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '300', color: 'var(--soft)', lineHeight: '1.65' }}>
                                All donations to the Hall of Champions Cotillion are eligible for an official charitable tax receipt issued within 48 hours.
                            </p>

                            <div style={{ marginTop: '28px' }}>
                                <div className="pull-q" style={{ fontSize: '14px', borderColor: 'var(--burg)' }}>
                                    This is not a transactional website. Donna does not sell here. She informs — so that when the right company, family, or institution is ready to engage, they arrive already understanding who she is and what she does.
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="inq-form-wrap">
                            <div className="form-section-title">Enquiry Information</div>

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
                                <label className="form-label">Development Goals</label>
                                <div style={{ marginBottom: '10px' }}>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Athletic Development — technical and physical skills</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Mental Performance — confidence, pressure, identity</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Performance Nutrition — fuelling and meal planning</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Athlete Brand & NIL Strategy</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">College / Scholarship Positioning</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Professional Pathway Planning</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Parent Coaching / Family Support</label></div>
                                    <div className="form-check-row"><input type="checkbox" className="form-check" /><label className="form-check-label">Hall of Champions — Character & Leadership</label></div>
                                </div>
                            </div>

                            <div className="form-divider"></div>
                            <div className="form-section-title">Your Message</div>

                            <div className="form-full">
                                <label className="form-label">Tell Donna About Your Enquiry <span>*</span></label>
                                <textarea className="form-textarea" rows="5" placeholder="Share the context for your enquiry — the athlete's story, what you're working toward, and what prompted you to reach out to Donna today."></textarea>
                            </div>

                            <div className="form-full">
                                <label className="form-label">How Did You Hear About Donna Clarke?</label>
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
                                <label className="form-label">Preferred Method of First Contact</label>
                                <select className="form-select">
                                    <option value="">Select preferred contact method</option>
                                    <option>Email</option>
                                    <option>Phone call</option>
                                    <option>No preference</option>
                                </select>
                            </div>

                            <div className="form-divider"></div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
                                <input type="checkbox" className="form-check" style={{ marginTop: '2px' }} />
                                <label className="form-check-label">I understand that Donna Clarke takes on a limited number of individual engagements at any time, and that this enquiry is the beginning of a conversation — not a commitment from either party.</label>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '28px' }}>
                                <input type="checkbox" className="form-check" style={{ marginTop: '2px' }} />
                                <label className="form-check-label">I would like to receive Donna Clarke's Sunday newsletter — The Champion's Letter. (Free. Personal. Donna writes every word.)</label>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <button className="inq-submit-btn font-raleway" style={{ width: '100%', justifyContent: 'center' }}>
                                    Submit Enquiry
                                </button>
                                <p style={{ fontSize: '11px', color: 'var(--soft)', marginTop: '16px', fontWeight: '300' }}>
                                    All enquiries receive a personal response within 3–5 business days. Your information is never shared or sold. Privacy Policy at donnaclarke.com/privacy.
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
