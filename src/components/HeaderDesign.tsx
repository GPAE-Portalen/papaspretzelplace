import React, { useContext } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext, IDataContext } from '../App';

import { ILogoProps } from './Logo';
import { SocialsButton } from './Socials/SocialsButton';
import { ISocialsCircleButton, SocialsCircleButton } from './Socials/SocialsCircleButton';

export interface IHeaderDesignProps {

}

export default function HeaderDesign(props: IHeaderDesignProps): JSX.Element {
    const data: IDataContext = useContext(DataContext);
    const { address } = data.baseInformation;

    const logoProps: ILogoProps = {
        alt: "Papa's Pretzel Place Logo",
        height: "225px"
    };

    const SocialsCircleButtonProps: ISocialsCircleButton = {
        className: "me-lg-3"
    };

    return (
        <Fragment>
            <header>
                <div className="bg-white p-3">
                    <div className="container p-0 d-flex justify-content-between align-items-center mb-3">
                        <address className="ms-lg-3 mb-0">
                            <a href={`https://maps.google.com/maps?hl=en&q=${address.uri}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-one-one ppp-font-bold">
                                <i className="bi bi-geo-alt-fill"></i>&nbsp;{address.fullAddress}
                            </a>
                        </address>

                        <div>
                            <div className="d-lg-none">
                                <SocialsCircleButton {...SocialsCircleButtonProps} />
                            </div>
                            <div className="d-none d-lg-block">
                                <SocialsButton {...SocialsCircleButtonProps} />
                            </div>
                        </div>
                    </div>

                    <Logo {...logoProps} />

                    <p className="text-center fs-4 my-3">Fresh Pretzels with an Artisan Twist</p>
                </div>
            </header>

            <StickyNav />
        </Fragment>
    );
}

const StickyNav = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-dark bg-ppp-red py-2">
                <div className="container px-0">
                    <ul className="navbar-nav flex-row text-nowrap mx-auto hide-scroll">
                        <li className="nav-item ms-3 me-2">
                            <NavLink exact to="/" className="nav-link pb-0" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/menu" className="nav-link pb-0" activeClassName="active">
                                Menu
                            </NavLink>
                        </li>
                        {
                            window.envDev && window.envProd &&
                            <Fragment>
                                <li className="nav-item mx-2">
                                    <NavLink to="/order" className="nav-link pb-0" activeClassName="active">
                                        Order
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/address" className="nav-link pb-0" activeClassName="active">
                                        Address
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-2 me-3">
                                    <NavLink to="/contacts" className="nav-link pb-0" activeClassName="active">
                                        Contacts
                                    </NavLink>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const Logo = (props: ILogoProps): JSX.Element => {
    const standardClassNames: string = 'position-relative overflow-hidden';
    const classNames: string = props.className ? `${standardClassNames} ${props.className}` : standardClassNames;

    const standardStyle: React.CSSProperties = {
        height: `calc(${props.height} * 1.25)`,
        transform: `translate(-50%, calc(50% - (${props.height} * 1.25))`,
        top: '50%',
        left: '50%',
        maxWidth: '180%'
    };

    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={classNames} style={{ height: `${props.height}` }}>
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt={props.alt} height={props.height} width={props.width} className="position-absolute" style={style} />
        </div>
    );
};