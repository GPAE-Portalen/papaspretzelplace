import React from "react";

import SEO, { ISEOProps } from "../components/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/SocialsButton';

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = "Papa's Pretzel Place is a locally owned soft pretzel company. They are a wholesale and retail soft pretzel bakery and eatery at 302 Mill Street, Bristol, PA 19007 open daily 11am-7pm.";

    const seo: ISEOProps = {
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
                        <h1 className="display-4">{title}</h1>
                        <p>{description}</p>
                    </article>

                    <SocialsButton />
                </section>
            </Main>

            <Footer />
        </React.Fragment >
    );
}

/*
const Front = (): JSX.Element => {
    return (
        <div id="front">
            <div id="front-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/store.jpg)` }}></div>
        </div>
    );
}
*/