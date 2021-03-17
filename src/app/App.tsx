import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { BootstrapColor, bootstrapColorName } from '../enums/bootstrap';

import Alert from './components/Alert';

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
    return (
        <React.Fragment>
            <Alert type={bootstrapColorName[BootstrapColor.Light]} className={`border-bottom color-${bootstrapColorName[BootstrapColor.PppRed]}`}>
                <span>This website is under construction! Visit our <a href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer">Facebook page</a> for more information.</span>
            </Alert>

            <Router>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
}