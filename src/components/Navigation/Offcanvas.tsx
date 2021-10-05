import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, EContainerType } from '../Container';

import { Logo } from '../Logo';
import { SocialsButton } from '../Socials/SocialsButton';
import { Address } from '../Contacts/Address';
import { DataContext, IDataContext } from '../../App';

export const Offcanvas = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { address, openHours } = data.baseInformation;
    const fullAddress: string = `${address.street}, ${address.city}, ${address.state}`;
    const addressUrl: string = encodeURI(fullAddress);

    return (
        <Fragment>
            <div className="bg-ppp-red bg-gradient">
                <Container type={EContainerType.Default} className="d-flex justify-content-between w-100 align-items-center">
                    <div className="text-uppercase fw-bold text-white">Papa's Pretzel Place</div>

                    <i className="bi bi-justify-right text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ fontSize: '1.75rem' }}></i>
                </Container>
            </div>

            <div className="bg-light bg-gradient w-100">
                <Container type={EContainerType.Default}>
                    <a href={`https://maps.google.com/maps?hl=en&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer" className="d-inline-block my-1 text-decoration-none text-dark">
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;{fullAddress}
                    </a>
                </Container>
            </div>

             {
                openHours &&
                <div className="bg-ppp-beige-100 bg-gradient w-100 border-top border-ppp-blue-100">
                    <Container type={EContainerType.Default} className="text-end">
                        <small className="text-uppercase fw-bold d-block">{openHours.text.toUpperCase()}</small>
                    </Container>
                </div>
             }

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                <div className="offcanvas-header justify-content-end">
                    {
                        openHours &&
                        <div className="text-uppercase fw-bold flex-grow-1">{openHours.text.toUpperCase()}</div>
                    }

                    <i className="bi bi-x-lg" data-bs-dismiss="offcanvas"></i>
                </div>

                <div className="offcanvas-body d-flex flex-column">
                    <section className="mb-4">
                        <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                        <nav className="py-3">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item bg-ppp-red bg-gradient shadow fw-bold rounded" data-bs-dismiss="offcanvas">
                                    <NavLink to="/" className="nav-link text-white p-1">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item bg-ppp-red bg-gradient mt-3 shadow fw-bold rounded" data-bs-dismiss="offcanvas">
                                    <NavLink to="/menu" className="nav-link text-white p-1">
                                        Menu
                                    </NavLink>
                                </li>

                                {
                                    window.envDev &&
                                    <Fragment>
                                         <li className="nav-item bg-ppp-red bg-gradient mt-3 shadow fw-bold rounded" data-bs-dismiss="offcanvas">
                                            <NavLink to="/about" className="nav-link text-white p-1">
                                                About
                                            </NavLink>
                                         </li>

                                         <li className="nav-item bg-ppp-red bg-gradient mt-3 shadow fw-bold rounded" data-bs-dismiss="offcanvas">
                                            <NavLink to="/contact" className="nav-link text-white p-1">
                                                Contact
                                            </NavLink>
                                         </li>
                                    </Fragment>
                                }
                            </ul>
                        </nav>
                    </section>

                    <section className="mt-auto">
                        <SocialsButton />

                        <Address />
                    </section>
                </div>
            </div>
        </Fragment>
    );
}
