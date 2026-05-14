import React from 'react';
import './AthleteFocus.css';

const stages = [
    {
        ageLabel: 'AGES 8–12',
        title: 'Foundation',
        subtitle: 'Structure Before Specialisation',
        body: 'Multi-sport development, physical literacy, the joy of sport, and the first careful formation of athletic identity. The parent-athlete relationship patterns established in this window will shape the next decade. This is where the foundation is built — quietly, without pressure, before anyone needs it to hold anything.',
        items: [
            'Multi-sport development — breadth before depth',
            'Mental performance foundations — age-appropriate',
            'Household culture: establishing the right environment early',
            'Nutrition as formation, not fuel',
        ],
        colorClass: 'stage-foundations',
    },
    {
        ageLabel: 'AGES 13–15',
        title: 'Identity',
        subtitle: 'The Most Underserved Window',
        body: 'Physical development accelerates, competitive pressure increases, and the athlete begins constructing a public identity — whether intentionally or not. Mental performance work is most impactful here. Brand and identity work begins. Specialisation decisions are made — well or poorly. This window is where preparation either holds or exposes its weaknesses.',
        items: [
            'Specialisation decisions — made with evidence, not urgency',
            'Mental performance: identity, resilience, self-concept under pressure',
            'Brand and social identity — intentional from the beginning',
            'NIL awareness: what is already available now',
        ],
        colorClass: 'stage-identity',
    },
    {
        ageLabel: 'AGES 16–18',
        title: 'Threshold',
        subtitle: 'Prepared Before the Moment',
        body: 'College recruitment, scholarship applications, agent relationships, first contracts, NIL activation. Most athletes and families arrive at this window without the infrastructure it requires. Donna\'s work in this window is not reactive — she prepares families for it in the years before they need to be ready, so that when the opportunity arrives, they can take it without being caught unprepared.',
        items: [
            'Professional pathway planning and timeline strategy',
            'Athlete brand and NIL activation',
            'College and scholarship application positioning',
            'Transition planning: the move from amateur to professional',
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
                        <span className="focus-eyebrow-text font-raleway">The Formation Window</span>
                    </div>

                    <h2 className="athlete-focus-heading font-playfair">
                        Ages 8 to 18.<br />
                        <em className="focus-heading-accent">Where the decisions that matter most are made.</em>
                    </h2>

                    <p className="athlete-focus-body">
                        Donna specialises in this window not because she cannot work outside it — but because this is where the quality of formation available to most young athletes is most inadequate relative to the stakes. The patterns established here do not stay in sport. They travel into every domain of a person's life.
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
