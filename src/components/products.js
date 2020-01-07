import React from 'react';
import { ProductItem } from './productItem';
import store from '../store';
import '../styles/products.css';

export class Products extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
    render() {
        return(
            <div className="products">
                {store.getState().products.map((p) => (
                        <ProductItem key={p.key} product={p}/>
                ))}
            </div>
        )
    }
}