import React from "react";

import { IProduct } from '../../interfaces/index';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Product(): JSX.Element {
    const product: IProduct = {
        "name": "Papa's Pretzel",
        "description": "Our signature pretzel hot out of the oven!",
        "image": {
            "name": "papas_pretzel",
            "type": "jpg",
            "width": "720",
            "height": "960"
        }
    };

    const title: string = product.name;
    const description: string = product.description;
    const path: string = window.location.pathname;

    const seo = {
        title: title,
        description: description
    }

    const header = {
        active: path
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header {...header} />

            <Main>
                <article>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </article>
            </Main>
        </React.Fragment>
    );
}