import React from 'react';

import { Container, EContainerType } from './Container';

export interface IMainProps {
    children: React.ReactNode;
    classNames?: string;
}

export default function Main(props: IMainProps): JSX.Element {
    const standardClassNames: string = 'py-3 mb-5 mx-auto';
    const classNames: string = props.classNames ? `${standardClassNames} ${props.classNames}` : standardClassNames;

    return (
        <main role="main" className={classNames} style={{ maxWidth: '680px' }}>
            <Container type={EContainerType.Default} className="mb-3">
                {props.children}
            </Container>
        </main>
    );
}