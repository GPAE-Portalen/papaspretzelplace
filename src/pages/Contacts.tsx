import React from "react";

import SEO, { ISEOProps } from "../components/SEO/SEO";
import HeaderDesign from "../components/HeaderDesign";
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Menu(): JSX.Element {
    const title: string = 'Contacts';

    const seo: ISEOProps = {
        title,
        description: "Papa's Pretzel Place is a locally owned soft pretzel company. They are a wholesale and retail soft pretzel bakery and eatery at 302 Mill Street, Bristol, PA 19007 opens daily 11am."
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <HeaderDesign />

            <Main>
                <section className="d-none">
                    <article>
                        <h1>{title} Papa's Pretzel Place</h1>
                    </article>
                </section>
            </Main>

            <Footer />
        </React.Fragment>
    );
}
