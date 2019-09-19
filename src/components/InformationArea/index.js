import React from 'react';

import AnimeInformation from './AnimeInformation';
import BannerLink from './BannerLink';

const InformationArea = () => {
    return(
        <section className="centralize" id="about">
            <div className="container column">
                <AnimeInformation />
                <BannerLink />
            </div>
        </section>
    );
};

export default InformationArea;