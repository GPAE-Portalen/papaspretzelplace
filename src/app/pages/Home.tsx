import React from "react";

import { BootstrapColor, bootstrapColorName } from '../../enums/bootstrap';

import Alert from '../components/Alert';
import { Logo } from '../components/Logo';

export default function Home(): JSX.Element {
    return (
        <React.Fragment>
            <Alert type={bootstrapColorName[BootstrapColor.Light]} className="border-bottom">
                <span>This website is under construction! Visit our <a href="https://www.facebook.com/papaspretzelplace">Facebook page</a> for more information.</span>
            </Alert>

            <Logo alt="Papa's Pretzel Place logo" height="auto" width="75%" className="m-auto" />
        </React.Fragment>
    );
}
