import React from 'react';

import { Logo } from './Logo';

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-ppp-red navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <Logo alt="Papa's Pretzel Place logo" height="64px" width="auto" className="d-inline-block" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="navigation-container"></ul>
                </div>
            </div>
        </nav>
    );
}


export enum ENavigation {
    Homepage,
    AboutUs,
    OurProducts,
    MyOrder,
    ContactUs
}

export interface INavigationListProps {
    active: ENavigation | null;
}

export const NavigationList = (props: INavigationListProps): JSX.Element => {
    const navigations = {
        [ENavigation.Homepage]: {
            name: 'Homepage',
            href: '/'
        },
        [ENavigation.AboutUs]: {
            name: 'About us',
            href: '/about'
        },
        [ENavigation.OurProducts]: {
            name: 'Our products',
            href: '/products'
        },
        [ENavigation.MyOrder]: {
            name: 'My order',
            href: '/order'
        },
        [ENavigation.ContactUs]: {
            name: 'Contact us',
            href: '/contact'
        }
    }

    const navs: JSX.Element[] = Object.values(navigations).map((navigation: { name: string, href: string }) => {
        const key: number = Object.values(navigations).indexOf(navigation);

        return (
            <li key={key} className="nav-item">
                <a className={`nav-link ${props?.active === key ? 'active' : ''}`} href={navigation.href}>
                    {navigation.name}
                </a>
            </li>
        );
    });

    return (
        <React.Fragment>
            {navs}
        </React.Fragment>
    );
}