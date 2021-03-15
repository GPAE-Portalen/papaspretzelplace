import React from 'react';

export default function FacebookFeed(): JSX.Element {
    return (
        <div className="mx-auto text-center">
            <div className="fb-page" data-href="https://www.facebook.com/papaspretzelplace" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/papaspretzelplace" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/papaspretzelplace">Papa&#039;s Pretzel Place</a>
                </blockquote>
            </div>

            <div id="fb-root"></div>
        </div>
    );
}