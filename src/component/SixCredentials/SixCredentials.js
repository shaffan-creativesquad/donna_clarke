import React from 'react';
import './SixCredentials.css';

const credentials = [
    {
        number: '01',
        title: '1984 Los Angeles Olympics',
        tags: ['HEPTATHLON', 'TEAM CANADA', 'PICKERING, ONTARIO'],
        body: 'Seven events over two days — the heptathlon demands breadth, not depth. The athlete who completes it has learned something no specialist ever encounters: that the complete human being outperforms the partial specialist. That understanding is the foundation of everything Donna teaches.',
        quote: 'Olympic competition teaches what no classroom can: how to perform under maximum pressure, when your entire preparation is on the line. Donna teaches this from the inside.',
    },
    {
        number: '02',
        title: 'Master of Science — High Performance Coaching',
        tags: ['GRADUATE RESEARCH', 'ATHLETE DEVELOPMENT SCIENCE'],
        body: 'Donna returned to graduate study because she was watching athletes hit developmental ceilings that coaching tradition could not explain. The M.Sc gave her the research foundation: LTAD principles, periodisation science, and the capacity to evaluate a training programme not by whether it felt right — but by whether the science supported it.',
        quote: 'Every recommendation Donna makes is evidence-based. The M.Sc is the methodology behind every development plan she writes.',
    },
    {
        number: '03',
        title: 'Certified Mental Performance Coach',
        tags: ['ATHLETES AGES 8–18'],
        body: 'Donna went to mental performance coaching first, not last. For athletes in the 8–18 window, mental performance is identity development. The way a 12-year-old thinks about themselves in competition becomes the template for every competitive experience they will have for the next decade.',
        quote: 'The athletic body without the athletic mind is not a complete athlete. Mental performance coaching is not the finishing touch — it is the infrastructure.',
    },

    {
        number: '04',
        title: 'Culinary School — Honours Graduate',
        tags: ['Performance Nutrition Specialist', 'Sport Meals', 'The Champion\'s Table'],
        body: 'Donna graduated with Honours and developed a specialisation in sport meals and performance nutrition for athletes ages 8–18 — whose nutritional needs during development are categorically different from adult athletes. Food is not fuel. It is formation.',
        quote: 'Culinary school gave Donna the ability to turn nutritional knowledge into meals a family can actually prepare, serve, and eat together on a Tuesday evening.',
    },
    {
        number: '05',
        title: 'Certified Marketing & Branding — Athletes',
        tags: ['NIL Strategy', 'Athlete Identity', 'Professional Positioning'],
        body: 'Every young athlete is already building a brand — whether they know it or not. Donna completed this certification because she watched talented athletes arrive at the threshold of a professional career underprepared for what that moment required. For athletes ages 13–18, NIL is happening now — and the families who understand that earliest will always be ahead.',
        quote: 'Athlete brand development is the career asset that outlasts the athletic career.',
    },
    {
        number: '06',
        title: 'Proud Mom of Denzel Clarke',
        tags: ['Oakland Athletics', 'Center Fielder', 'MLB Debut 2025'],
        body: 'Denzel Clarke grew up in Pickering, Ontario, raised with Donna’s integrated system applied across twenty years — in one household, on one person. The Olympic discipline. The coaching science. The mental performance work. The nutrition. The branding. All of it. Denzel made it. The methodology is proven.',
        quote: 'Donna’s experience as Denzel’s mom is not a marketing statement. It is the proof of concept for everything she teaches.',
    },
];

const SixCredentials = () => {
    return (
        <section className="sixcred-section">
            {/* ── Top Header Row ── */}
            <div className="sixcred-header">
                <div className="sixcred-header-left">
                    <div className="sixcred-eyebrow">
                        <span className="sixcred-eyebrow-line"></span>
                        <span className="sixcred-eyebrow-text font-raleway">SIX CREDENTIALS</span>
                    </div>
                    <h2 className="sixcred-title font-playfair">
                        Six credentials.<br/> <em className="sixcred-title-em font-playfair">One reason.</em>
                    </h2>
                </div>
                <div className="sixcred-header-right">
                    <p className="sixcred-header-body font-playfair">
                        Every qualification Donna holds was earned because an athlete she cared about needed something she didn't yet know how to give them.
                    </p>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="sixcred-divider"></div>

            {/* ── Cards Grid ── */}
            <div className="sixcred-grid">
                {credentials.map((cred) => (
                    <div className="sixcred-card" key={cred.number}>
                        <span className="sixcred-number font-playfair">{cred.number}</span>
                        <h3 className="sixcred-card-title ">{cred.title}</h3>
                        <div className="sixcred-tags font-raleway">
                            {cred.tags.map((tag, i) => (
                                <React.Fragment key={i}>
                                    <span className="sixcred-tag">{tag}</span>
                                    {i < cred.tags.length - 1 && (
                                        <span className="sixcred-tag-dot">·</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="sixcred-card-body font-raleway">{cred.body}</p>
                        <div className="sixcred-quote-divider"></div>
                        <p className="sixcred-card-quote font-cormorant">{cred.quote}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SixCredentials;
