import React from 'react';

export default function withPage(WrappedComponent, options = {}) {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    const HOC = class extends React.Component {
        componentDidMount() {
            scrollTop();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
}