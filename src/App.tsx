import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withPage from './hocs/withPage';
import {
    IBaseInformation,
    IMenu
 } from './interfaces';

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export interface IDataContext {
    baseInformation: IBaseInformation;
    menu: IMenu;
}

export const DataContext = React.createContext<IDataContext>({} as IDataContext);

export default function App() {
    const data = useContext(DataContext);

    useEffect(() => {
        data.baseInformation = window.repository.getBaseInformation();
        data.menu = window.repository.getMenu();
    }, [data])

    return (
        <React.Fragment>
            <Router>
                <React.Suspense fallback={<div className="d-none">Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={withPage(Home)} />
                        <Route exact path="/menu" component={withPage(Menu)} />
                        {
                            window.envDev &&
                            <Fragment>
                                <Route exact path="/about" component={withPage(About)} />
                                <Route exact path="/contact" component={withPage(Contact)} />
                            </Fragment>
                        }                   
                        <Route path="*" component={withPage(NotFound)} />
                    </Switch>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
}