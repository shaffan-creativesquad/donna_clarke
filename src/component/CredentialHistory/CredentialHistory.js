import React from 'react';
import './CredentialHistory.css';

const credentials = [
    {
        number: '01',
        title: '1984 Los Angeles Olympics',
        subtitle: 'HEPTATHLON · TEAM CANADA',
        description: 'As a young athlete, she built discipline as a way to protect her peace and create structure where there was noise. The heptathlon — seven events across two days — is not the event for the specialist. It is the event for the complete human being. The preparation it demands, and the way it exposes every weakness in a system, shaped her understanding of something she has never set down: excellence is never accidental. Preparation always precedes recognition.',
        description2: 'She competed at the Los Angeles Games representing Canada. The experience — the preparation, the pressure, the culture of the Olympic Village, the moment of walking into the stadium — was not the start of her formation. It was evidence that the formation had worked. That distinction matters for every athlete who has ever prepared quietly for a moment the world only sees once.',
        points: [
            'The conviction she carried off that track — that the complete human being outperforms the specialist — has not left her. It is the foundation of everything she builds.'
        ]
    },
    {
        number: '02',
        title: 'The Master\'s Degree in High Performance Coaching',
        subtitle: 'M.Sc · Graduate Research · In Pursuit',
        description: "She returned to study not because she wanted a credential but because she was watching something she could not accept: the standards of high-performance coaching were not trickling down to the developmental years — the very years when they are most critical. Elite sport science tends to live at the top of the performance pyramid. Donna believed it belonged at the base. The athletes who most need structured, evidence-based development are 8 to 18 — and they are the least likely to receive it.",
        description2: "The M.Sc gave her the framework to do that. Structure must precede performance. Development must be designed, not improvised. Long-term athlete development is not optional knowledge for someone responsible for forming young people in their most impressionable years. It is the floor every serious coach should be standing on — and the one most developmental coaches never see.",
        points: [
            'Every recommendation she makes is evidence-based — not because she needs to cite sources, but because she refuses to leave development to intuition alone.'
        ]
    },
    {
        number: '03',
        title: 'Raising Denzel Clarke',
        subtitle: 'From Canada · The Athletics MLB',
        description: 'She did not raise a baseball player. She raised a complete human being who chose baseball as his arena. The discipline that made Denzel an athlete came from the same household as the character that makes him a professional. She used every credential she holds — simultaneously, across twenty years — in one environment. The result, Denzel Clarke\'s debut with the Athletics on May 23, 2025, and his first home run on May 31 at Rogers Centre in his hometown, is the outcome. It is not the authority. The authority is the twenty years of structured formation that preceded it.',
        points: [
            'The methodology is proven not because it produced a professional athlete — but because it produced a prepared person who was ready when the moment arrived.'
        ]
    },
    {
        number: '04',
        title: 'Mental Performance Coaching Certification',
        subtitle: 'Certified · The Infrastructure, Not the Finish',
        description: 'She pursued this certification first — not after watching athletes underperform, but because she understood before the problem was visible that identity formed under pressure without proper preparation will fracture. The mental framework of an 8-year-old becomes the template for every competitive experience they will have for the next decade. Most people address this when it breaks. She builds it before it needs to hold anything.',
        description2: 'For young athletes specifically, mental performance is identity development. The self-concept under pressure. The response to failure. The way a child tells themselves the story of who they are as an athlete. These are not soft additions to development. They are the load-bearing walls.',
        points: [
            "Preparation over performance. Build the mind before the moment demands it."
        ]
    },
    {
        number: '05',
        title: 'Culinary School — Honours Graduate',
        subtitle: "The Home as the First Training Ground",
        description: 'She went to culinary school because the gap between sports nutrition science and the family kitchen was enormous — and the kitchen is where it matters. There is a vast literature on athletic nutrition and almost nothing on how to actually feed a growing athlete on a Tuesday evening after a full training day. She graduated with Honours and specialised in sport meals for athletes ages 8–18, whose nutritional needs during development are categorically different from adult athletes.',
        description2: 'The Champion\'s Table is not a cookbook in the conventional sense. It is a philosophy made practical. What happens at the table shapes what is available on the field. The home is the first institution. The meal is one of the ways she means that.',
        points: [
            'Food is formation. The kitchen is the second training room. This has always been her conviction.'
        ]
    },
    {
        number: '06',
        title: 'Certified Marketing & Branding — Athletes',
        subtitle: 'Identity Before Visibility',
        description: 'She completed this certification because she was watching something avoidable: talented athletes arriving at the threshold of professional careers without the infrastructure to hold what their ability had earned them. Identity, reputation, and public presence are not glamour additions to athletic development. They are part of the formation that must be built before the moment arrives — because when visibility comes ahead of foundation, the fracture is public and painful.',
        description2: 'For athletes ages 13–18, NIL is not a future consideration. It is already in motion. The families who understand that earliest will always be ahead — not because they are more ambitious, but because they are more prepared.',
        points: [
            'She does not pursue recognition ahead of preparation. She teaches the same principle she lives.'
        ]
    }
];

const CredentialHistory = () => {
    return (
        <section className="credential-history-section">
            <div className="credential-history-container">
                {credentials.map((cred, index) => (
                    <div key={index} className="credential-item">
                        <div className="credential-left-border"></div>
                        <div className="credential-content">
                            <div className="credential-header">
                                <span className="credential-number font-playfair">{cred.number}</span>
                                <div className="credential-title-group">
                                    <h3 className="credential-title font-playfair">{cred.title}</h3>
                                    <p className="credential-subtitle font-raleway">{cred.subtitle}</p>
                                </div>
                            </div>
                            <p className="credential-description font-raleway">{cred.description}</p>
                            <p className="credential-description font-raleway">{cred.description2}</p>
                            <ul className="credential-points">
                                {cred.points.map((point, i) => (
                                    <li key={i} className="credential-point font-raleway">
                                        <img src="/images/icons/bullet-cir-b.png" className="bullet-icon" alt="bullet" /> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CredentialHistory;
