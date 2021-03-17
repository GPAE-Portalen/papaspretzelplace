import React from "react";

import Header from '../components/Header';
import { Container, ContainerType } from '../components/Container'
import { Logo } from '../components/Logo';
import { GoogleMapsLink } from '../components/GoogleMapsLink';

export default function Home(): JSX.Element {
    const address: string = '302 Mill Street, Bristol, PA 19007';

    return (
        <React.Fragment>
            <Header>
                <Container type={ContainerType.Default}>
                    <Logo alt="Papa's Pretzel Place logo" height="100%" width="100%" className="m-auto" />
                </Container>
            </Header>

            <main role="main" className="py-3 mb-5">
                <Container type={ContainerType.Default}>
                    <h1 className="text-center">Papa's Pretzel Place</h1>

                    <p className="text-center mb-2">Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location opening at 302 Mill Street, Bristol, PA 19007 targeted for March of 2021.</p>

                    <GoogleMapsLink className="text-center" />

                    <a className="btn btn-ppp-red mx-auto d-block mt-4" href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer" style={{ maxWidth: '280px', borderRadius: '2rem' }}>Facebook page</a>
                </Container>
            </main>
        </React.Fragment>
    );
}
