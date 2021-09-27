import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';

import EnvironmentVariables from './enums/environmentVariables';

import './styles/index.css';
import App from './App';

import Repository from './repository';

declare global {
    type Guid = string;

    interface Window {
        envDev: boolean;
        envProd: boolean;
        repository: Repository;
    }
}

function initProduction() {
    const trackingCode: string = 'G-MF307G4SJW';
    ReactGA.initialize(trackingCode, { standardImplementation: true });
}

function initDevelopment() {
    console.log('dev');
}

(async () => {
    const rootElement: HTMLElement | null = document.getElementById('root');

    window.envProd = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Production;
    window.envDev = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Development;

    window.repository = new Repository('./data/');

    (() => {
        if (window.envProd)
            initProduction();
        else
            initDevelopment();
    })();

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>, rootElement
    );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
