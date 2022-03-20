import React, { Fragment, useContext } from 'react';

import { DataContext, IDataContext } from '../App';
import { Container, EContainerType } from './Container';
import { Contacts } from './Contacts/Contacts';
import { SocialsCircleButton } from './Socials/SocialsCircleButton';

export default function Footer(): JSX.Element {
    const year: number = new Date().getFullYear();

    return (
        <footer className="mt-auto border-top bg-white">
            <Container type={EContainerType.Default} className="container row g-3 py-3 my-3 mx-auto px-0">
                <section className="col-12 col-md-auto px-3 me-md-5">
                    <Contacts />
                </section>

                <section className="col-12 col-md-auto px-3 me-md-5">
                    <Address />
                </section>

                <section className="col-12 col-md-auto px-3 me-md-5">
                    <Hours />
                </section>
            </Container>

            <section className="bg-ppp-beige-900 text-white py-1">
                <Container type={EContainerType.Default}>
                    <small>© {year} Papa's Pretzel Place. All Rights Reserved</small>
                </Container>
            </section>
        </footer>
    );
}

const Address = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { address } = data.baseInformation;

    return (
        <address>
            <article>
                <h2 className="h4">Address</h2>
                <p>
                    {address.street}<br />
                    {address.city}<br />
                    {address.state}
                </p>
            </article>
        </address>
    );
}

const Hours = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { openHours } = data.baseInformation;

    if (!openHours.text)
        return <Fragment />;

    return (
        <article>
            <h2 className="h4">Hours</h2>
            <p>{openHours.text}</p>
        </article>
    );
}

const Lowbar = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { address, openHours, socialMedia } = data.baseInformation;

    const scrollTop = (): void => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="d-flex justify-content-between flex-nowrap align-items-end mb-2">
            <section>
                <div className="d-flex flex-wrap">
                    {
                        address.street && address.city && address.state &&
                        <article className="me-5">
                            <h2 className="h4">Address</h2>
                            <p>
                                {address.street}<br />
                                {address.city}<br />
                                {address.state}
                            </p>
                        </article>
                    }

                    {
                        openHours.text &&
                        <article>
                            <h2 className="h4">Hours</h2>
                            <p>{openHours.text}</p>
                        </article>
                    }
                </div>

                {
                    socialMedia.facebook &&
                    <div className="mb-3">
                        <h2 className="h4">Follow us</h2>
                        <SocialsCircleButton />
                    </div>
                }
            </section>

            <div>
                <button type="button" className="btn btn-link text-center" onClick={scrollTop}>
                    <i className="bi bi-arrow-up d-block fs-5"></i>
                    <span className="text-truncate">Back to top</span>
                </button>
            </div>
        </div>
    );
}
