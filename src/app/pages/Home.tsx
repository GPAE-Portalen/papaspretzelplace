import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';

import { GoogleMapsLink } from "../components/GoogleMapsLink";

export default function Home(): JSX.Element {
    const title: string = "Papa's Pretzel Place";
    const description: string = "Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location opening at 302 Mill Street, Bristol, PA 19007 targeted for March of 2021.";
    const path: string = window.location.pathname;

    const header = {
        active: path
    }

    return (
        <React.Fragment>
            <Header {...header} />

            <Main>
                <article className="text-center">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <GoogleMapsLink />
                    <a className="btn btn-ppp-red d-inline-block ms-3" href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer" style={{ minWidth: '150px', borderRadius: '2rem' }}>Facebook page</a>
                </article>
            </Main>
        </React.Fragment>
    );
}
