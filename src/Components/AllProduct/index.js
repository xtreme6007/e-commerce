import React, { Component } from 'react';

import { connect } from 'react-redux';

import Product from '../Product/index.js';
import EditComponent from '../EditComponent'

class AllProduct extends Component {
    render() {
        return (
            <div>
                <h1>All Products</h1>
                {this.props.products.map((product) => (
                    <div key={product.id}>
                        {product.editing ? <EditComponent product={product} key={product.id} /> :
                            <Product key={product.id} product={product} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}
export default connect(mapStateToProps)(AllProduct);