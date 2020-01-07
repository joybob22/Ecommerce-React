import React from 'react';
import { 
    Link
   }
from 'react-router-dom';
import '../styles/navbar.css'

export class NavBar extends React.Component {
    render() {
        return(
            <div id="navbarContainer">
                <div className="containerOverlay">
                    <div className="linkContainer">
                        <Link to="/home">Home</Link>
                    </div>
                    <div className="linkContainer">
                        <Link to="/products">Products</Link>
                    </div>
                    <div className="linkContainer">
                        <Link to="/cart">Cart</Link>
                    </div>
                </div>
            </div>
        )
    }
}