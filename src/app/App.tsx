import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BootstrapColor, bootstrapColorName } from '../enums/bootstrap';

import Alert from './components/Alert';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const Order = React.lazy(() => import("./pages/Order"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
    return (
        <React.Fragment>
            <Alert type={bootstrapColorName[BootstrapColor.Light]} className={`d-none border-bottom color-${bootstrapColorName[BootstrapColor.PppRed]}`}>
                <span>This website is under construction! Visit our <a href="https://www.facebook.com/papaspretzelplace" target="_blank" rel="noreferrer">Facebook page</a> for more information.</span>
            </Alert>

            <Header>
                <Navigation />
            </Header>

            <Router>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
}