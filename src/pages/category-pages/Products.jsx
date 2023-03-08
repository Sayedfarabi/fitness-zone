import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../home/product-slides/product-card/ProductCard';

const Products = () => {
    const data = useLoaderData()
    const products = data?.products;
    // console.log(products);
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 m-2 md:m-4'>
                {
                    products &&
                    products.map(product => {
                        return <ProductCard
                            key={product?._id}
                            product={product}></ProductCard>
                    })
                }
            </div>
        </section>
    );
};

export default Products;