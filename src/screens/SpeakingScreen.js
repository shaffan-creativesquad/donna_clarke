import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../component/Header/Header';
import Speaking from '../component/Speaking/Speaking';

const SpeakingScreen = () => {
    return (
        <div className="speaking-screen-wrapper">
            <Helmet>
                <title>Speaking & Keynotes — Donna Clarke</title>
                <meta name="description" content="Olympic perspective on performance, parenting, and leadership. Keynotes and workshops by Donna Clarke." />
            </Helmet>

            <Header />

            <Speaking />
        </div>
    );
};

export default SpeakingScreen;
