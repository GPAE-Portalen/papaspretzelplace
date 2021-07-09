import React from "react";

import Main from '../components/Main';
import SEO, { ISEOProps } from "../components/SEO";
import Header from '../components/Header';

import { Offcanvas } from '../components/Offcanvas';
import { GoogleMapsLink } from '../components/GoogleMapsLink';
import { MenuItems } from '../components/MenuItems';

export default function Menu(): JSX.Element {
	const title: string = 'Menu';
	const description: string = "Fresh Pretzels with an Artisan Twist!";

	const seo: ISEOProps = {
		title,
		description
	}

	return (
		<React.Fragment>
			<Main>
				<SEO {...seo} />

				<Offcanvas />

				<Header />

				<section className="text-center">
					<article>
						<h1>
							<small className="text-muted d-block fs-3">{title}</small>
							<div className="display-4">Papa's Pretzel Place</div>
						</h1>
						<p>{description}</p>
					</article>

					<GoogleMapsLink />

					<div className="d-flex justify-content-end mb-3 mx-auto" style={{ maxWidth: '500px' }}>
						<a href="https://www.instagram.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold w-50 bg-ig">
							<i className="bi bi-instagram"></i>
							<span>&nbsp;Instagram</span>
						</a>

						<a href="https://www.facebook.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ms-2 fw-bold w-50">
							<i className="bi bi-facebook"></i>
							<span>&nbsp;Facebook</span>
						</a>
					</div>

					<p>PA State Sales Tax 6%</p>
				</section>

				<MenuItems />
			</Main>
		</React.Fragment>
	);
}