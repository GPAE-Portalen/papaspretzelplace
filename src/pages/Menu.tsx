import React from "react";

import SEO, { ISEOProps } from "../components/SEO/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/Socials/SocialsButton';
import { MenuItems } from '../components/Products/MenuItems';

export default function Menu(): JSX.Element {
    const title: string = 'Menu';
    const description: string = 'Fresh Pretzels with an Artisan Twist';

    const seo: ISEOProps = {
        title,
        description: "Papa's Pretzel Place is a locally owned soft pretzel company. They are a wholesale and retail soft pretzel bakery and eatery at 302 Mill Street, Bristol, PA 19007 opens daily 11am."
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                <section className="text-center">
                    <article>
                        <h1>
                            <small className="text-muted d-block fs-3">{title}</small>
                            <div className="display-4">Papa's Pretzel Place</div>
                        </h1>
                        <p>{description}</p>
                    </article>

                    <SocialsButton />

                    <p>PA State Sales Tax 6%</p>
                </section>

                <MenuItems />
            </Main>

            <Footer />
        </React.Fragment>
    );
}
