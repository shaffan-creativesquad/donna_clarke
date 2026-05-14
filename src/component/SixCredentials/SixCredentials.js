import React from 'react';
import './SixCredentials.css';

const credentials = [
    {
        number: '01',
        title: '1984 Los Angeles Olympics',
        tags: ['HEPTATHLON', 'TEAM CANADA'],
        body: 'Seven events. The heptathlon does not reward the specialist — it rewards the complete human being. This is not a credential she carries. It is a conviction she never set down. Excellence is never accidental. Preparation always precedes recognition. She has known this since she stood on that track, and it has shaped every environment she has built since.',
        quote: 'The medal is the outcome. The structure that produced it is what she teaches.',
    },
    {
        number: '02',
        title: 'Proud Mom of Denzel Clarke',
        tags: ['ATHLETICS MLB', 'CENTER FIELDER', 'THE PROOF OF CONCEPT'],
        body: 'This is twenty years of applied methodology — every certification, every conviction, every household standard — used simultaneously, on one person, across one lifetime of formation. Denzel Clarke made it to the Major Leagues not because of talent alone but because of the environment that was built around him. That environment is reproducible. That is the work.',
        quote: 'Her experience as Denzel\'s mother is the proof that the system works when it is built completely.',
    },
    {
        number: '03',
        title: 'Master of Science — High Performance Coaching',
        tags: ['GRADUATE RESEARCH', 'ATHLETE DEVELOPMENT SCIENCE', 'IN PURSUIT'],
        body: 'She returned to study because high-performance coaching principles were not trickling down to the developmental years — the very years when they matter most. This pursuit gave her the evidence base to bring elite sport science to where it is needed earliest: the 8-to-18 window, where the decisions are irreversible and the standards must be highest.',
        quote: 'Evidence-based development. Every recommendation grounded in science, not sentiment.',
    },
    {
        number: '04',
        title: 'Culinary School — Honours Graduate',
        tags: ['Performance Nutrition Specialist', 'The Champion\'s Table'],
        body: 'She graduated with Honours and developed a specialisation in sport meals for athletes ages 8–18 — whose nutritional needs during development are categorically different from adult athletes. What happens at the table shapes what is available on the field. The Champion\'s Table is this conviction made practical.',
        quote: 'Food is not fuel. Food is formation. The kitchen is the second training room.',
    },
    {
        number: '05',
        title: 'Certified Mental Performance Coach',
        tags: ['The Infrastructure', 'Not the Finishing Touch'],
        body: 'Most coaches arrive at mental performance after they have already watched talent underperform. Donna arrived at it first — because she understood that identity formed under pressure without preparation fractures. For athletes in the 8–18 window, mental performance is not a supplement. It is the foundation from which everything else runs.',
        quote: 'The athletic body without the athletic mind is not a complete athlete.',
    },
    {
        number: '06',
        title: 'Certified Marketing & Branding — Athletes',
        tags: ['Identity Built Before It Is Needed'],
        body: 'She completed this certification because she watched talented athletes reach the professional threshold without the infrastructure to carry what their ability had earned them. Identity, brand, and public presence are part of the formation that must be built before visibility arrives — because when recognition comes ahead of foundation, the fracture is public.',
        quote: 'The athlete who arrives at the threshold prepared is the one who was built for it quietly, in advance.',
    },
];

const Card = ({ cred }) => (
    <div className="sixcred-card">
        <span className="sixcred-number font-playfair">{cred.number}</span>
        <h3 className="sixcred-card-title font-playfair">{cred.title}</h3>
        <div className="sixcred-tags font-raleway">
            {cred.tags.map((tag, i) => (
                <React.Fragment key={i}>
                    <span className="sixcred-tag">{tag}</span>
                    {i < cred.tags.length - 1 && <span className="sixcred-tag-dot">·</span>}
                </React.Fragment>
            ))}
        </div>
        <p className="sixcred-card-body font-raleway">{cred.body}</p>
        <div className="sixcred-quote-divider"></div>
        <p className="sixcred-card-quote font-playfair">{cred.quote}</p>
    </div>
);

const SixCredentials = () => {
    return (
        <section className="sixcred-section" id="six-credentials">

            {/* ── Top Header: two-column ── */}
            <div className="sixcred-header">
                <div className="sixcred-header-left">
                    <div className="sixcred-eyebrow">
                        <span className="sixcred-eyebrow-line"></span>
                        <span className="sixcred-eyebrow-text font-raleway">The Foundation Behind the Work</span>
                    </div>
                    <h2 className="sixcred-title">
                        Six areas of study.<br />
                        <em className="sixcred-title-em">One reason for all of <br/>them.</em>
                    </h2>
                </div>
                <div className="sixcred-header-right">
                    <p className="sixcred-header-body font-playfair">
                        Every credential Donna holds was earned because a child she cared about —
                        often her own — needed something she didn't yet know how to give them. None
                        of it was pursued for the credential. All of it was pursued for the outcome.
                    </p>
                </div>
            </div>

            <div className="sixcred-inner">
                {/* ── Section Bar 1 ── */}
                <div className="sixcred-section-bar">
                    <span className="sixcred-section-bar-title font-playfair">
                        The Athlete &amp; <em>Her Legacy.</em>
                    </span>
                </div>
                <div className="sixcred-grid">
                    {credentials.slice(0, 2).map(cred => <Card key={cred.number} cred={cred} />)}
                </div>

                {/* ── Section Bar 2 ── */}
                <div className="sixcred-section-bar">
                    <span className="sixcred-section-bar-title font-playfair">
                        The Studies &mdash; <em>Science Meets the Kitchen Table.</em>
                    </span>
                </div>
                <div className="sixcred-grid">
                    {credentials.slice(2, 4).map(cred => <Card key={cred.number} cred={cred} />)}
                </div>

                {/* ── Section Bar 3 ── */}
                <div className="sixcred-section-bar">
                    <span className="sixcred-section-bar-title font-playfair">
                        Certifications &mdash; <em>Built Before They Were Needed.</em>
                    </span>
                </div>
                <div className="sixcred-grid sixcred-grid-last">
                    {credentials.slice(4).map(cred => <Card key={cred.number} cred={cred} />)}
                </div>
            </div>

        </section>
    );
};

export default SixCredentials;
