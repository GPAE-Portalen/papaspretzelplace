import React from 'react';

import { Container, EContainerType } from './Container';

import { Offcanvas } from './Offcanvas';

export interface IHeaderProps {
    
}

export default function Header(props: IHeaderProps): JSX.Element {
    return (
        <header>
            <Container type={EContainerType.Default} className="py-2">
                <Offcanvas />
            </Container>
        </header>
    );
}