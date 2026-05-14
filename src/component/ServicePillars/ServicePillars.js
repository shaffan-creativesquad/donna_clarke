import React from 'react';
import './ServicePillars.css';

const pillars = [
    {
        number: '01',
        subtitle: 'Structure Precedes Success',
        title: 'Athlete Development',
        description: 'Athletes need more than training. They need a pathway — one that evolves with age, growth, and readiness. Donna builds it around each athlete individually, ensuring physical, technical, and tactical progression compounds over time rather than plateauing prematurely.',
        points: [
            'LTAD-compliant multi-year development planning',
            'Multi-sport development in the foundation years',
            'Smart specialisation at the right developmental stage',
            'Family education on each phase of the journey'
        ],
        footer: 'Without a clear pathway, talent is often mismanaged before it is ever fully expressed.'
    },
    {
        number: '02',
        subtitle: 'The Infrastructure',
        title: 'Mental Performance',
        description: 'She builds this first — not last. Identity under pressure, resilience when results fluctuate, the mental pattern that either holds or fractures when the moment arrives. Most coaches address mental performance reactively. Donna builds it as the load-bearing structure from the beginning.',
        points: [
            'Individual mental performance assessment',
            'Pre-competition preparation and identity work',
            'Resilience building — who am I when results go wrong?',
            'Parent coaching on the words that build versus the words that break'
        ],
        footer: 'The athlete who arrives prepared mentally arrived that way because someone built it in early.'
    },
    {
        number: '03',
        subtitle: 'Home Is the First Institution',
        title: 'Performance Nutrition',
        description: 'Growing athletes have nutritional needs categorically different from adult athletes — and almost no one is addressing this practically. Donna graduated with Honours in this area specifically because the gap between the science and the family kitchen was too large. She closes it with meals that work on a Tuesday evening, not just on competition day.',
        points: [
            'Nutritional assessment for the developing athlete',
            'Practical meal planning for athletic families',
            'Competition and training-day fuelling protocols',
            'The Champion\'s Table cookbook and digital resources'
        ],
        footer: 'What happens at the table shapes what is available on the field.'
    },
    {
        number: '04',
        subtitle: 'Formation Before Visibility',
        title: 'Athlete Identity & Brand',
        description: 'Every young athlete is already building a reputation long before they realise it. Character, values, and public identity must be built deliberately before visibility arrives — because when recognition comes ahead of foundation, the fracture is public. Donna helps athletes build the infrastructure that can carry what their ability earns.',
        points: [
            'Character, values, and personal identity formation',
            'NIL education and preparation for ages 13–18',
            'Social media presence and content strategy',
            'Profile development for college recruitment and scholarship positioning'
        ],
        footer: 'An athlete\'s identity travels further than their performance.'
    },
    {
        number: '05',
        subtitle: 'Preparation Over Performance',
        title: 'Pathway Awareness',
        description: 'Talent alone does not determine outcomes — understanding the system matters. The families who navigate the professional development pathway correctly are the ones who began understanding it before they needed to. Donna helps families make informed decisions at key stages, before the pressure of those decisions makes clarity difficult.',
        points: [
            'Professional pathway planning and timeline strategy',
            'Club, college, and professional programme navigation',
            'Contract and representation guidance',
            'Reducing the costly mistakes caused by misinformation'
        ],
        footer: 'The wrong decision at the wrong time can limit long-term potential in ways that are difficult to recover.'
    },
    {
        number: '06',
        subtitle: 'THE MULTIPLIER',
        title: 'Family & Environment',
        description: 'The athlete\'s environment — especially at home — is one of the strongest predictors of long-term success. Parental involvement that is informed, values-aligned, and intentionally cultivated is the variable most consistently linked to sustained athletic development. Donna works on both sides of this relationship.',
        points: [
            '“Nobody Told Me” Parent Masterclass — live and virtual',
            '“The Car Ride Home” — what to say in the 20 minutes that matter most',
            'Family alignment with the athlete\'s development framework',
            'Communication strategies for parents at every level'
        ],
        footer: 'No athlete develops in isolation. The environment either supports growth or restricts it.'
    }
];

const ServicePillars = () => {
    return (
        <section className="service-pillars-section">
            <div className="service-pillars-container">

                {/* ── Header ── */}
                <div className="pillars-header">
                    <div className="pillars-eyebrow">
                        <span className="pillars-eyebrow-line"></span>
                        <span className="pillars-eyebrow-text font-raleway">The Six-Pillar Framework</span>
                    </div>
                    <h2 className="pillars-title">
                        What Donna builds<br />
                        <em className="pillars-title-em">around every athlete.</em>
                    </h2>
                    <p className="pillars-body font-playfair">
                        Donna works with athletes ages 8 to 18 and the families who are raising them.
                        Every engagement begins with the Integrated Development Plan — a complete
                        map of where the athlete is across all pillars, and where the gaps are. She does not
                        allow performance to outpace structure. She has seen what happens when it does.
                    </p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="pillar-card">
                            <div className="pillar-header">
                                <span className="pillar-number font-playfair">{pillar.number}</span>
                                <span className="pillar-subtitle font-raleway">{pillar.subtitle}</span>
                            </div>
                            <h3 className="pillar-title font-playfair">{pillar.title}</h3>
                            <p className="pillar-description font-raleway">{pillar.description}</p>
                            
                            <ul className="pillar-points-list">
                                {pillar.points.map((point, i) => (
                                    <li key={i} className="pillar-point font-raleway">
                                        <span className="pillar-dash">—</span> {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="pillar-divider"></div>
                            
                            <p className="pillar-footer font-cormorant">{pillar.footer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePillars;
