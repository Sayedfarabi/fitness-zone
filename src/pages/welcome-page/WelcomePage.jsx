import React, { useContext } from 'react';
import { DatabaseContext } from '../../layout/Root';
import ProductCard from '../home/product-slides/product-card/ProductCard';

const WelcomePage = () => {
    const { products } = useContext(DatabaseContext);

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 py-6 md:py-8'>
                {
                    products &&
                    products.map(product => {
                        return <ProductCard
                            key={product?._id}
                            product={product}
                        >
                        </ProductCard>
                    })
                }
            </div>
        </section>
    );
};

export default WelcomePage;