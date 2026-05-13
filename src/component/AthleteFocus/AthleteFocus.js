import React from 'react';
import './AthleteFocus.css';

const stages = [
    {
        ageLabel: 'AGES 8–12',
        title: 'Foundations',
        subtitle: 'THE FOUNDATION YEARS',
        body: 'Multi-sport development, physical literacy, the joy of sport, and the first formation of athletic identity. Mental performance habits appropriate to age, nutrition education through the family, and the parent-athlete relationship patterns that will shape the next decade.',
        items: [
            'Multi-sport athlete development consulting',
            'Mental performance foundations — age-appropriate',
            'Parent coaching: establishing the right household culture',
            'Nutrition education for the whole family',
        ],
        colorClass: 'stage-foundations',
    },
    {
        ageLabel: 'AGES 13–15',
        title: 'Identity',
        subtitle: 'THE IDENTITY YEARS',
        body: 'The most underserviced developmental window in youth sport. Physical development accelerates, competitive pressure increases, and the athlete begins to construct a public identity. Mental performance work is most impactful here. Brand and social identity work begins.',
        items: [
            'Athlete development planning — specialisation decisions',
            'Mental performance coaching: identity and resilience',
            'Brand and social identity introduction',
            'NIL education — what is available now',
            'Parent coaching: managing the identity years',
        ],
        colorClass: 'stage-identity',
    },
    {
        ageLabel: 'AGES 15–18',
        title: 'Threshold',
        subtitle: 'THE PROFESSIONAL THRESHOLD',
        body: 'College recruitment, scholarship applications, agent relationships, first contracts, NIL activation. Most athletes and families are completely unprepared for this window. Donna prepares them in advance so that when the opportunities arrive, the athlete can take them.',
        items: [
            'Sports management: professional pathway planning',
            'Athlete brand and NIL activation strategy',
            'College and scholarship application positioning',
            'Contract and representation guidance',
            'Transition planning: amateur to professional',
        ],
        colorClass: 'stage-threshold',
    },
];

const AthleteFocus = () => {
    return (
        <>
            <section className="athlete-focus-section">
                <div className="athlete-focus-container">
                    <div className="athlete-focus-eyebrow">
                        <span className="focus-eyebrow-line"></span>
                        <span className="focus-eyebrow-text font-raleway">THE ATHLETE DONNA WORKS WITH</span>
                    </div>

                    <h2 className="athlete-focus-heading font-playfair">
                        Ages 8 to 18.<br />
                        <em className="focus-heading-accent font-playfair">The formation window.</em>
                    </h2>

                    <p className="athlete-focus-body font-playfair">
                        Not the finished product. The one being formed right now. This is where the decisions
                        that matter most are made — and where the quality of support available to most
                        athletes is most inadequate.
                    </p>
                </div>
            </section>

            <div className="athlete-stages-grid">
                {stages.map((stage) => (
                    <div key={stage.title} className={`athlete-stage-card ${stage.colorClass}`}>
                        <p className="stage-age-label font-raleway">{stage.ageLabel}</p>
                        <h3 className="stage-title font-playfair">{stage.title}</h3>
                        <p className="stage-subtitle font-raleway">{stage.subtitle}</p>
                        <p className="stage-body font-playfair">{stage.body}</p>
                        <ul className="stage-list font-raleway">
                            {stage.items.map((item) => (
                                <li key={item}>
                                    <span className="stage-list-dash">—</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AthleteFocus;
