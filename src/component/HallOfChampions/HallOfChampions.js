import React from 'react';
import { Link } from 'react-router-dom';
import './HallOfChampions.css';

/* ─── Data ──────────────────────────────────────────────────── */

const pillars = [
    {
        label: 'PILLAR ONE',
        title: 'Character',
        body: 'Spiritual values, etiquette, social grace, and the quiet confidence that enters a room before the athlete does. The qualities that determine how a young person carries themselves when no one is watching — and how those qualities compound over a lifetime.',
    },
    {
        label: 'PILLAR TWO',
        title: 'Scholarship',
        body: 'NIL awareness, recruiting preparation, and the personal brand that makes coaches reach out first. The professional infrastructure behind the athletic ability — the part most families never build until pressure exposes its absence.',
    },
    {
        label: 'PILLAR THREE',
        title: 'Excellence',
        body: 'Mental performance, elite wellness, and a Grand Ceremony that marks each stage of the journey. The habits of excellence that, built consistently over 44 sessions, turn a talented athlete into a complete one.',
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
                        <div className="hoc-tag-wrapper">
                            <div className="hoc-tag-accent-line"></div>
                            <div className="hoc-tag-box font-raleway">
                                Donna Clarke Leadership · Premier Formation Programme
                            </div>
                            <div className="hoc-tag-subtext font-playfair">
                                EST. 2000
                            </div>
                        </div>

                        <div className="hoc-eyebrow-container">
                            <span className="hoc-eyebrow-dash"></span>
                            <p className="hoc-eyebrow font-raleway">
                                A Letter to the Families Who See What Others Miss
                            </p>
                        </div>

                        <h1 className="hoc-hero-heading">
                            Hall of<br />
                            <em>Champions.</em>
                        </h1>

                        <div className="hoc-hero-divider"></div>

                        <p className="hoc-hero-body font-raleway">
                            You have watched your child dedicate themselves to a sport with a level of commitment that most adults will never understand. Early mornings. Late practices. Sacrificed weekends. You have driven the miles, paid the fees, and sat in the bleachers through every win and every loss.
                        </p>
                        <p className="hoc-hero-body font-raleway">
                            And you have noticed something the other parents have not yet seen — that the game alone will never be enough. That talent without character is a roof without a foundation. That the young athletes who go on to earn scholarships, sign NIL deals, and lead in every room they enter are the ones who were prepared for all of it — not just the sport.
                        </p>
                        <p className="hoc-hero-body font-raleway">
                            The families Donna built Hall of Champions for are not looking for a programme. They are looking for a standard. They understand that what is built in this programme shows up at the start line, in the boardroom, and in the legacy their child leaves behind.
                        </p>
                        <h2 className="hoc-hero-bold font-playfair">
                            Hall of Champions was built for exactly that child. And for exactly that family.
                        </h2>

                    </div>

                    <div className="hoc-hero-right">
                        <div className="hoc-founding-card">
                            <h3 className="hoc-founding-card-title font-playfair">
                                Ready to Be Part of Something That Lasts?
                            </h3>
                            <p className="hoc-founding-card-body font-raleway">
                                Hall of Champions is accepting registrations. Every athlete who walks through this programme leaves with something that performance alone cannot build — the character, presence, and preparation to lead in every room they enter.
                            </p>
                            <p className="hoc-founding-card-body font-raleway">
                                Submit an enquiry to learn about the current intake, programme dates, and how to register your athlete.
                            </p>

                            <Link to="/enquire" className="hoc-gold-btn font-raleway text-decoration-none text-center">
                                Register Your Athlete
                            </Link>

                            <a href="mailto:DONNA@DONNACLARKE.COM" className="hoc-email-btn font-raleway text-decoration-none text-center">
                                donna@donnaclarke.com
                            </a>

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
                        <span className="hoc-eyebrow-line"></span> Three Divisions, One Standard
                    </div>
                    <h2 className="hoc-section-heading font-playfair">
                        Every stage of development.  <em>One standard of formation.</em>
                    </h2>
                    <p className="hoc-section-body font-raleway">This is not a camp or an enrichment activity. It is a 44-week formation programme designed to build the qualities that allow athletic talent to compound into a lasting career — and a lasting person.</p>
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
                            <p className="hoc-gain-t font-raleway">WHAT YOUR CHILD GAINS</p>
                            <p className="hoc-gain-b font-raleway">
                                The poise and presence to walk into any room with confidence. Formal etiquette and social grace that sets them apart for life. A scholarship-ready athletic résumé and NIL awareness years before their peers. A personal brand that speaks before they do. A Grand Ceremony that marks each stage of their journey — and a community of like-minded athletes who will become the leaders of the next generation.
                            </p>
                        </div>
                        <div className="hoc-gain">
                            <p className="hoc-gain-t font-raleway">This Is Not For Every Family</p>
                            <p className="hoc-gain-b font-raleway">
                                This is a full 44-week commitment over eleven months. It is not for families who want a certificate. It is for families who understand that what is built quietly, consistently, in this programme, is what shows up at the start line, in the boardroom, and in the legacy their child leaves behind. 230 students. One standard.
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
                            "I have competed on the world's biggest stages. I have seen what talent looks like without character — and what character looks like without talent. Hall of Champions was built for the young athlete who is going to need both. It was built because formation cannot wait until pressure arrives."
                        </p>
                        <p className="hoc-quote-attr font-raleway">
                            Donna Clarke · Olympian & Founder · Hall of Champions
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
                            Support our athletes. <br /> <em>Invest in the next generation.</em>
                        </h2>
                        <div className="hoc-sponsor-gold-rule"></div>
                        <p className="hoc-sponsor-body font-raleway">
                            The Hall of Champions is a Cotillion-type preparatory programme — modelled after the great institutions that have long understood that character, scholarship, and presence must be cultivated deliberately, not left to chance. Families invest in this programme because they believe in what it builds.
                        </p>
                        <p className="hoc-sponsor-body font-raleway">
                            In addition, we have a giving programme in place for athletes of exceptional character and potential, regardless of financial status — because the right young person should never be turned away for lack of means. Candidates for this pathway come by referral only and are assessed on the strength of their character, commitment, and the recommendation of those who know them well.
                        </p>
                        <p className="hoc-sponsor-body font-raleway">
                            If you believe in the formation of the next generation of athletes and leaders, we welcome your support. Every contribution goes directly toward expanding access to this programme for athletes who have earned the right to be here.
                        </p>
                        <p className="hoc-sponsor-quote font-playfair">
                            "Every exceptional athlete who earns their place here deserves the opportunity to attend. Our giving programme exists to make that possible — for the right young person, with the right recommendation."
                        </p>
                        <p className="hoc-sponsor-quote-attr font-raleway">— Donna Clarke, Founder</p>
                        <h3 className="hoc-sponsor-ways-title font-playfair">Ways to Support</h3>
                        <ul className="hoc-sponsor-list font-raleway">
                            <li>Support athlete access through the Hall of Champions giving programme</li>
                            <li>Establish a named contribution in your family or company name</li>
                            <li>Corporate partnership — align your organisation with the Hall of Champions community</li>
                            <li>Enquire about our referral process for exceptional athletes</li>
                        </ul>
                        <Link to="/enquire" className="hoc-sponsor-btn font-raleway text-decoration-none">
                            ENQUIRE ABOUT SUPPORTING AN ATHLETE
                        </Link>
                    </div>

                    <div className="hoc-sponsor-right">
                        <div className="hoc-charity-card">
                            <div className="hoc-charity-badge">
                                <p className="hoc-charity-label font-raleway">Giving Programme · Registration</p>
                                <p className="hoc-charity-number font-playfair">[Charitable #]</p>
                                <p className="hoc-charity-org font-raleway">Donna Clarke Leadership · Hall of Champions Cotillion</p>
                            </div>
                            <div className="hoc-tax-box">
                                <p className="hoc-charity-section-title font-raleway">Contribution Information</p>
                                <p className="hoc-charity-body font-raleway">
                                    For those who wish to support access to the Hall of Champions programme for deserving athletes, we have a giving programme in place. Contributions support athlete development and are acknowledged with our gratitude. Please contact us directly to discuss how you can be part of what we are building.
                                </p>
                                <div className="hoc-charity-divider"></div>
                                <p className="hoc-charity-section-title font-raleway">How to Give</p>
                                <p className="hoc-charity-body font-raleway" style={{ marginBottom: 0 }}>
                                    Online only — a link will be provided upon enquiry
                                </p>
                                <div className="hoc-charity-divider"></div>
                                <p className="hoc-charity-section-title font-raleway">Donation Enquiries</p>
                                <p className="hoc-charity-contact font-raleway">
                                    giving@donnaclarke.com
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
