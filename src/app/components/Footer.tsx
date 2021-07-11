import React from 'react';

import { Container, EContainerType } from './Container';

import { Address } from './Address';

export interface IFooterProps {

}

export default function Footer(props: IFooterProps): JSX.Element {
    return (
        <footer>
            <Container type={EContainerType.Default}>
                <Address />
            </Container>
        </footer>
    );
}