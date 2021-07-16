import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './Logo';
import { SocialsButton } from '../components/SocialsButton';
import { Address } from './Address';

export const Offcanvas = (): JSX.Element => {
    return (
        <Fragment>
            <div className="d-flex justify-content-end">
                <i className="bi bi-justify-right text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ fontSize: '1.75rem' }}></i>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                <div className="offcanvas-header justify-content-end">
                    <i className="bi bi-x-lg" data-bs-dismiss="offcanvas"></i>
                </div>

                <div className="offcanvas-body d-flex flex-column">
                    <section className="mb-4">
                        <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                        <nav className="py-3">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item bg-ppp-red bg-gradient shadow fw-bold rounded">
                                    <Link to="/" className="nav-link text-white p-1" data-bs-dismiss="offcanvas">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item bg-ppp-red bg-gradient mt-3 shadow fw-bold rounded">
                                    <Link to="/menu" className="nav-link text-white p-1" data-bs-dismiss="offcanvas">
                                        Menu
                                    </Link>
                                </li>
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