import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { products } from './data';

class ProductForm extends Component {
	
    render() {
        return (
            <div className='product-form-container'>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        );
    }
}

export default ProductForm;