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
    style?: React.CSSProperties;
}

export const Container = (props: IContainerProps): JSX.Element => {
    const standardClassName: string = '';
    const className: string = `${standardClassName}container${containerTypeClassName[props.type]}${props.className ? ` ${props.className}` : ''}`

    const standardStyle: React.CSSProperties = { };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    );
}