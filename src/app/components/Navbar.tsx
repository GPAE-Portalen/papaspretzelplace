import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'react-feather';

export default function Navbar(): JSX.Element {
    const handleActive = (event: any): void => {
        const links = document.getElementsByClassName('nav-link');

        Array.from(links).forEach((link: Element) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');
        closeMenu();
    }

    const closeMenu = (): void => {
        const menuButton = document.getElementById('menu-button');
        menuButton?.click();
    }

    return (
        <nav className="fixed-bottom navbar navbar-expand-md navbar-dark bg-ppp-red shadow">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={(event) => handleActive(event)}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link" onClick={(event) => handleActive(event)}>
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <a id="menu-button" className="d-md-none" data-bs-toggle="collapse" href="#navbarNav" role="button" aria-expanded="false" aria-controls="navbarNav">
                    <Menu color="white" />
                </a>
            </div>
        </nav>
    );
}