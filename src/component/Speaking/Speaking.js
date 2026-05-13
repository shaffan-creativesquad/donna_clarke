import React from 'react';
import { Link } from 'react-router-dom';
import './Speaking.css';

const Speaking = () => {
    const keynotes = [
        {
            cat: "Signature Keynote · Sports Families · Schools · Conferences",
            title: "The Champion Your Child Is Already Becoming",
            aud: "Corporate events, sports conferences, educational institutions, parent summits",
            body: "Donna's signature keynote on the intersection of sport, parenting, and the compound development of character. What it takes — not in theory, but in practice — to raise a child who uses sport to become a more complete human being. Features Donna's story, Denzel's story, and the specific research behind every claim she makes."
        },
        {
            cat: "Full-Day Workshop · Sports Families · Parent Evenings",
            title: "Nobody Told Me: The Sports Parent Masterclass",
            aud: "Sports families, parent evenings, club parent nights",
            body: "Everything Donna knows about being the environment in which an athletic child either thrives or plateaus. The Car Ride Home. The competition conversation. What to say when your child loses. How to understand the difference between pushing and pressure. The most useful parenting education available for a family with a serious young athlete."
        },
        {
            cat: "Corporate Keynote · Executive Audiences · Leadership Events",
            title: "What the Start Line Teaches the Boardroom",
            aud: "Corporate executives, leadership teams, C-suite events",
            body: "Donna's corporate keynote on performance under pressure, the discipline of preparation, and the leadership qualities that Olympic competition produces that business school cannot. Specific, personal, and applicable — not motivational. The room leaves with a different understanding of what high-performance looks like in any context."
        }
    ];

    const wisdom = [
        {
            title: "On The Body",
            body: "Your body is not your instrument. It is you. The athlete who trains their body as a separate concern from their mind trains the wrong relationship.",
            quote: "Feed it like it is sacred. Rest it like it is precious. Train it like it is capable of more than you have yet imagined."
        },
        {
            title: "On Raising Athletes",
            body: "You are not raising an athlete. You are raising a person who uses sport as the training ground for every other domain of their life. The discipline, the resilience — those belong to the human, not the sport.",
            quote: "What you say in the car on the way home matters more than what any coach says in any session. Learn what to say."
        },
        {
            title: "On Food & Performance",
            body: "Donna went to culinary school because she watched talented athletes hit ceilings in nutrition, not in physical performance. Food is not fuel. Food is formation.",
            quote: "The Champion's Table was built for the athlete who understands that the kitchen is the second training room."
        },
        {
            title: "On Mental Performance",
            body: "Mental performance is trained, not inherited. Like speed, strength, or technique, it is built through consistent practice, intentional challenge, and guided development.",
            quote: "The athlete who only knows how to win does not know who they are. Donna coaches both."
        },
        {
            title: "On Strength",
            body: "Strength builds the foundation for movement, performance, and resilience. For developing athletes, it is essential — not optional.",
            quote: "Strength is the foundation of performance — I learned it as an Olympian and passed it on, raising a professional athlete."
        },
        {
            title: "On The Long Game",
            body: "The window between 8 and 18 is not a performance window. It is a human formation window. Every year that passes without intentional development is a year that cannot be reclaimed.",
            quote: "The athletes who are 8 years old today will run the next generation. The work starts now."
        }
    ];

    return (
        <div className="speak-page">
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="speak-hero">
                <div className="speak-hero-inner">
                    <div className="speak-hero-content">
                        <div className="ey ey-burg">Donna Speaks. Rooms Change.</div>
                        <h1 className="display-h display-h-lt speak-hero-h1">
                            Keynotes. Workshops.<br />
                            <em>Parent programmes.</em>
                        </h1>
                        <div className="speak-hero-divider"></div>
                        <p className="speak-hero-lede">
                            A 1984 Olympian who raised a Major Leaguer does not deliver motivational keynotes. She delivers perspective — earned truth, the kind that reshapes how a room thinks about performance, parenting, leadership, and the long game.
                        </p>
                        <p className="speak-hero-p">
                            Every keynote is drawn from real experience — the Olympic start line, the 20-year development of a professional athlete, and 40 years of coaching and consulting. Every workshop produces tangible tools the audience uses the same week.
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
                            The presentations that<br />
                            <em>earn their standing ovation.</em>
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
                        <div className="ey" style={{ justifyContent: 'center' }}>Donna's Wisdom</div>
                        <h2 className="display-h" style={{ textAlign: 'center' }}>
                            What forty years of elite sport<br />
                            taught me about <em>everything else.</em>
                        </h2>
                        <p className="lede font-playfair" style={{ textAlign: 'center', margin: '0 auto' }}>
                            Donna does not dispense motivation. She dispenses truth — earned truth, the kind that only arrives after you have actually done the thing.
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
