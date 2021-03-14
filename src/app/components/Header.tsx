import React from 'react';

export interface IHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function Header(props: IHeaderProps): JSX.Element {
    return (
        <header className={props.className}>
            {props.children}
        </header>
    );
}