import React from 'react';

export interface IAlertProps {
    children: React.ReactNode;
    type: string;
    className?: string;
}

export default function Alert(props: IAlertProps): JSX.Element {
    return (
        <div className={`alert alert-${props.type} ${props.className}`} role="alert">
            {props.children}
        </div>
    );
}