import React from "react";
import { Link } from "react-router-dom";

import { Portal } from "../components/Portal";
import { NavigationList, ENavigation } from "../components/Navigation";
import { Container, EContainerType } from "../components/Container";

import { GoogleMapsLink } from "../components/GoogleMapsLink";
import { Logo } from "../components/Logo";

export default function NotFound(): JSX.Element {
    return (
        <React.Fragment>
            <Portal containerId="navigation-container">
                <NavigationList active={null} />
            </Portal>

            <main role="main">
                <Container type={EContainerType.Default}>
                    <Logo alt="Papa's Pretzel Place logo" height="100%" width="100%" className="m-auto" />

                    <h1 className="text-center">
                        <small className="text-muted d-block">404</small>
                        <div>Papa's Pretzel Place</div>
                    </h1>

                    <p>*Dough* This page does knot exist!</p>

                    <GoogleMapsLink />

                    <Link to="/" className="btn btn-ppp-beige" style={{ minWidth: '150px', borderRadius: '2rem' }}>
                        Home
                    </Link>

                    <a className="btn btn-ppp-red d-inline-block ms-3" href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer" style={{ minWidth: '150px', borderRadius: '2rem' }}>Facebook page</a>
                </Container>
            </main>
        </React.Fragment>
    );
}
