import React from 'react'
import { useNavigate } from 'react-router';

const Product = ({ product }) => {
    const { id, name, price } = product;

    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: '40px' }}>
            <div>Product Detail</div>
            <div>Name:{name}</div>
            <div>Price:{price}</div>
            <button onClick={() => navigate("/product-details/" + id)}>Go To Detail Page</button>
        </div>
    )
}

export default Product