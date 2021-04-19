import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { IFacebookImage } from './SEO/FacebookHelmet';

export interface ISEOProps {
    title: string;
    description?: string;
    type?: string;
    image?: IFacebookImage;
}

export default function SEO(props: ISEOProps): JSX.Element {
    console.log('SEO props: ' + props);

    return (
        <Fragment>
            <Helmet>
                <title>{`${props.title} · Papa's Pretzel Place`}</title>
                <meta name="twitter:title" content={props.title} />
                <meta name="og:title" content={props.title} />
                <meta name="og:site_name" content={props.title} />
            </Helmet>

            {
                props.type &&
                <Helmet>
                    <meta name="og:type" content={props.type} />
                </Helmet>
            }

            {
                props.description &&
                <Helmet>
                    <meta name="description" content={props.description} />
                    <meta name="twitter:description" content={props.description} />
                    <meta name="og:description" content={props.description} />
                </Helmet>
            }

            {
                props.image &&
                <Helmet>
                    <meta name="twitter:images" content={props.image.url} />
                    <meta name="og:image" content={props.image.url} />
                    <meta name="og:image:type" content={props.image.type} />
                    <meta name="og:image:width" content={props.image.width} />
                    <meta name="og:image:height" content={props.image.height} />
                </Helmet>
            }

        </Fragment>
    );
}