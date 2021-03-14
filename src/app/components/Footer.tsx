import React from 'react';

export interface IFooterProps {
    children: React.ReactNode;
    className?: string;
}

export default function Alert(props: IFooterProps): JSX.Element {
    return (
        <footer className={props.className}>
            {props.children}
        </footer>
    );
}