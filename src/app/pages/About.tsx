import React from "react";

import { Portal } from "../components/Portal";
import { NavigationList, ENavigation } from "../components/Navigation";
import { Container, EContainerType } from "../components/Container";

export default function About(): JSX.Element {
    return (
        <React.Fragment>
            <Portal containerId="navigation-container">
                <NavigationList active={ENavigation.AboutUs} />
            </Portal>

            <main role="main">
                <Container type={EContainerType.Default}>
                    <h1>About us</h1>
                </Container>
            </main>
        </React.Fragment>
    );
}