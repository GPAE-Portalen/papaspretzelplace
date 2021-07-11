import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './Logo';
import { Address } from './Address';

export const Offcanvas = (): JSX.Element => {
    return (
        <Fragment>
            <div className="d-flex justify-content-end">
                <i className="bi bi-justify-right fs-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                <div className="offcanvas-header justify-content-end">
                    <i className="bi bi-x-lg" data-bs-dismiss="offcanvas"></i>
                </div>

                <div className="offcanvas-body d-flex flex-column">
                    <section className="mb-4">
                        <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                        <p className="text-center">Fresh Pretzels with an Artisan Twist!</p>

                        <nav className="py-3">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item bg-ppp-red shadow fw-bold rounded">
                                    <Link to="/" className="nav-link text-white p-1" data-bs-dismiss="offcanvas">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item bg-ppp-red mt-3 shadow fw-bold rounded">
                                    <Link to="/menu" className="nav-link text-white p-1" data-bs-dismiss="offcanvas">
                                        Menu
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section className="mt-auto">
                        <div className="d-flex justify-content-end my-3 mx-auto">
                            <a href="https://www.instagram.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold w-50 bg-ig">
                                <i className="bi bi-instagram"></i>
                                <span>&nbsp;Instagram</span>
                            </a>

                            <a href="https://www.facebook.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ms-2 fw-bold w-50">
                                <i className="bi bi-facebook"></i>
                                <span>&nbsp;Facebook</span>
                            </a>
                        </div>

                        <Address />
                    </section>
                </div>
            </div>
        </Fragment>
    );
}