import React from "react";

import { BootstrapColor, bootstrapColorName } from '../../enums/bootstrap';

import Alert from '../components/Alert';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FacebookFeed from '../components/FacebookFeed';

import { Container, ContainerType } from '../components/Container'
import { Logo } from '../components/Logo';

export default function Home(): JSX.Element {
    const address: string = '302 Mill Street, Bristol, PA 19007';
    const addressClean: string = address.replaceAll(',', '');
    const addressUrl: string = encodeURI(address);

    return (
        <React.Fragment>
            <Alert type={bootstrapColorName[BootstrapColor.Light]} className={`border-bottom color-${bootstrapColorName[BootstrapColor.PppRed]}`}>
                <span>This website is under construction! Visit our <a href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer">Facebook page</a> for more information.</span>
            </Alert>

            <Header>
                <Container type={ContainerType.Default}>
                    <Logo alt="Papa's Pretzel Place logo" height="100%" width="100%" className="m-auto" />
                </Container>
            </Header>

            <main role="main">
                <Container type={ContainerType.Default}>
                    <h1 className="text-center">Papa's Pretzel Place</h1>

                    <p className="text-center mb-2">Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location opening at 302 Mill Street, Bristol, PA 19007 targeted for March of 2021.</p>

                    <address className="text-center">
                        <a href={`https://maps.google.com/maps?hl=sv&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer">
                            <i className="fas fa-map-marker-alt"></i>
                        &nbsp;{addressClean}
                        </a>
                    </address>

                    <a className="btn btn-ppp-red mx-auto d-block mt-4" href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer" style={{ width: '300px', borderRadius: '2rem' }}>Facebook page</a>
                </Container>
            </main>
        </React.Fragment>
    );
}
