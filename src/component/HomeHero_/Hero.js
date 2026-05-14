import React from "react";
import styles from "./Hero.module.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const heroData = [
  {
    title: "1984 Los Angeles Olympics",
    subtitle: "Heptathlon · Team Canada"
  },
  {
    title: "Master of Science — High Performance Coaching",
    subtitle: "Athlete development science · In pursuit"
  },
  {
    title: "Certified Mental Performance Coach",
    subtitle: "The foundation, not the finish"
  },
  {
    title: "Culinary School — Honours Graduate",
    subtitle: "The kitchen is the second training room"
  },
  {
    title: "Certified Marketing & Branding — Athletes",
    subtitle: "Identity built before it is needed"
  },
  {
    title: "Proud Mom of Denzel Clarke",
    subtitle: "Center Fielder · Athletics · MLB"
  }
];

const Hero = () => {

  return (
    <div>
      <div className="position-relative">
        <div className="position-relative" style={{ zIndex: 10 }}>
          <Header fontDark={false} />
        </div>

        <section className={styles.Hero}>

          {/* Background glows */}
          <div className={styles.heroSoft}></div>
          <div className={styles.heroGlow}></div>

          <div className="container">
            <div className="row align-items-center">

              {/* ── LEFT COLUMN ── */}
              <div className={`${styles.Hero_Content} col-12 col-lg-6 py-5`}>

                {/* Kicker */}
                <div className={`${styles.heroKicker} d-flex align-items-center gap-3 mb-4`}>
                  <span className={styles.kBar}></span>
                  <span className={`${styles.kTxt} font-raleway`}>The Olympian Sports Mom</span>
                </div>

                {/* Name */}
                <h1 className={`${styles.heroName} font-playfair mb-4`}>
                  Donna<br />
                  <em className={styles.gradientText} >Clarke.</em>
                </h1>

                {/* Sub-title */}
                <p className={`${styles.heroSub} font-playfair fst-italic mb-3`}>
                  Architect of Structured Development · Sports Management & Consulting
                </p>

                {/* Tagline */}
                <p className={`${styles.heroTagline} font-playfair fst-italic mb-4`}>
                  The families who shape champions do not leave development to chance. Neither does she.
                </p>

                {/* Body */}
                <p className={`${styles.heroBody} font-raleway mb-4`}>
                  Donna Clarke does not build athletes. She builds the environments — at home, at the table, in the training room — that produce people who are strong enough to become what they are capable of. Everything else is an outcome of that.
                </p>

                {/* CTA Buttons — all 3 in one row */}
                <div className={`${styles.btnHocRow} d-flex align-items-center gap-3 pb-4 mb-4 w-100`}>
                  <Link
                    to="/foundation"
                    className={`${styles.btnGold} font-raleway text-decoration-none text-center`}
                  >
                    Her Foundation
                  </Link>
                  <Link
                    to="/work"
                    className={`${styles.btnOutlineLight} font-raleway text-decoration-none text-center`}
                  >
                    The Work
                  </Link>
                  <Link
                    to="/hall-of-champions"
                    className={`${styles.btnOutlineGold} font-raleway text-decoration-none text-center`}
                  >
                    Hall of Champions
                  </Link>
                </div>

                {/* Credential Lines */}
                <div className={`${styles.heroCreds} d-flex flex-column w-100`}>
                  {heroData.map((item, index) => (
                    <div key={index} className={`${styles.hcred} d-flex align-items-stretch gap-3 py-2`}>
                      <div className={styles.hcredBar}></div>
                      <div className={`${styles.hcredLabel} font-raleway d-flex flex-column gap-1`}>
                        <strong>{item.title}</strong>
                        {item.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className={`${styles.Hero_Content_right} col-12 col-lg-6 py-5 d-none d-lg-flex justify-content-center align-items-center`}>

                <div className={`${styles.portraitWrap} position-relative w-100`}>

                  {/* Corner bracket decoration */}
                  <div className={styles.portraitCorner}></div>

                  {/* Portrait placeholder — replace with <img> when photo is ready */}
                  <div className={`${styles.portraitPh} d-flex flex-column align-items-center justify-content-center gap-3 p-4`}>
                    <span className={`${styles.portraitPhLabel} font-raleway text-center`}>
                      Donna Clarke — Hero Portrait
                    </span>
                    <span className={`${styles.portraitPhNote} font-raleway text-center`}>
                      Editorial portrait · Warm &amp; confident<br />
                      800 × 1067px · Portrait
                    </span>
                  </div>

                  {/* Floating quote card */}
                  <div className={styles.quoteFloat}>
                    <div className={`${styles.quoteFloatInner} p-4`}>
                      <p className="font-playfair fst-italic mb-2">
                        Strong outcomes are the product of disciplined systems — not accidental momentum.
                      </p>
                      <cite className="font-raleway">Donna Clarke</cite>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`${styles.heroScroll} d-none d-lg-flex flex-column align-items-center gap-2`}>
            <span className={`${styles.scrollTxt} font-raleway`}>Scroll</span>
            <div className={styles.scrollBar}></div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Hero;