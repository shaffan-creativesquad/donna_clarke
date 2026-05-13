import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../component/Header/Header';
import HallOfChampions from '../component/HallOfChampions/HallOfChampions';

const HallOfChampionsScreen = () => {
    return (
        <div className="hoc-screen-wrapper">
            <Helmet>
                <title>Hall of Champions — Donna Clarke</title>
                <meta name="description" content="44-week leadership, character, scholarship, and excellence programme for athletes ages 8–18." />
            </Helmet>

            <Header />

            <HallOfChampions />

        </div>
    );
};

export default HallOfChampionsScreen;
