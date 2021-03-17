import React from "react";
import { Link } from "react-router-dom";

import { Container, ContainerType } from "../components/Container";
import { GoogleMapsLink } from "../components/GoogleMapsLink";
import Header from "../components/Header";
import { Logo } from "../components/Logo";

export default function NotFound(): JSX.Element {
    return (
        <React.Fragment>
            <Header>
                <Container type={ContainerType.Default}>
                    <Logo alt="Papa's Pretzel Place logo" height="100%" width="100%" className="m-auto" />
                </Container>
            </Header>

            <main role="main" className="py-3 mb-5">
                <Container type={ContainerType.Default} className="text-center">
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
