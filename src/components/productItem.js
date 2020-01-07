import React from 'react';
import '../styles/productItem.css'
import { 
    Link
   }
from 'react-router-dom';

export class ProductItem extends React.Component {
    pathName = "product/" + this.props.product.id;
    render() {
        return(
            <div className="productItem">
                <Link to={this.pathName} product={this.props.product}>
                    <div className="overlay">
                        <h1>{this.props.product.title}</h1>
                        <div className="imgContainer">
                            <img src={this.props.product.img} alt={this.props.product.title} />
                        </div>
                        <p>${this.props.product.price}</p>
                    </div>
                </Link>
            </div>
        )
    }
}