import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <p>This is product details page</p>
        </div>
    );
};

export default ProductDetails;