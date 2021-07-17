import React from 'react';

import { Container, EContainerType } from './Container';

import { Address } from './Address';
import { SocialsCircleButton } from './SocialsCircleButton';

export interface IFooterProps {

}

export default function Footer(props: IFooterProps): JSX.Element {
    return (
        <footer className="mt-auto border-top">
            <Container type={EContainerType.Default} className="py-3">
                <div>
                    <Address className="mb-3" />
                </div>

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
        <div className="d-flex justify-content-between flex-nowrap align-items-end mb-2">
            <div>
                <div className="d-flex flex-wrap">
                    <div className="mb-3 me-5">
                        <h4>Address</h4>
                        <div>302 Mill Street</div>
                        <div>Bristol</div>
                        <div>PA 19007</div>
                    </div>

                    <div className="mb-3">
                        <h4>Hours</h4>
                        <div>Open daily 11am-7pm</div>
                    </div>
                </div>

                <div className="mb-3">
                    <h4>Follow us</h4>
                    <SocialsCircleButton />
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-link text-center" onClick={scrollTop}>
                    <i className="bi bi-arrow-up d-block fs-5"></i>
                    <span className="text-truncate">Back to top</span>
                </button>
            </div>
        </div>
    );
}