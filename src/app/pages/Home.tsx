import React from "react";

import SEO, { ISEOProps } from "../components/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Address } from "../components/Address";

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = "Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location soft opening at 302 Mill Street, Bristol, PA 19007 targeted for 10th July of 2021.";

    const seo: ISEOProps = {
        description
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <section className="text-center">
                    <article>
                        <h1 className="display-4">{title}</h1>
                        <p>{description}</p>
                    </article>

                    <Address />

                    <div className="d-flex justify-content-end mb-3 mx-auto" style={{ maxWidth: '500px' }}>
                        <a href="https://www.instagram.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold w-50 bg-ig">
                            <i className="bi bi-instagram"></i>
                            <span>&nbsp;Instagram</span>
                        </a>

                        <a href="https://www.facebook.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ms-2 fw-bold w-50">
                            <i className="bi bi-facebook"></i>
                            <span>&nbsp;Facebook</span>
                        </a>
                    </div>
                </section>
            </Main>

            <Footer />
        </React.Fragment>
    );
}