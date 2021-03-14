import React from "react";

import { BootstrapColor, bootstrapColorName } from '../../enums/bootstrap';

import Alert from '../components/Alert';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import FacebookFeed from '../components/FacebookFeed';
import Footer from '../components/Footer';

import { Container, ContainerType } from '../components/Container'
import { Logo } from '../components/Logo';
import { Socials } from '../components/Socials';

export default function Home(): JSX.Element {
    return (
        <React.Fragment>
            <Alert type={bootstrapColorName[BootstrapColor.PppBeige]} className={`border-bottom color-${bootstrapColorName[BootstrapColor.PppRed]}`}>
                <span>This website is under construction! Visit our <a href="https://www.facebook.com/papaspretzelplace">Facebook page</a> for more information.</span>
            </Alert>

            <Header>
                <Logo alt="Papa's Pretzel Place logo" height="auto" width="70%" className="m-auto" />
            </Header>

            <main>
                <Container type={ContainerType.Default}>
                    <section>
                        <h1 className="text-center">PAPA'S PRETZEL PLACE</h1>
                        <p>Papa's Pretzel Place is a locally owned soft pretzel company. They will have a wholesale and retail location opening at 302 Mill Street, Bristol, PA 19007 targeted for March of 2021.</p>
                        <Carousel />
                        <Socials />
                        <FacebookFeed />
                    </section>
                </Container>
            </main>

            <Footer>
               
            </Footer>
        </React.Fragment>
    );
}
