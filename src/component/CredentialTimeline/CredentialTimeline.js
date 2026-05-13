import React from 'react';
import './CredentialTimeline.css';

const entries = [
    {
        number: '01',
        title: '1984 Los Angeles Olympics',
        tags: ['HEPTATHLON', 'TEAM CANADA'],
        body: 'The heptathlon is seven events over two days: 100-metre hurdles, high jump, shot put, 200 metres, long jump, javelin, and 800 metres. That experience — the preparation, the pressure, the culture of the Olympic Village, the moment of walking into the stadium — shaped everything I would teach for the next 40 years. Not the technique. The understanding that sport is a complete human experience, and that the athletes who last are the ones who are prepared for that completeness.',
        bullet: 'Complete development. Sport as a whole-person discipline. The multi-sport philosophy that runs through everything I do.',
    },
    {
        number: '02',
        title: 'Master of Science, High Performance Coaching',
        tags: ['M.SC', 'GRADUATE RESEARCH', 'ATHLETE DEVELOPMENT SCIENCE'],
        body: 'After the Olympics, I did what most athletes don\'t: I went back to school. When my son Denzel started competing seriously, I watched coaches at every level making developmental decisions based on habits and traditions rather than evidence. I enrolled in the M.Sc in High Performance Coaching specifically because I wanted to understand what the research said — and the gap between what the research said and what was actually happening on training grounds across Canada. That gap turned out to be enormous.',
        bullet: 'Evidence-based coaching. LTAD compliance. Periodisation. The developmental science behind every recommendation I make.',
    },
    {
        number: '03',
        title: 'Raising Denzel Clarke — MLB · The Athletics',
        tags: ['FROM THE PLAYING FIELDS TO THE MAJOR LEAGUES'],
        body: 'My son Denzel Clarke is a center fielder for the Athletics in Major League Baseball. He made his MLB debut on May 23, 2025, and hit his first career home run on May 31 against the Toronto Blue Jays at Rogers Centre — in his hometown — while I watched from the stands. I did not raise a baseball player. I raised a complete human being who chose baseball as his arena. I used every credential I have — simultaneously, across 20 years, on one person. That person made it. The methodology is proven.',
        bullet: 'The complete development model. What it takes — the parent-athlete relationship, at home, in the car, at the table, and in training sessions.',
    },
    {
        number: '04',
        title: 'Mental Performance Coaching Certification',
        tags: ['CERTIFIED MENTAL PERFORMANCE COACH', 'ATHLETES AGES 8–18'],
        body: 'The mental side of sport is the last frontier most coaches get to — usually after they have already watched talented athletes underperform at critical moments. I went to it first. I completed this certification because I was watching athletes at every level arrive at competition completely physically prepared and completely mentally underprepared. For young athletes specifically, mental performance coaching is also identity development.',
        bullet: 'Mental performance strategy for athletes 8–18. Pre-competition routines. Identity and resilience work. The parent\'s role in the athlete\'s mental landscape.',
    },
    {
        number: '05',
        title: 'Culinary School — Honours Graduate',
        tags: ['PERFORMANCE NUTRITION SPECIALIST', 'THE CHAMPION\'S TABLE'],
        body: 'I went to culinary school because I could not find anyone who understood both the science of performance nutrition and the reality of cooking for a family of athletes with busy schedules. I graduated with Honours and developed a specialisation in sport meals and performance nutrition for athletes ages 8–18. The Champion\'s Table cookbook emerged from this work. Food is not fuel. It is formation.',
        bullet: 'Performance nutrition for growing athletes. Sport meal planning. The ability to turn nutritional knowledge into meals a family can actually prepare.',
    },
    {
        number: '06',
        title: 'Certified Marketing & Branding for Athletes',
        tags: ['NIL STRATEGY', 'ATHLETE IDENTITY', 'PROFESSIONAL POSITIONING'],
        body: 'Every young athlete is already building a brand — whether they know it or not. Their social media presence, their competition results, the relationships they cultivate — all of it is speaking before they ever do. Donna completed this certification because of her son and every talented young athlete she watched arrive at the threshold of a professional career underprepared for what that moment actually required. For athletes ages 13–18, NIL is no longer something to think about later. It is happening now.',
        bullet: 'Athlete brand development. NIL strategy for ages 13–18. Social media identity. Professional positioning for emerging athletes.',
    },
];

const CredentialTimeline = () => {
    return (
        <section className="ct-section">
            <div className="ct-wrapper">
                <div className="ct-spine" />

                {entries.map((entry) => (
                    <div className="ct-item" key={entry.number}>
                        <span className="ct-num font-playfair">{entry.number}</span>

                        <div className="ct-content">
                            <h3 className="ct-title font-playfair">{entry.title}</h3>

                            <p className="ct-tags font-raleway">
                                {entry.tags.join(' · ')}
                            </p>

                            <p className="ct-body font-raleway">{entry.body}</p>

                            <div className="ct-bullet-row">
                                <span className="ct-bullet-dot">•</span>
                                <span className="ct-bullet-text font-raleway">{entry.bullet}</span>
                            </div>

                            <div className="ct-divider" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CredentialTimeline;
