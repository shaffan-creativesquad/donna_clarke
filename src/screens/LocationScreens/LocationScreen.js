import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import LocationListings from './LocationListings';
import PlainHero from '../../component/PlainHero/PlainHero';

const LocationScreen = () => {
    return (
        <Fragment>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <PlainHero
          Heading="Location Page Portal"
          fontDark={true}
      />
            
            <LocationListings />
        </Fragment>
    )
};

export default LocationScreen;