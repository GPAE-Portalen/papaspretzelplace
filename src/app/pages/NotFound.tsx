import React from "react";
import { Link } from "react-router-dom";

import Header from '../components/Header';
import Main from '../components/Main';

import { GoogleMapsLink } from "../components/GoogleMapsLink";

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = '*Dough* This page does knot exist!';

    return (
        <React.Fragment>
            <Header />

            <Main>
                <article className="text-center">
                    <h1>
                        <small className="text-muted d-block">404</small>
                        <div>{title}</div>
                    </h1>

                    <p>{description}</p>

                    <GoogleMapsLink />

                    <Link to="/" className="btn btn-ppp-beige" style={{ minWidth: '150px', borderRadius: '2rem' }}>
                        Home
                    </Link>

                    <a className="btn btn-ppp-red d-inline-block ms-3" href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer" style={{ minWidth: '150px', borderRadius: '2rem' }}>Facebook page</a>
                </article>
            </Main>
        </React.Fragment>
    );
}
