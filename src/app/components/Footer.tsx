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

                <Lowbar />
            </Container>

            <section className="bg-light py-1">
                <Container type={EContainerType.Default}>
                    <small className="text-muted">© 2021 Papa's Pretzel Place. All Rights Reserved</small>
                </Container>
            </section>
        </footer>
    );
}

const Lowbar = (): JSX.Element => {
    const scrollTop = (): void => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-2">
            <SocialsCircleButton />

            <div>
                <button type="button" className="btn btn-link text-center" onClick={scrollTop}>
                    <i className="bi bi-arrow-up d-block fs-5"></i>
                    <span>Back to top</span>
                </button>
            </div>
        </div>
    );
}