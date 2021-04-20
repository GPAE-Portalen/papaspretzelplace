import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IProduct } from '../../interfaces/index';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Main from '../components/Main';

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

    const renderProducts = (products: IProduct[]): JSX.Element[] => {
        return products.map((product: IProduct) => {
            const productPath: string = encodeURI(`/products/${product.name}`);
            const imagePath: string = encodeURI(`/products/${product.image.name}.${product.image.type}`);

            return (
                <div key={product.name} className="mb-3 col-12 col-lg-6 col-xl-4">
                    <article key={product.name} className="card shadow h-100">
                        <div className="card-img-top position-relative" style={{ height: '256px', overflow: 'hidden' }}>
                            <LazyLoadImage
                                alt={product.name}
                                src={imagePath}
                                className="position-absolute"
                                style={{ width: 'inherit', transform: 'translateY(-50%)', top: '50%' }}
                            />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href={productPath} className="btn btn-ppp-red mt-auto" style={{ width: 'fit-content' }}>Details</a>
                        </div>
                    </article>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <article>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </article>

                <section className="row">
                    {renderProducts(products)}
                </section>
            </Main>
        </React.Fragment>
    );
}
