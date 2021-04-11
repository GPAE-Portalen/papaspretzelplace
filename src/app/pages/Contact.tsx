import React from "react";

import { Portal } from "../components/Portal";
import { NavigationList, ENavigation } from "../components/Navigation";
import { Container, EContainerType } from "../components/Container";

export default function Contact(): JSX.Element {
    return (
        <React.Fragment>
            <Portal containerId="navigation-container">
                <NavigationList active={ENavigation.ContactUs} />
            </Portal>

            <main role="main">
                <Container type={EContainerType.Default}>
                    <h1>Contact us</h1>
                </Container>
            </main>
        </React.Fragment>
    );
}