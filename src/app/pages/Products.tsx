import React, { useEffect, useState } from "react";

import { IProduct } from '../../interfaces/index';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Main from '../components/Main';

import { ProductGrid } from '../components/Products/ProductGrid';

export default function Products(): JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);

    const title: string = 'Products';
    const description: string = "Papa's pretzels hot outta the oven!";

    const seo = {
        title: title,
        description: description,
        type: 'article'
    }

    useEffect(() => {
        const data: IProduct[] = window.repository.getProducts();
        setProducts(data);
    }, []);

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <article>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </article>

                <ProductGrid products={products} />
            </Main>
        </React.Fragment>
    );
}
