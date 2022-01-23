import React from 'react';

import { Container, EContainerType } from './Container';

export interface IMainProps {
    children: React.ReactNode;
    classNames?: string;
    style?: React.CSSProperties;
    front?: React.ReactNode;
}

export default function Main(props: IMainProps): JSX.Element {
    const standardClassNames: string = `${props.front ? 'pb-3' : 'py-3'} mb-4 mx-auto w-100`;
    const classNames: string = props.classNames ? `${standardClassNames} ${props.classNames}` : standardClassNames;

    const standardStyle: React.CSSProperties = { };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <main role="main" className={classNames} style={style}>
            {props.front}

            <Container type={EContainerType.Default}>
                {props.children}
            </Container>
        </main>
    );
}