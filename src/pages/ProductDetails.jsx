import React from 'react'
import { useParams } from 'react-router'
import { products } from '../data/products';
import Product from '../components/Product';

const ProductDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <div>Product Details</div>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product key={id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails