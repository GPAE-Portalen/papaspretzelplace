import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const headerRoot: HTMLElement | null = document.getElementById('header-root') as HTMLElement;

export interface IHeaderProps {
    children: ReactNode;
}

export const Header = (props: IHeaderProps): JSX.Element => {
    const header = document.createElement('header');

    React.useEffect(() => {
        header.classList.add('shadow');
        headerRoot.appendChild(header);

        return () => {
            headerRoot.removeChild(header);
        }
    }, []);

    return ReactDOM.createPortal(
        props.children,
        header
    );
}