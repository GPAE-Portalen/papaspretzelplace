import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import EnvironmentVariables from './environmentVariables';

import './app/styles/index.css';

import App from './app/App';
import store from './app/store';

declare global {
    type Guid = string;

    interface Window {
        envDev: boolean;
        envProd: boolean;
    }
}

function initProduction() {
    console.log('prod');
}

function initDevelopment() {
    console.log('dev');
}

(async () => {
    const rootElement: HTMLElement | null = document.getElementById('root');

    window.envProd = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Production;
    window.envDev = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Development;

    await (() => {
        if (window.envProd) initProduction();
        else initDevelopment();
    })();

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>, rootElement
    );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
