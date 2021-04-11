import React from "react";

import { Portal } from "../components/Portal";
import { NavigationList, ENavigation } from "../components/Navigation";
import { Container, EContainerType } from "../components/Container";

export default function Products(): JSX.Element {
    return (
        <React.Fragment>
            <Portal containerId="navigation-container">
                <NavigationList active={ENavigation.OurProducts} />
            </Portal>

            <main role="main">
                <Container type={EContainerType.Default}>
                    <h1>Our products</h1>
                </Container>
            </main>
        </React.Fragment>
    );
}