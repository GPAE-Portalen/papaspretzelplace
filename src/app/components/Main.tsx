import React from 'react';

import { Container, EContainerType } from './Container';

export interface IMainProps {
    children: React.ReactNode;
}

export default function Main(props: IMainProps): JSX.Element {
    return (
        <main role="main" className="py-3 mb-5">
            <Container type={EContainerType.Default}>
                {props.children}
            </Container>
        </main>
    );
}