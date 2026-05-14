import React from 'react';
import './DonnaEcosystem.css';
import { useNavigate } from 'react-router-dom';

const programmes = [
    {
        name: 'Hall of Champions',
        badge: 'Registration Open',
        description: '44-week formation programme. Character, scholarship, and excellence — the complete development of the young athlete\'s public and private identity. Three divisions. 230 students maximum.',
        contact: 'donnaclarke.com/hallofchampions',
    },
    {
        name: 'Quest Sports Canada',
        badge: null,
        description: 'High School sports development programme for athletes ages 8–18. Structured pathway for athletes pursuing provincial, national, and world-class competition.',
        contact: 'questsportscanada.club',
    },
    {
        name: 'Donna Clarke Consulting',
        badge: null,
        description: 'Individual, family, and sports team management consulting. The full six-pillar Integrated Development Plan applied to one athlete, family, or team environment. In-person or virtual across Canada and internationally.',
        contact: 'donnaclarke.com/consulting',
    },
    {
        name: 'Donna Clarke Speaks',
        badge: null,
        description: 'Keynotes and workshops for sports families, schools, and corporate organisations. Drawn from real experience, not theory.',
        contact: 'donnaclarke.com/speaking',
    },
    {
        name: "The Champion's Table",
        badge: null,
        description: 'Performance nutrition for athletic families. The conviction that the kitchen is the second training room — made practical for real life.',
        contact: 'athletecollective.com/kitchen',
    },
];

const DonnaEcosystem = () => {

        const navigate = useNavigate();
    return (
        <section className="ecosystem-section">
            <div className="ecosystem-container">

                <div className="ecosystem-eyebrow">
                    <span className="ecosystem-eyebrow-line"></span>
                    <span className="ecosystem-eyebrow-text font-raleway">Programmes</span>
                </div>

                <h2 className="ecosystem-heading">
                    The Donna Clarke <em className="ecosystem-heading-accent font-playfair">ecosystem.</ em> 
                </h2>

                <p className="ecosystem-body ">
                    Each programme is an expression of the same conviction — that structured environments produce resilient people. They are not separate offerings. They are connected parts of one architecture.
                </p>

                <div className="ecosystem-table-wrap">
                    <table className="ecosystem-table">
                        <thead>
                            <tr className="ecosystem-table-header">
                                <th className="font-raleway">PROGRAMME</th>
                                <th className="font-raleway">What It Builds</th>
                                <th className="font-raleway">CONTACT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programmes.map((p) => (
                                <tr key={p.name} className="ecosystem-table-row">
                                    <td className="ecosystem-prog-name">
                                        <span className="font-playfair prog-name-text">{p.name}</span>
                                        {p.badge && (
                                            <span className="prog-badge font-raleway">{p.badge}</span>
                                        )}
                                    </td>
                                    <td className="ecosystem-prog-desc font-playfair">{p.description}</td>
                                    <td className="ecosystem-prog-contact font-raleway">{p.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ecosystem-cta-wrap">
                    <button onClick={() => navigate('/enquire')} className="ecosystem-cta-btn font-raleway">SUBMIT AN ENQUIRY</button>
                </div>

            </div>
        </section>
    );
};

export default DonnaEcosystem;
