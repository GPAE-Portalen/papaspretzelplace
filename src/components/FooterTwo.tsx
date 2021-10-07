import React, {useContext, Fragment} from 'react';

import { DataContext, IDataContext } from '../App';

import { Container, EContainerType } from './Container';

import { Contacts } from './Contacts/Contacts';
import { SocialsCircleButton } from './Socials/SocialsCircleButton';

export default function FooterTwo(): JSX.Element {
    const data: IDataContext = useContext(DataContext);
    const { address } = data.baseInformation;
    const year: number = new Date().getFullYear();

    return (
        <footer className="mt-auto border-top">
            <div className="row g-0">
                <div className="col-12 col-md-6">

                </div>
                <div className="col-12 col-md-6 bg-ppp-blue d-flex p-3 p-md-5">
                    <div className="m-auto">
                        <Address />
                    </div>               
                </div>
            </div>

            {
                address.street && 
                <Container type={EContainerType.Default} className="py-3">
                    <div className="mb-3">
                        <Contacts />
                    </div>
                    <Lowbar />
                </Container>
            }

            <section className="bg-light py-1">
                <Container type={EContainerType.Default}>
                    <small>© {year} Papa's Pretzel Place. All Rights Reserved</small>
                </Container>
            </section>
        </footer>
    );
}

export const Address = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { contacts, address } = data.baseInformation;
    const fullAddress: string = `${address.street}, ${address.city}, ${address.state}`;
    const addressUrl: string = encodeURI(fullAddress);

    return (
        <address className="big-address pt-3">
            {
                address.street && address.city && address.state &&
                <Fragment>
                    <a href={`https://maps.google.com/maps?hl=en&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer" className="d-inline-block my-3 text-white">
                        <i className="bi bi-geo-alt me-3"></i>{fullAddress}
                    </a>

                    <br />
                </Fragment>
            }

            {
                contacts.emailAddress &&
                <Fragment>
                    <a href={`mailto:${contacts.emailAddress}`} className="d-inline-block my-3 text-white">
                        <i className="bi bi-envelope me-3"></i>{contacts.emailAddress}
                    </a>

                    <br />
                </Fragment>
            }

            {
                contacts.phoneNumber &&
                <a href={`tel:${contacts.phoneNumber}`} className="d-inline-block my-3 text-white">
                    <i className="bi bi-telephone me-3"></i>{contacts.phoneNumber}
                </a>
            }
        </address>
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
