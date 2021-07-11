import React from 'react';

export interface ILogoProps {
    alt: string;
    height: string;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const Logo = (props: ILogoProps): JSX.Element => {
    const standardClassNames: string = 'position-relative overflow-hidden mb-3';
    const classNames: string = props.className ? `${standardClassNames} ${props.className}` : standardClassNames;

    const standardStyle: React.CSSProperties = { height: `calc(${props.height} + 100px)`, transform: `translate(-50%, calc(50% - (${props.height} + 100px))`, top: '50%', left: '50%' };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={classNames} style={{ height: `${props.height}` }}>
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt={props.alt} height={props.height} width={props.width} className="position-absolute" style={style} />
        </div>
    );
};