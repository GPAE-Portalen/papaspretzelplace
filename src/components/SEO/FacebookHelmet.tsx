import React from 'react';
import { Helmet } from 'react-helmet';

export interface IFacebookImage {
    url: string;
    type: string;
    width: string;
    height: string;
}

export interface IFacebookHelmetProps {
    url?: string;
    title?: string;
    description?: string;
    type?: string;
    image?: IFacebookImage;
}

export default function FacebookHelmet(props: IFacebookHelmetProps): JSX.Element {
    const url: string = props.url ?? 'https://www.papaspretzelplace.com/';
    const title: string = props.title ?? "Papa's Pretzel Place";
    const description: string = props.description ?? "Papa's Pretzel Place is a locally owned soft pretzel company.They will have a wholesale and retail location opening at 302 Mill Street Bristol PA 19007 targeted for March of 2021.";
    const type: string = props.type ?? 'website';
    const image: IFacebookImage = {
        url: props.image?.url ?? 'https://papaspretzelplace.com/android-chrome-512x512.png',
        type: props.image?.type ?? 'image/png',
        width: props.image?.width ?? '512',
        height: props.image?.height ?? '512'
    }

    return (
        <Helmet>
            <meta name="og:url" content={url} />
            <meta name="og:site_name" content={title} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content={type} />
            <meta name="og:image" content={image.url} />
            <meta name="og:image:type" content={image.type} />
            <meta name="og:image:width" content={image.width} />
            <meta name="og:image:height" content={image.height} />
        </Helmet>
    );
}