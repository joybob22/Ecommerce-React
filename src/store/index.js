import React from 'react';
import uuid from 'uuid';
import { createStore} from 'redux';
import axios from 'axios';

function productsReducer(state = {products: []}, action) {
    if(action.type === 'LOAD_INITIAL_STATE') {
        return {products: action.initialState.products}
    }
    else if(action.type === 'LOAD_SINGLE_PRODUCT') {
        console.log(action.id)
        return state
    }
    return state;
}

function initialState() {
    axios.get('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
        .then(products => {
            products.data.map(item => {
                item.key = uuid.v4()
            })
            store.dispatch({
                type: 'LOAD_INITIAL_STATE',
                initialState: {
                    products: products.data
                }
            })
        }, err => {
            console.log(err);
        })
}

initialState();
                    
                    
const store = createStore(productsReducer);

export default store;