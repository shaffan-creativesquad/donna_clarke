import React from 'react';
import { Link } from 'react-router-dom';
import './Speaking.css';

const Speaking = () => {
    const keynotes = [
        {
            cat: "Signature Keynote · Sports Families · Schools · Conferences",
            title: "The Champion Your Child Is Already Becoming",
            aud: "Corporate events, sports conferences, educational institutions, parent summits",
            body: "Not a story about raising a professional athlete. A talk about the formation that made it possible — the household rhythms, the standards, the conversations, the quiet work that most families never see because it does not happen on a field. What it actually takes, from the inside, told without sentimentality and without simplification."
        },
        {
            cat: "Full-Day Workshop · Sports Families · Parent Evenings",
            title: "Nobody Told Me: The Sports Parent Masterclass",
            aud: "Sports families, parent evenings, club parent nights",
            body: "The parent is the most influential coach in any athlete's life — and the least prepared. This is the masterclass that closes that gap. The Car Ride Home. The competition conversation. What to say when your child loses. How to understand the difference between structure and pressure. The most practically useful day available to a family with a serious young athlete."
        },
        {
            cat: "Corporate Keynote · Executive Audiences",
            title: "What the Start Line Teaches the Boardroom",
            aud: "Corporate executives, leadership teams, C-suite events",
            body: "Performance under pressure. The discipline of preparation. The leadership that Olympic competition produces that business school cannot. This is not a motivational keynote. It is a recalibration of what high performance actually looks like when you strip away the noise — drawn from the only place it can be drawn from honestly: having actually stood at that start line."
        }
    ];

    const wisdom = [
        {
            title: "Structure Precedes Success",
            body: "Strong outcomes are the product of disciplined systems, not accidental momentum. In a culture that celebrates performance before preparation, Donna reinforces the primacy of structure — not as rigid control, but as the committed work of building environments strong enough to carry the people inside them.",
            quote: "She does not wait for pressure to force structure into place. She pays attention to what is in front of her and builds before the weakness is exposed."
        },
        {
            title: "Home Is the First Institution",
            body: "Leadership begins inside the household before it is expressed publicly. Parents must remain structurally involved in their children's formation — not as a rejection of community, but as an act of responsibility. The household rhythm, the meals, the standards, the conversations are not peripheral to development. They are its foundation.",
            quote: "What you say in the car on the way home matters more than what any coach says in any session. That is not an accident. That is the weight of the relationship."
        },
        {
            title: "Preparation Over Performance",
            body: "Her philosophy does not avoid competition. It strengthens individuals for it. Readiness over recognition. The refusal to rush development for applause. Long-term preparation through strategic planning, disciplined pacing, and the patient work of building a person before placing them on a platform that will reveal everything their foundation cannot hold.",
            quote: "She does not allow performance to outpace structure — because she has seen how fragile results become when the foundation is thin."
        },
        {
            title: "On The Body",
            body: "Your body is not your instrument. It is you. The athlete who trains the body as separate from the mind trains the wrong relationship. Formation is physical, mental, nutritional, and relational — all at once, all the time.",
            quote: "Feed it like it is sacred. Rest it like it is precious. Train it like it is capable of more than you have yet imagined."
        },
        {
            title: "On Formation",
            body: "Children and families should be shaped intentionally — not left to adapt to whatever system is loudest or most convenient. Formation does not happen by default. It happens by design, by decision, and by the consistent application of a standard that does not move when culture shifts.",
            quote: "She treats the home as the first place identity is shaped — knowing that anything placed on a platform without grounding eventually fractures."
        },
        {
            title: "On The Long Game",
            body: "The window between 8 and 18 is not a performance window. It is a human formation window. Every year that passes without intentional development is a year that cannot be reclaimed — not because of what is missed, but because of what calcifies in its place.",
            quote: "The athletes who are 8 years old today will lead the next generation. The work starts now. Quietly. Structurally. Before anyone is watching."
        }
    ];

    return (
        <div className="speak-page">
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="speak-hero">
                <div className="speak-hero-inner">
                    <div className="speak-hero-content">
                        <div className="ey ey-burg">Donna Speaks.</div>
                        <h1 className="display-h display-h-lt speak-hero-h1">
                            Not motivation.<br />
                            <em>Perspective.</em>
                        </h1>
                        <div className="speak-hero-divider"></div>
                        <p className="speak-hero-lede">
                            A 1984 Olympian who raised a Major League Baseball player does not deliver motivational keynotes. She delivers the kind of perspective that reshapes how a room thinks — about performance, about parenting, about what it actually means to build something that lasts.
                        </p>
                        <p className="speak-hero-p">
                            Her work does not move in response to cultural urgency or public trends. It moves from conviction. Every keynote is drawn from real experience — the Olympic start line, twenty years of formation, 40 years of building — and every audience leaves with something they will use the same week.
                        </p>
                        <div className="speak-hero-btn-wrap">
                            <Link to="/enquire" className="speak-btn-gold font-raleway text-decoration-none">
                                Speaking Enquiries
                            </Link>
                        </div>
                    </div>
                    <div className="speak-hero-image-wrap">
                        <div className="speak-hero-img">
                            <div className="speak-hero-placeholder">
                             On stage, keynote setting <br />
                                1600 × 900px · Landscape
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Three Keynotes ────────────────────────────────────── */}
            <section className="sec-ivory">
                <div className="speak-container">
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                        <div className="ey" style={{ justifyContent: 'center' }}>Three Keynotes</div>
                        <h2 className="display-h" style={{ textAlign: 'center' }}>
                            The rooms that leave<br />
                            <em>differently than they arrived.</em>
                        </h2>
                    </div>
                    <div className="speak-grid">
                        {keynotes.map((k, idx) => (
                            <div key={idx} className="speak-card">
                                <div className="speak-cat font-raleway">{k.cat}</div>
                                <h3 className="speak-title font-playfair">{k.title}</h3>
                                <div className="speak-aud font-raleway">{k.aud}</div>
                                <p className="speak-body font-raleway">{k.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Donna's Wisdom ────────────────────────────────────── */}
            <section className="sec-cream">
                <div className="speak-container">
                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <div className="ey" style={{ justifyContent: 'center' }}>Three Convictions</div>
                        <h2 className="display-h" style={{ textAlign: 'center' }}>
                            The beliefs behind<br />
                            <em>everything she builds.</em>
                        </h2>
                        <p className="lede font-playfair" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '560px' }}>
                            Donna does not dispense motivation. She dispenses truth — the kind that only arrives after you have actually done the thing, paid the cost, and lived with the result.
                        </p>
                    </div>
                    <div className="wisdom-grid">
                        {wisdom.map((w, idx) => (
                            <div key={idx} className="wis-card">
                                <div className="wis-title font-raleway">{w.title}</div>
                                <p className="wis-body font-raleway">{w.body}</p>
                                <div className="wis-q font-playfair">{w.quote}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Footer Bar ────────────────────────────────────────── */}
            <div className="hoc-footer-bar">
                <Link to="/enquire" className="hoc-btn-burg font-raleway text-decoration-none" style={{ marginRight: '12px' }}>
                    SUBMIT A SPEAKING ENQUIRY
                </Link>
                <Link to="/" className="hoc-btn-burg-outline font-raleway text-decoration-none">
                    RETURN HOME
                </Link>
            </div>
        </div>
    );
};

export default Speaking;
