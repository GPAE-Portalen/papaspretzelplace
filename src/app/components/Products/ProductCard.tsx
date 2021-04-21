import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IProduct } from '../../../interfaces/index';

export const ProductCard = (product: IProduct): JSX.Element => {
    const productPath: string = encodeURI(`/products/${product.name}`);
    const imagePath: string = encodeURI(`/products/${product.image.name}.${product.image.type}`);

    return (
        <article key={product.name} className="product-card card shadow h-100">
            <div className="card-img-top">
                <LazyLoadImage
                    alt={product.name}
                    src={imagePath}
                />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={productPath} className="btn btn-ppp-red mt-auto align-self-end">Details</a>
            </div>
        </article>
    );
};