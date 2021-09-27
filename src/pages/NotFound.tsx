import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/Socials/SocialsButton';

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = '*Dough* This page does knot exist!';

    return (
        <React.Fragment>
            <Header />

            <Main>
                <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                <section className="text-center">
                    <article>
                        <h1>
                            <small className="text-muted d-block">404</small>
                            <div>{title}</div>
                        </h1>
                        <p>{description}</p>
                    </article>

                    <SocialsButton />
                </section>
            </Main>

            <Footer />
        </React.Fragment>
    );
}
