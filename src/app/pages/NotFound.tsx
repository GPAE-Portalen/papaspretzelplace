import React from "react";

import Main from '../components/Main';
import Header from '../components/Header';

import { GoogleMapsLink } from "../components/GoogleMapsLink";
import { Offcanvas } from "../components/Offcanvas";

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = '*Dough* This page does knot exist!';

    return (
        <React.Fragment>
            <Main>
                <Offcanvas />

                <Header />

                <section className="text-center">
                    <article>
                        <h1>
                            <small className="text-muted d-block">404</small>
                            <div>{title}</div>
                        </h1>
                        <p>{description}</p>
                    </article>

                    <GoogleMapsLink />

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
        </React.Fragment>
    );
}
