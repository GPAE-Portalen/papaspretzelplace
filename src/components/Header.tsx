import React from 'react';

import { Offcanvas } from './Navigation/Offcanvas';

export interface IHeaderProps {

}

export default function Header(props: IHeaderProps): JSX.Element {
    return (
        <header className="fixed-top shadow">
            <Offcanvas />
        </header>
    );
}