import React from 'react';
import { Helmet } from 'react-helmet';

export interface ITwitterHelmetProps {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
}

export default function TwitterHelmet(props: ITwitterHelmetProps): JSX.Element {
    const card: string = props.card ?? 'summary_large_image';
    const site: string = props.site ?? '@papaspretzelplace';
    const creator: string = props.creator ?? '@papaspretzelplace';
    const title: string = props.title ?? "Papa's Pretzel Place";
    const description: string = props.description ?? "Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location opening at 302 Mill Street Bristol PA 19007 targeted for March of 2021.";
    const image: string = props.image ?? 'https://papaspretzelplace.com/android-chrome-512x512.png';

    return (
        <Helmet>
            <meta name="twitter:card" content={card} />
            <meta name="twitter:site" content={site} />
            <meta name="twitter:creator" content={creator} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}