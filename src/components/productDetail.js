import React from 'react';
import store from '../store';

export class ProductDetail extends React.Component {
    product = {
        id: '',
        title: '',
        description: '',
        img: '',
        price: '',
        rating: '',
        category: '',
        key: ''
    }
    componentDidMount() {
        store.subscribe(() => this.forceUpdate(this.whenUpdated()))
    }
    whenUpdated = () => {
        this.product = store.getState().products[this.props.match.params.productId - 1]
        console.log("Made it to whenUpdated");
    }
    render() {
        return (
            <div>
                <img alt="Product" src={this.product.img}></img>
                <h1>{this.product.title}</h1>
                <p>{this.product.description}</p>
            </div>
        )
    }
}