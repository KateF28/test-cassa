import React, {useReducer} from 'react';
import {CartItemsContext} from './cartItemsContext'
import {cartItemsReducer} from './cartItemsReducer'
import {ADD_CARTITEM, FETCH_CARTITEMS, SHOW_LOADER, SHOW_CART, HIDE_CART} from '../types'

export const CartItemsState = ({children}) => {
    const initialState = {
        cartItems: [],
        visible: false,
        loading: false//
    };
    const [state, dispatch] = useReducer(cartItemsReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    let fetchCartItems = () => {
        try {
            showLoader();
            dispatch({type: FETCH_CARTITEMS})
        } catch (e) {
            let err = new Error(e.message);
            console.log(err);
        }
    };

    let addCartItem = (product, number) => {
        const cartItem = {...product, number};

        try {
            const payload = {...cartItem};
            dispatch({type: ADD_CARTITEM, payload})
        } catch (e) {
            let err = new Error(e.message);
            console.log(err);
        }
    };

    // const removeCartItem = id => {
    //     dispatch({
    //         type: REMOVE_CARTITEM,
    //         payload: id
    //     })
    // };

    const show = () => dispatch({type: SHOW_CART});

    const hide = () => dispatch({type: HIDE_CART});

    return (
        <CartItemsContext.Provider value={{
            showLoader, show, hide, addCartItem,
            // removeCartItem,
            fetchCartItems,
            loading: state.loading,//
            visible: state.visible,
            cartItems: state.cartItems
        }}>
            {children}
        </CartItemsContext.Provider>
    )
};
