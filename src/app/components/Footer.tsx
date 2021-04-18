import React from 'react';

import { Container, EContainerType } from './Container';

export interface IFooterProps {
    
}

export default function Footer(props: IFooterProps): JSX.Element {
    return (
        <footer>
            <Container type={EContainerType.Default}>
                footer
            </Container>
        </footer>
    );
}