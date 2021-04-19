import React from 'react';

import { Container, EContainerType } from './Container';
import { Logo } from './Logo';

export interface IHeaderProps {
    active: string;
}

export default function Header(props: IHeaderProps): JSX.Element {
    return (
        <header>
            <Container type={EContainerType.Default}>
                <Logo alt="Papa's Pretzel Place logo" height="100%" width="100%" className="m-auto" />
            </Container>
        </header>
    );
}