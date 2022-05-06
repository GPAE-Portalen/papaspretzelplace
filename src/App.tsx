import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withPage from './hocs/withPage';
import {
    IBaseInformation,
    IMenu
 } from './interfaces';

const Home = React.lazy(() => import("./pages/Home"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Order = React.lazy(() => import("./pages/Order"));
const Address = React.lazy(() => import("./pages/Address"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
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
                            window.envDev && window.envProd &&
                            <Fragment>
                                <Route exact path="/order" component={withPage(Order)} />
                                <Route exact path="/address" component={withPage(Address)} />
                                <Route exact path="/contacts" component={withPage(Contacts)} />
                            </Fragment>
                        }                   
                        <Route path="*" component={withPage(NotFound)} />
                    </Switch>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
}