import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='product-item-container'>
                <span className='product-image'>
                   <img src={this.props.product.image} alt='product'/>
                </span>
                <div className='product-detail'>
                    <span className='product-name'>
                    <h2>{this.props.product.name}</h2>
                    </span>
                    <div className='product-desc'>
                        <p>{this.props.product.desc}</p>
                    </div>
                    <div className='product-buy'>
                        <span className='product-price'>{this.props.product.price}</span>
                        <span className='btn'>
                            <button type='button'>Mua ngay</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;