import React from 'react';
import './ThreeWorldsSection.css';

function ThreeWorldsSection() {
    const data = [
        {
            number: "I",
            tagline: "THE OLYMPIAN",
            title: <>Formidable. Complete. <i>Legacy.</i></>,
            description: "She stood on the track at the 1984 Los Angeles Olympic Games as a Canadian heptathlete — seven events, two days, one message: the complete human being outperforms the specialist. Four decades later, that conviction still shapes everything she builds. Donna moves through the world with the quiet certainty of someone who has already stood at the start line of the biggest moment of her life — and competed.",
            link: "HER OLYMPIC STORY —"
        },
        {
            number: "II",
            tagline: "THE CHEF · THE NURTURER",
            title: <>The kitchen is the <i>second training room.</i></>,
            description: "Culinary school. Honours. A specialisation in sport meals and performance nutrition for growing athletes. Donna went to culinary school because the gap between sports nutrition science and the family kitchen was enormous — and no one was closing it. She closed it. The Champion's Table — her cookbook and nutrition philosophy — is where elite sport science meets the elegance of a meal prepared with intention and love for the people who matter most.",
            link: "EXPLORE THE CHAMPION'S TABLE —"
        },
        {
            number: "III",
            tagline: "THE MENTAL PERFORMANCE COACH",
            title: <>What lives in the mind <i>shapes the career.</i></>,
            description: "Certified Mental Performance Coach. The competitive edge most athletes never develop — built into the foundation, deliberately, from age eight. Donna went into mental performance coaching first, not last. For athletes in the 8-18 window, mental performance is identity development. The way a twelve-year-old thinks about themselves in competition becomes the template for every performance they will give for the next decade. Donna works in that template — before it is set.",
            link: "MENTAL PERFORMANCE CONSULTING —"
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
