import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IProduct } from '../../../interfaces/index';

export const ProductCard = (product: IProduct): JSX.Element => {
    const productPath: string = encodeURI(`/products/${product.name}`);
    const imagePath: string = encodeURI(`/products/${product.image.name}.${product.image.type}`);

    const renderTags = (tags: [string]) => tags.map((tag: string) => {
        return (
            <span className="badge rounded-pill bg-ppp-beige-100 me-1 text-uppercase text-dark">
                {tag}
            </span>
        );
    });

    return (
        <article key={product.name} className="product-card card shadow h-100">
            <div className="card-img-top my-1">
                <LazyLoadImage
                    alt={product.name}
                    src={imagePath}
                    className="img-thumbnail border-0"
                />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">
                    <Link to={productPath} className="text-decoration-none text-dark stretched-link">
                        {product.name}
                    </Link>
                </h5>

                <p className="card-text">
                    {product.description}
                </p>

                {
                    product.tags &&
                    <div className="mt-auto">
                        {renderTags(product.tags)}
                    </div>
                }
            </div>
        </article>
    );
};