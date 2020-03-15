import {ADD_CARTITEM, FETCH_CARTITEMS, SHOW_CART, HIDE_CART, SHOW_LOADER} from '../types';

let updateCartItems = (state, newOrUpdatedItem) => {
    const {cartItems} = state;
    const chosenCartItemIndex = cartItems.findIndex(({id}) => id === newOrUpdatedItem.id);
    if (chosenCartItemIndex === -1) {
        //add element to array:
        return [...cartItems, newOrUpdatedItem];
    }
    //update element in array:
    return [
        ...cartItems.slice(0, chosenCartItemIndex),
        newOrUpdatedItem,
        ...cartItems.slice(chosenCartItemIndex + 1)
    ]
};

const handlers = {
    [SHOW_CART]: (state) => ({...state, visible: true}),
    [HIDE_CART]: state => ({...state, visible: false}),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_CARTITEM]: (state, {payload}) => ({
        ...state,
        cartItems: updateCartItems(state, payload)
    }),
    [FETCH_CARTITEMS]: (state) => ({...state, loading: false}),
    // [REMOVE_CARTITEM]: (state, {payload}) => ({
    //     ...state,
    //     cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload)
    // }),
    DEFAULT: state => state
};

export const cartItemsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};
