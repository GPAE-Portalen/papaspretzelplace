import React from 'react';

import { Container, EContainerType } from './Container';

import { Offcanvas } from './Offcanvas';

export interface IHeaderProps {
    
}

export default function Header(props: IHeaderProps): JSX.Element {
    return (
        <header className="navbar fixed-top bg-ppp-red bg-gradient shadow">
            <Container type={EContainerType.Default} className="justify-content-end">
                <Offcanvas />
            </Container>
        </header>
    );
}