import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    containerId: string;
}

export const Portal = (props: IPortalProps) => {
    const containerElement: HTMLElement | null = document.getElementById(props.containerId);

    return ReactDOM.createPortal(
        props.children,
        containerElement as HTMLElement
    );
}