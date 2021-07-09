import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <React.Suspense fallback={<div className="d-none">Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/menu" component={Menu} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
}