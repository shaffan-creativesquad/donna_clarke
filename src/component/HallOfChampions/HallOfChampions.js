import React from 'react';
import { Link } from 'react-router-dom';
import './HallOfChampions.css';

/* ─── Data ──────────────────────────────────────────────────── */

const pillars = [
    {
        label: 'PILLAR ONE',
        title: 'Character',
        body: 'Biblical values, etiquette, social grace, and the confidence that enters a room before they do. The qualities that determine how an athlete carries themselves off the field — where the lasting reputation is built.',
    },
    {
        label: 'PILLAR TWO',
        title: 'Scholarship',
        body: 'NIL awareness, recruiting preparation, and the personal brand that makes coaches call first. The professional infrastructure behind the athletic ability — the part most families never build until it is too late.',
    },
    {
        label: 'PILLAR THREE',
        title: 'Excellence',
        body: 'Mental performance, elite wellness, and a Grand Ceremony that celebrates every step of the journey. The habits of excellence that compound — turning a talented athlete into a complete one, every Sunday for 44 weeks.',
    },
];

const divisions = [
    { level: 'ELEMENTARY · GR 3–5', name: 'Firm Foundations', ages: 'Ages 8–11' },
    { level: 'MIDDLE SCHOOL · GR 6–8', name: 'Rising Standard', ages: 'Ages 11–14' },
    { level: 'HIGH SCHOOL · GR 9–12', name: 'The Sovereign Standard', ages: 'Ages 14–18' },
];

const stats = [
    { number: '44', label: 'SUNDAY SESSIONS' },
    { number: '11', label: 'CHARACTER MODULES' },
    { number: '230', label: 'STUDENTS MAXIMUM' },
    { number: '1', label: 'GRAND CEREMONY' },
];

