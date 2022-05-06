import React from "react";

import HeaderDesign from "../components/HeaderDesign";
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home(): JSX.Element {
    const description: string = '*Dough* This page does knot exist!';

    return (
        <React.Fragment>
            <HeaderDesign />

            <Main>
                <section className="text-center">
                    <article>
                        <h1 className="m-0 display-4">
                            404
                        </h1>
                        <p>{description}</p>
                    </article>
                </section>
            </Main>

            <Footer />
        </React.Fragment>
    );
}
