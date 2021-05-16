import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default function withTracker(WrappedComponent, options = {}){
    const trackPage = page => {
        console.log(page);

        ReactGA.set({
            page,
            ...options
        });
        ReactGA.pageview(page);
    };

    const HOC = props => {
        useEffect(() => {
            if (window.envProd) {
                trackPage(props.location.pathname);
            }
        }, [props.location.pathname]);

        return <WrappedComponent {...props} />;
    };

    return HOC;
};