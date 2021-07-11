import React from 'react';

import { Container, EContainerType } from './Container';

import { Address } from './Address';
import { SocialsCircleButton } from './SocialsCircleButton';

export interface IFooterProps {

}

export default function Footer(props: IFooterProps): JSX.Element {
    return (
        <footer className="mt-auto">
            <Container type={EContainerType.Default} className="py-3">
                <Address className="mb-2" />

                <SocialsCircleButton />
            </Container>

            <section className="bg-light py-1">
                <Container type={EContainerType.Default}>
                    <small className="text-muted">© 2021 Papa's Pretzel Place. All Rights Reserved</small>
                </Container>
            </section>
        </footer>
    );
}