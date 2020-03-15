import React, {useContext, Fragment, useEffect} from "react";
import {Link} from 'react-router-dom';
import {CSSTransition} from "react-transition-group";

import {PopupOrderItem} from '../../components/PopupOrderItem/PopupOrderItem';

import styles from './PopupOrder.module.scss';
import {CartItemsContext} from "../../context/cartItems/cartItemsContext";

export let PopupOrder = () => {
    const {loading, visible, cartItems, hide, fetchCartItems} = useContext(CartItemsContext);

    useEffect(() => {
        fetchCartItems();
        return () => hide();
        // eslint-disable-next-line
    }, []);
    let closePopup = (event) => {
        if (event.target.id === 'popupOrder') {
            hide();
        }
    };
    const countTotalAmount = (items) => {
        return items.reduce((total, item) => {
            return total + Number(item.number) * (Number(item.price) * Number(item.discount) / 100);
        }, 0).toFixed(2);
    };

    return (
        <Fragment>
            {visible ? <div className={styles.popupOrder} id='popupOrder' onClick={closePopup}/> : null}
            <CSSTransition in={visible} classNames={'popup'} timeout={{enter: 150}} mountOnEnter unmountOnExit>
                    <div className={`popup ${styles['popupOrder__info']}`}>
                        <div className={styles['popupOrder__closeArea']} onClick={hide}>Carello</div>
                        <div className={styles['popupOrder__body']}>
                            {loading ? <p>Loading...</p> : cartItems.map(item => (//
                                <PopupOrderItem key={item.id} item={item}/>
                            ))}
                            <p className={styles['popupOrder__text']}>Subtotale</p>
                            <p className={styles['popupOrder__total']}>{`\u20AC${countTotalAmount(cartItems)}`}</p>
                        </div>
                        <Link className={styles['popupOrder__link']} to='/cart'>Visualizza carrello</Link>
                    </div>
            </CSSTransition>
        </Fragment>
    )
};
