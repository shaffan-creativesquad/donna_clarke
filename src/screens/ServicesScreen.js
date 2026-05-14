import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../component/Header/Header';
import ServicesHero from '../component/ServicesHero/ServicesHero';
import AthleteFocus from '../component/AthleteFocus/AthleteFocus';
import DonnaEcosystem from '../component/DonnaEcosystem/DonnaEcosystem';
import ServicePillars from '../component/ServicePillars/ServicePillars';
import BottomCTA from '../component/BottomCTA/BottomCTA';

const ServicesScreen = () => {
    return (
        <div style={{ backgroundColor: '#FEFCF8' }}>

            <Header />

            <div className="services-content">
                <ServicesHero />
                <ServicePillars />
                <AthleteFocus />
                <DonnaEcosystem />
            </div>

            <BottomCTA />
        </div>
    );
};

export default ServicesScreen;
