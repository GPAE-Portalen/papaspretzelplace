import React from "react";

import SEO, { ISEOProps } from "../components/SEO/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/Socials/SocialsButton';

export default function Home(): JSX.Element {
    const title: string = "Contact us";
    const description: string = "Papa's Pretzel Place is a locally owned soft pretzel company. They are a wholesale and retail soft pretzel bakery and eatery at 302 Mill Street, Bristol, PA 19007 opens daily 11am.";

    const seo: ISEOProps = {
        title,
        description
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <Logo alt="Papa's Pretzel Place Logo" height="260px" className="mb-3" />

                <section className="text-center">
                    <article>
                        <h1>
                            <small className="text-muted d-block fs-3">{title}</small>
                            <div className="display-4">Papa's Pretzel Place</div>
                        </h1>
                        <p>{description}</p>
                    </article>

                    <SocialsButton />
                </section>
            </Main>

            <Footer />
        </React.Fragment >
    );
}
