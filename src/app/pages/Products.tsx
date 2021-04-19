import React, { useEffect, useState } from "react";

import { IProduct } from '../../interfaces'

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
        description: description
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

    return (
        <React.Fragment>
            <SEO {...seo} />

            <Header {...header} />

            <Main>
                <article>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </article>
            </Main>
        </React.Fragment>
    );
}
