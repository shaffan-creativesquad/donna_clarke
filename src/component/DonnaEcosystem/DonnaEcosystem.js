import React from 'react';
import './DonnaEcosystem.css';
import { useNavigate } from 'react-router-dom';

const programmes = [
    {
        name: 'Hall of Champions',
        badge: 'Premium · Founding Enrolment Open',
        description: '44-week leadership, character, scholarship, and excellence programme for athletes ages 8–18. Three divisions. 230 students maximum. Founding Family enrolment opens January 2026.',
        contact: 'donnaclarke.com/hallofchampions',
    },
    {
        name: 'Quest Sports Canada',
        badge: null,
        description: 'Middle School–High School sports development. Provincial, national, and world-class competitor pathway.',
        contact: 'questsportscanada.club',
    },
    {
        name: 'Donna Clarke Consulting',
        badge: null,
        description: 'Individual & family sports management consulting · Ages 8–18. In-person or virtual across Canada and internationally.',
        contact: 'donnaclarke.com/consulting',
    },
    {
        name: 'Donna Clarke Speaks',
        badge: null,
        description: 'Keynotes · Workshops · Parent Masterclass · Corporate engagements. Three signature presentations.',
        contact: 'donnaclarke.com/speaking',
    },
    {
        name: "The Champion's Table",
        badge: null,
        description: 'Performance nutrition cookbook and cooking content for athletic families. Sport meals built for the 8–18 developmental window.',
        contact: 'athloscollective.com/kitchen',
    },
];

const DonnaEcosystem = () => {

        const navigate = useNavigate();
    return (
        <section className="ecosystem-section">
            <div className="ecosystem-container">

                <div className="ecosystem-eyebrow">
                    <span className="ecosystem-eyebrow-line"></span>
                    <span className="ecosystem-eyebrow-text font-raleway">PROGRAMMES & PARTNERSHIPS</span>
                </div>

                <h2 className="ecosystem-heading font-playfair">
                    The <em className="ecosystem-heading-accent font-playfair">Donna Clarke</em> ecosystem.
                </h2>

                <p className="ecosystem-body font-playfair">
                    Everything Donna does connects to everything else. An athlete she works with
                    individually benefits from the same framework she teaches across all her programmes.
                </p>

                <div className="ecosystem-table-wrap">
                    <table className="ecosystem-table">
                        <thead>
                            <tr className="ecosystem-table-header">
                                <th className="font-raleway">PROGRAMME</th>
                                <th className="font-raleway">DESCRIPTION</th>
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
