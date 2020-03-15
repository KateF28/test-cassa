import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Shop} from './pages/Shop/Shop'
import {Cart} from './pages/Cart/Cart'
import {CartItemsState} from "./context/cartItems/cartItemsState";

export const App = () => {
    return (
        <CartItemsState>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path={'/'} exact component={Shop}/>
                    <Route path={'/cart'} component={Cart}/>
                </Switch>
            </BrowserRouter>
        </CartItemsState>
    );
};
