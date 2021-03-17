import React from 'react';

export enum ContainerType {
    Default,
    Fluid
}

export const containerTypeClassName = {
    [ContainerType.Default]: '',
    [ContainerType.Fluid]: '-fluid',
}

export interface IContainerProps {
    type: ContainerType;
    children: React.ReactNode;
    className?: string;
}

export const Container = (props: IContainerProps): JSX.Element => {
    return (
        <div className={`${props.className} container${containerTypeClassName[props.type]}`}>
            {props.children}
        </div>
    );
}