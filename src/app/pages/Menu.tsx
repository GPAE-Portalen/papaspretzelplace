import React, { useEffect, useState } from "react";

import SEO, { ISEOProps } from "../components/SEO";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { Logo } from '../components/Logo';
import { SocialsButton } from '../components/SocialsButton';
import { MenuItems } from '../components/MenuItems';
import { IBlogPost } from "../../interfaces";

export default function Menu(): JSX.Element {
    const [blogPost, setBlogPost] = useState <IBlogPost>();

    const title: string = 'Menu';
    const description: string = 'Fresh Pretzels with an Artisan Twist';

    useEffect(() => {

        (async () => {
            var jsonData = window.repository.getBlogPost('2021-08-17_hello-world');
            setBlogPost(await jsonData);
        })();

        



        

        console.log(blogPost);
    }, [blogPost]);


    const seo: ISEOProps = {
        title,
        description: "Papa's Pretzel Place is a locally owned soft pretzel company. They are a wholesale and retail soft pretzel bakery and eatery at 302 Mill Street, Bristol, PA 19007 opens daily 11am."
    }

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <Logo alt="Papa's Pretzel Place Logo" height="260px" />

                <section className="text-center">
                    <article>
                        <h1>
                            <small className="text-muted d-block fs-3">{title}</small>
                            <div className="display-4">Papa's Pretzel Place</div>
                        </h1>
                        <p>{description}</p>
                    </article>

                    <SocialsButton />

                    <p>PA State Sales Tax 6%</p>
                </section>

                <MenuItems />
            </Main>

            <Footer />
        </React.Fragment>
    );
}
