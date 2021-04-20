import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IProduct } from '../../interfaces/index';

import SEO, { ISEOProps } from '../components/SEO';
import Header from '../components/Header';
import Main from '../components/Main';

interface IProductRouteProps {
    productName: string;
}

export default function RouteProduct(props: RouteComponentProps<IProductRouteProps>): JSX.Element {
    return (
        <Switch>
            <Route path={props.match.url} render={() => <Product />} />
        </Switch>
    );
}

function Product(): JSX.Element {
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [seo, setSeo] = useState<ISEOProps>({} as ISEOProps);

    useEffect(() => {
        const products = window.repository.getProducts();

        const findProduct: IProduct | undefined = products.find((product: IProduct) => {
            return window.location.pathname === encodeURI(`/products/${product.name}`);
        });

        if (!findProduct) {
            setNotFound(true);
        } else {
            setProduct(findProduct);
        }
    }, []);

    useEffect(() => {
        if (product.name) {
            const url = encodeURI(`${window.location.origin}/products/${product.image.name}.${product.image.type}`);

            setSeo({
                title: product.name,
                description: product.description,
                type: 'article',
                image: {
                    url,
                    type: `image/${product.image.type}`,
                    width: product.image.width,
                    height: product.image.height
                }
            });
        }
    }, [product]);

    if (notFound) return <Redirect to='/404' />;

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header />

            <Main>
                <article>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <LazyLoadImage
                        alt={product.name}
                        src={encodeURI(`/products/${product.image?.name}.${product.image?.type}`)}
                        className="w-100"
                        style={{ maxWidth: 'fit-content' }}
                    />
                </article>
            </Main>
        </React.Fragment>
    );
}