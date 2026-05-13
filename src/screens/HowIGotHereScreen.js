import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../component/Header/Header';
import HowIGotHere from '../component/HowIGotHere/HowIGotHere';
import CredentialHistory from '../component/CredentialHistory/CredentialHistory';
import BottomCTA from '../component/BottomCTA/BottomCTA';

const HowIGotHereScreen = () => {
    return (
        <div style={{ backgroundColor: '#FDF9F4' }}>
            <Helmet>
                <title>How I Got Here — Donna Clarke</title>
                <meta
                    name="description"
                    content="Every credential Donna Clarke holds tells a story. From the 1984 Los Angeles Olympics to raising an MLB professional — here is the honest version."
                />
            </Helmet>

            <Header />

            <div style={{ paddingTop: '88px' }}>
                <HowIGotHere />
                <CredentialHistory />
            </div>

            <BottomCTA />
        </div>
    );
};

export default HowIGotHereScreen;
