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
    const path: string = window.location.pathname;

    const seo = {
        title: title,
        description: description,
        type: 'article'
    }

    const header = {
        active: path
    }

    useEffect(() => {
        (async () => {
            //const data: IProduct[] = await window.repository.getProducts();
            setProducts([
                {
                    "name": "Papa's Pretzel",
                    "description": "Our signature pretzel hot out of the oven!",
                    "image": {
                        "name": "papas_pretzel",
                        "type": "jpg",
                        "width": "720",
                        "height": "960"
                    }
                },
                {
                    "name": "Mini Papa's Pretzel",
                    "description": "Our signature mini pretzel hot out of the oven!",
                    "image": {
                        "name": "mini_papas_pretzel",
                        "type": "jpg",
                        "width": "960",
                        "height": "720"
                    }
                },
                {
                    "name": "Jalapeño Cheddar Pretzel",
                    "description": "Our jalapeño cheddar pretzel hot out of the oven!",
                    "image": {
                        "name": "jalapeno_cheddar",
                        "type": "jpg",
                        "width": "720",
                        "height": "960"
                    }
                },
                {
                    "name": "Cheddar Pretzel",
                    "description": "Our cheddar pretzel hot out of the oven!",
                    "image": {
                        "name": "cheddar_pretzel",
                        "type": "jpg",
                        "width": "720",
                        "height": "960"
                    }
                }
            ]);
        })()
    }, [setProducts]);

    useEffect(() => {
        console.log(products);
    }, [products]);

    const renderProducts = (products: IProduct[]): JSX.Element[] => {
        return products.map((product: IProduct) => {
            const uri: string = encodeURI(`/products/${product.name}`);
            const imgSrc: string = `/products/${product.image.name}.${product.image.type}`;

            return (
                <div key={product.name} className="mb-3 col-12 col-lg-6 col-xl-4">
                    <article key={product.name} className="card shadow h-100">
                        <div className="card-img-top position-relative" style={{ height: '256px', overflow: 'hidden' }}>
                            <LazyLoadImage
                                alt={product.name}
                                src={imgSrc}
                                className="position-absolute"
                                style={{ width: 'inherit', transform: 'translateY(-50%)', top: '50%' }}
                            />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href={uri} className="btn btn-ppp-red mt-auto" style={{ width: 'fit-content' }}>Details</a>
                        </div>
                    </article>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header {...header} />

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
