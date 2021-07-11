import React from "react";

import SEO, { ISEOProps } from "../components/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/SocialsButton';

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = 'Fresh Pretzel with an Artisan Twist!'

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
        </React.Fragment>
    );
}