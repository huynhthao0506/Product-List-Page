import React, { Component } from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductForm from './ProductForm/ProductForm';

class ProductApp extends Component {
    render() {
        return (
            < >
                <ProductHeader />
                <ProductForm />
            </>
        );
    }
}

export default ProductApp;