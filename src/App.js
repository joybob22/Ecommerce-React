import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom';
import { Footer } from './components/footer'; 
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Products } from './components/products';
import { Cart } from './components/cart';
import { ProductDetail } from './components/productDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/product/:productId" component={ProductDetail}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