const HallOfChampions = () => {
    return (
        <div className="hoc-page">
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="hoc-hero">
                <div className="hoc-hero-inner">
                    <div className="hoc-hero-left">
                        <div className="hoc-tag-box font-raleway">
                            DONNA CLARKE LEADERSHIP · PREMIUM PROGRAMME
                        </div>
                        
                        <div className="hoc-eyebrow-container">
                            <span className="hoc-eyebrow-dash"></span>
                            <p className="hoc-eyebrow font-raleway">
                                A LETTER TO THE FAMILIES WHO SEE WHAT OTHERS MISS
                            </p>
                        </div>

                        <h1 className="hoc-hero-heading font-playfair">
                            Hall of<br />
                            <em>Champions.</em>
                        </h1>
                        
                        <div className="hoc-hero-divider"></div>

                        <p className="hoc-hero-body font-raleway">
                            You have watched your child dedicate themselves to a sport with a level of commitment
                            that most adults will never understand. Early mornings. Late practices. Sacrificed weekends. 
                            You have driven the miles, paid the fees, and sat in the bleachers through every win and every loss.
                        </p>
                        <p className="hoc-hero-body font-raleway">
                            And you have noticed something that the other parents have not yet seen — that the
                            game alone will never be enough. That talent without character is a roof without a 
                            foundation. That the young athletes who go on to earn scholarships, sign NIL deals, 
                            and lead in every room they enter are the ones who were prepared for all of it — 
                            not just the sport.
                        </p>
                        <h2 className="hoc-hero-bold font-playfair">
                            Hall of Champions was built for exactly that child. And for exactly that family.
                        </h2>

                        <div className="hoc-warn">
                            <p className="hoc-founding-note-text font-raleway">
                                <strong className="hoc-text-gold">Founding Family status is available only to families who enrol in Year 1</strong> <span style={{ color: 'rgba(250, 246, 239, 0.8)' }}>— a permanent
                                distinction that cannot be purchased after launch. Enrolment opens January 2026 and
                                closes when all 230 seats are filled — or after 14 days, whichever comes first.</span>
                            </p>
                        </div>
                    </div>

                    <div className="hoc-hero-right">
                        <div className="hoc-founding-card">
                            <h3 className="hoc-founding-card-title font-playfair">
                                Your Child Has One Opportunity to Be a Founding Family.
                            </h3>
                            <p className="hoc-founding-card-body font-raleway">
                                Founding Family status is permanent — a recognition of the families
                                who believed in this programme before it became what it will become. This distinction 
                                cannot be earned later. It can only be claimed now.
                            </p>
                            
                            <Link to="/enquire" className="hoc-gold-btn font-raleway text-decoration-none text-center">
                                APPLY FOR FOUNDING FAMILY STATUS
                            </Link>
                            
                            <a href="mailto:DONNA@DONNACLARKE.COM" className="hoc-email-btn font-raleway text-decoration-none text-center">
                                DONNA@DONNACLARKE.COM
                            </a>

                            <div className="hoc-timeline-section">
                                <p className="hoc-timeline-label font-raleway">ENROLMENT TIMELINE</p>
                                <div className="hoc-timeline-grid">
                                    <div className="hoc-timeline-item">
                                        <span className="hoc-timeline-val font-playfair">Jan 2026</span>
                                        <span className="hoc-timeline-sub font-raleway">ENROLMENT OPENS</span>
                                    </div>
                                    <div className="hoc-timeline-item">
                                        <span className="hoc-timeline-val font-playfair">14 Days</span>
                                        <span className="hoc-timeline-sub font-raleway">APPLICATION WINDOW</span>
                                    </div>
                                    <div className="hoc-timeline-item">
                                        <span className="hoc-timeline-val font-playfair">Mar 2026</span>
                                        <span className="hoc-timeline-sub font-raleway">PROGRAMME BEGINS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ─────────────────────────────────────────── */}
            <div className="hoc-stats-bar">
                {stats.map((s) => (
                    <div key={s.label} className="hoc-stat-item">
                        <span className="hoc-stat-number font-playfair">{s.number}</span>
                        <span className="hoc-stat-label font-raleway">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── Three Pillars ─────────────────────────────────────── */}
            <section className="hoc-pillars-section">
                <div className="hoc-section-inner">
                    <div className="hoc-section-eyebrow font-raleway">
                        <span className="hoc-eyebrow-line"></span> WHAT WE BUILD
                    </div>
                    <h2 className="hoc-section-heading font-playfair">
                        Three pillars. <em>One standard.</em>
                    </h2>
                    <div className="hoc-pillars-grid">
                        {pillars.map((p) => (
                            <div key={p.title} className="hoc-pillar-card">
                                <p className="hoc-pillar-label font-raleway">{p.label}</p>
                                <h3 className="hoc-pillar-title font-playfair">{p.title}</h3>
                                <p className="hoc-pillar-body font-raleway">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Three Divisions ───────────────────────────────────── */}
            <section className="hoc-divisions-section">
                <div className="hoc-section-inner">
                    <div className="hoc-section-eyebrow font-raleway">
                        <span className="hoc-eyebrow-line"></span> THREE DIVISIONS, ONE STANDARD
                    </div>
                    <h2 className="hoc-section-heading font-playfair">
                        Every athlete. <em>Every stage.</em>
                    </h2>
                    <div className="hoc-divs">
                        {divisions.map((d) => (
                            <div key={d.name} className="hoc-div">
                                <p className="hoc-div-tag font-raleway">{d.level}</p>
                                <h3 className="hoc-div-name font-playfair">{d.name}</h3>
                                <p className="hoc-div-ages font-raleway">{d.ages}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Two Column Info ───────────────────────────────────── */}
            <section className="hoc-info-section">
                <div className="hoc-section-inner">
                    <div className="hoc-gains">
                        <div className="hoc-gain">
                            <p className="hoc-gain-t font-raleway">WHAT YOUR CHILD WILL GAIN</p>
                            <p className="hoc-gain-b font-raleway">
                                The poise and presence to walk into any room with confidence. Formal dining,
                                etiquette, and social grace that sets them apart for life. A scholarship-ready
                                athletic résumé and NIL awareness years before their peers. A personal brand
                                that speaks before they do. A Grand Ceremony that marks each stage of their
                                journey — and a community of like-minded athletes who will become the leaders
                                of the next generation.
                            </p>
                        </div>
                        <div className="hoc-gain">
                            <p className="hoc-gain-t font-raleway">THIS IS NOT FOR EVERY FAMILY</p>
                            <p className="hoc-gain-b font-raleway">
                                This is not a camp or a weekend workshop. It is a full 44-week commitment —
                                every Sunday, for 11 months. It is not for families who want a certificate.
                                It is for families who understand that what is built on Sundays shows up at
                                the start line, in the boardroom, and in the legacy their child leaves behind.
                                230 students. One standard. One chance to be a Founding Family.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Quote ─────────────────────────────────────────────── */}
            <section className="hoc-quote-section">
                <div className="hoc-section-inner">
                    <div className="hoc-quote-card">
                        <p className="hoc-quote-text font-playfair">
                            "I have competed on the world's biggest stages and come from a family of professional
                            athletes. I have seen gifted young people fall short — not because of lack of talent,
                            but because no one prepared them for the complete picture. Hall of Champions was
                            built to close that gap."
                        </p>
                        <p className="hoc-quote-attr font-raleway">
                            DONNA CLARKE · OLYMPIAN & FOUNDER · HALL OF CHAMPIONS
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Sponsor ───────────────────────────────────────────── */}
            <section className="hoc-sponsor-section">
                <div className="hoc-section-inner hoc-sponsor-inner">
                    <div className="hoc-sponsor-left">
                        <p className="hoc-sponsor-eyebrow font-raleway">Support the Hall of Champions</p>
                        <h2 className="hoc-sponsor-heading font-playfair">
                            Sponsor an <em>athlete.</em><br />Leave a legacy.
                        </h2>
                        <div className="hoc-sponsor-gold-rule"></div>
                        <p className="hoc-sponsor-body font-raleway">
                            The Hall of Champions Cotillion is a charitable programme dedicated to ensuring
                            that every young athlete who belongs in this programme has the opportunity to
                            attend — regardless of financial circumstance. Your donation directly sponsors
                            an athlete's enrolment and development.
                        </p>
                        <p className="hoc-sponsor-body font-raleway">
                            Donors who contribute to the Hall of Champions Cotillion receive an official
                            charitable tax receipt. Sponsoring one athlete funds their full 44-week programme
                            — character formation, scholarship preparation, mental performance coaching, and
                            the Grand Ceremony that marks their achievement.
                        </p>
                        <p className="hoc-sponsor-quote font-playfair">
                            "Every athlete who walks through that door deserves to be there. A sponsor does not
                            just fund a programme — they change the trajectory of a life."
                        </p>
                        <p className="hoc-sponsor-quote-attr font-raleway">— Donna Clarke, Founder</p>
                        <h3 className="hoc-sponsor-ways-title font-playfair">Ways to Give</h3>
                        <ul className="hoc-sponsor-list font-raleway">
                            <li>Sponsor one athlete's full programme</li>
                            <li>Contribute to the Hall of Champions Cotillion general fund</li>
                            <li>Establish a named scholarship in your family or company name</li>
                            <li>Corporate sponsorship — align your brand with the Hall of Champions community</li>
                        </ul>
                        <Link to="/enquire" className="hoc-sponsor-btn font-raleway text-decoration-none text-center">
                            Enquire About Sponsoring an Athlete
                        </Link>
                    </div>

                    <div className="hoc-sponsor-right">
                        <div className="hoc-charity-card">
                            <div className="hoc-charity-badge">
                                <p className="hoc-charity-label font-raleway">Charitable Registration Number</p>
                                <p className="hoc-charity-number font-playfair">[Charitable Number]</p>
                                <p className="hoc-charity-org font-raleway">Donna Clarke Leadership LLC · Hall of Champions Cotillion</p>
                            </div>
                            <div className="hoc-tax-box">
                                <p className="hoc-charity-section-title font-raleway">Tax Receipt Information</p>
                                <p className="hoc-charity-body font-raleway">
                                    All donations to the Hall of Champions Cotillion are eligible for an official
                                    charitable tax receipt. Receipts are issued within 48 hours of gift confirmation.
                                    Donors in the highest Ontario tax bracket recover approximately 46 cents of every
                                    dollar donated.
                                </p>
                                <div className="hoc-charity-divider"></div>
                                <p className="hoc-charity-section-title font-raleway">How to Donate</p>
                                {['Online: donnaclarke.com/give','Cheque payable to: Donna Clarke Leadership LLC','E-transfer: giving@donnaclarke.com','Corporate wire transfer: contact giving@donnaclarke.com'].map(i => (
                                    <div key={i} className="brow font-raleway">
                                        {i}
                                    </div>
                                ))}
                                <div className="hoc-charity-divider"></div>
                                <p className="hoc-charity-section-title font-raleway">Donation Enquiries</p>
                                <p className="hoc-charity-contact font-raleway">
                                    giving@donnaclarke.com<br />donnaclarke.com/give
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hoc-footer-bar">
                <Link to="/enquire" className="hoc-btn-burg font-raleway text-decoration-none" style={{ marginRight: '12px' }}>
                    APPLY FOR THE PROGRAMME
                </Link>
                <Link to="/" className="hoc-btn-burg-outline font-raleway text-decoration-none">
                    RETURN HOME
                </Link>
            </div>
        </div>
    );
};

export default HallOfChampions;
