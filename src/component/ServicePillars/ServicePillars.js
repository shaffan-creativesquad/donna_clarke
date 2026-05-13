import React from 'react';
import './ServicePillars.css';

const pillars = [
    {
        number: '01',
        subtitle: 'THE FOUNDATION',
        title: 'Athlete Development',
        description: 'Athletes need more than training — they need direction. Development must evolve with age, growth, and readiness. Multi-sport in early years, smart specialisation at the right stage.',
        points: [
            'Physical, technical, and tactical progression over time',
            'Multi-sport development in early years',
            'Smart specialisation at the right stage',
            'Family understanding of each phase'
        ],
        footer: 'Without a clear pathway, talent is often mismanaged or missed entirely.'
    },
    {
        number: '02',
        subtitle: 'THE SEPARATOR',
        title: 'Mental Performance',
        description: 'Most athletes train their bodies — few are taught how to train their minds. How athletes think determines how far they go. Mental performance is often the difference-maker.',
        points: [
            'Confidence, focus, and emotional control',
            'Preparation for pressure environments',
            'Resilience when performance fluctuates',
            'Identity shaped beyond wins and losses'
        ],
        footer: 'Mental performance is often the difference-maker.'
    },
    {
        number: '03',
        subtitle: 'THE FUEL',
        title: 'Performance Nutrition',
        description: 'Growing athletes have unique nutritional needs that directly impact performance, recovery, and development. The kitchen is the second training room.',
        points: [
            'Energy, growth, and injury prevention',
            'Sustainable daily habits for athletic families',
            'Nutrition aligned with training demands',
            'Practical, informed family choices'
        ],
        footer: 'Without proper fuel, development slows — or breaks down.'
    },
    {
        number: '04',
        subtitle: 'THE PRESENCE',
        title: 'Athlete Identity & Brand',
        description: 'Every athlete is building a reputation long before they realise it. Character, values, and personal identity must be shaped intentionally — before scouts, coaches, and institutions form their own impression.',
        points: [
            'Character, values, and personal identity',
            'How athletes are seen by others',
            'NIL and recruitment preparation',
            'Intentional digital and public presence'
        ],
        footer: 'An athlete’s identity travels further than their performance.'
    },
    {
        number: '05',
        subtitle: 'THE DIRECTION',
        title: 'Pathway Awareness',
        description: 'Talent alone does not determine outcomes — understanding the system matters. The professional pathway, navigated correctly from the beginning, changes everything.',
        points: [
            'How progression works within sport',
            'Informed decisions at key stages',
            'Timing, exposure, and opportunity',
            'Avoiding costly misinformation'
        ],
        footer: 'The wrong decision at the wrong time can limit long-term potential.'
    },
    {
        number: '06',
        subtitle: 'THE MULTIPLIER',
        title: 'Family & Environment',
        description: 'The athlete’s environment — especially at home — is one of the strongest predictors of success. The most important coach in your athlete\'s life is you. The parent-athlete relationship determines the emotional quality of the entire career.',
        points: [
            'Confidence, motivation, and emotional stability',
            'Responding to success and failure',
            'Communication habits that support development',
            'Family alignment with the athlete’s needs'
        ],
        footer: 'No athlete develops in isolation — the environment either supports growth or restricts it.'
    }
];

const ServicePillars = () => {
    return (
        <section className="service-pillars-section">
            <div className="service-pillars-container">
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
