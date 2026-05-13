import React, { useEffect } from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Enquire from '../component/Enquire/Enquire';

const EnquireScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Enquire />
        </>
    );
};

export default EnquireScreen;
