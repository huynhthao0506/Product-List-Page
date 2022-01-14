import React, { Component } from 'react';
import ProductHeader from './ProductHeader';
import ProductForm from './ProductForm';

class ProductApp extends Component {
    render() {
        return (
            < >
                <div className='app-container'>
                    <ProductHeader />
                    <div className='product-container'>
                        <ProductForm />
                    </div>
                </div> 
            </>
        );
    }
}

export default ProductApp;