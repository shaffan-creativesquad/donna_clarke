import React from 'react';
import './ThreeWorldsSection.css';

function ThreeWorldsSection() {
    const data = [
        {
            number: "I",
            tagline: "Structure Precedes Success",
            title: <>She does not wait for pressure to force <i>structure into place.</i></>,
            description: "In a culture that celebrates performance before preparation, Donna reinforces what discipline looks like before anyone is watching. Strong outcomes are not accidental — they are the product of environments built to carry the people inside them. This is not rigid control. It is the quiet, consistent work of someone who has already seen what thin foundations produce when pressure finally arrives.",
            link: "Her Foundation —"
        },
        {
            number: "II",
            tagline: "Home Is the First Institution",
            title: <>The kitchen is the <i>second training room.</i></>,
            description: "Donna does not outsource the formation of her children to systems that do not share her values. The household rhythm, the meals, the conversations, the standards — these are not peripheral to athletic development. They are its foundation. Her culinary school Honours degree and nutrition philosophy are not lifestyle additions. They are expressions of a conviction that what happens at the table shapes what happens on the field, in the classroom, and in the boardroom",
            link: "The Work —"
        },
        {
            number: "III",
            tagline: "Preparation Over Performance",
            title: <>Readiness before <i>recognition.</i></>,
            description: "Her philosophy does not avoid competition. It strengthens people for it. Mental performance coaching — which Donna pursued first, not last — is not a finishing touch. It is the infrastructure from which everything else runs. Identity formed before pressure. Standards established before visibility. The athlete who arrives prepared for the moment is the one who was built for it before anyone could see it coming.",
            link: "How She Works —"
        }
    ];

    return (
        <div className="ThreeWorldsSection-container">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    {data.map((item, index) => (
                        <div key={index} className="col-lg-4 ThreeWorlds-column">
                            <div className="ThreeWorlds-content">
                                <h1 className="ThreeWorlds-number">{item.number}</h1>
                                <p className="ThreeWorlds-tagline font-raleway">{item.tagline}</p>
                                <h2 className="ThreeWorlds-title font-playfair">{item.title}</h2>
                                <p className="ThreeWorlds-description font-raleway">{item.description}</p>
                                <a href="#" className="ThreeWorlds-link font-raleway">{item.link}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThreeWorldsSection;
