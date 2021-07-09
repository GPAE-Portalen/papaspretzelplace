import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMapsLink } from './GoogleMapsLink';

import Header from './Header';

export const Offcanvas = (): JSX.Element => {
    return (
        <Fragment>
            <div className="d-flex justify-content-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="bi bi-justify-right fs-2"></i>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                <div className="offcanvas-header justify-content-end">
                    <i className="bi bi-x-lg" data-bs-dismiss="offcanvas"></i>
                </div>
                <div className="offcanvas-body text-center d-flex flex-column">
                    <section>
                        <Header />

                        <p>Fresh Pretzels with an Artisan Twist!</p>
                    </section>

                    <section>
                        <nav className="pb-3 my-4">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" data-bs-dismiss="offcanvas">
                                        Home
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/menu" className="nav-link" data-bs-dismiss="offcanvas">
                                        Menu
                                </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section className="mt-auto">
                        <div className="d-flex justify-content-end mb-3 mx-auto" style={{ maxWidth: '500px' }}>
                            <a href="https://www.instagram.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold w-50 bg-ig">
                                <i className="bi bi-instagram"></i>
                                <span>&nbsp;Instagram</span>
                            </a>

                            <a href="https://www.facebook.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ms-2 fw-bold w-50">
                                <i className="bi bi-facebook"></i>
                                <span>&nbsp;Facebook</span>
                            </a>
                        </div>

                        <GoogleMapsLink />
                    </section>
                </div>
            </div>
        </Fragment>
    );
}