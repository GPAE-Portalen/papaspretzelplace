import React, { useState } from 'react';

import { IProduct } from '../../../interfaces/index';

import { ProductCard } from './ProductCard';

interface ProductGridProps {
    products: IProduct[];
}

export const ProductGrid = (props: ProductGridProps): JSX.Element => {
    const { products } = props;

    const [numberOfProducts, setNumberOfProducts] = useState<number>(12);

    const incrementNumberOfProducts = (increment: number): void => {
        const increase: number = numberOfProducts + increment;
        const increaseHitsLimit: boolean = increase > products.length;

        setNumberOfProducts(increaseHitsLimit ? products.length : increase);
    };

    const renderProductCards = (): JSX.Element[] => {
        return products.filter((product: IProduct) => {
            return products.indexOf(product) < numberOfProducts;
        }).map((product: IProduct) => {
            return (
                <div key={product.name} className="mb-3 col-12 col-md-6 col-lg-4">
                    <ProductCard {...product} />
                </div>
            )
        });
    };

    return (
        <section className="row">
            {renderProductCards()}

            <span className="text-center mt-3">{`Showing ${numberOfProducts} of ${products.length} products`}</span>

            {
                numberOfProducts < products.length &&
                <button
                    type="button"
                    className="btn btn-ppp-blue text-white mx-auto mt-3"
                    onClick={() => incrementNumberOfProducts(6)}
                    style={{ width: 'fit-content' }}>
                    <i className="fas fa-chevron-down"></i>
                    <span>&nbsp;Load more products</span>
                </button>
            }
        </section>
    );
};