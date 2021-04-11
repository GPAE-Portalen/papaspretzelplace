import React from 'react';

export enum EContainerType {
    Default,
    Fluid
}

export const containerTypeClassName = {
    [EContainerType.Default]: '',
    [EContainerType.Fluid]: '-fluid',
}

export interface IContainerProps {
    type: EContainerType;
    children: React.ReactNode;
    className?: string;
}

export const Container = (props: IContainerProps): JSX.Element => {
    return (
        <div className={`container${containerTypeClassName[props.type]} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
}