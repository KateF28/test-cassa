import React, {useContext, useEffect, useState} from "react";
import SimpleBar from 'simplebar-react';
import {CartItemsContext} from "../../context/cartItems/cartItemsContext";

import cartImg from '../../assets/images/buy@1X.png';
import styles from './ProductChoose.module.scss';
import 'simplebar/dist/simplebar.min.css';

export const ProductChoose = ({product}) => {
    const {show, addCartItem} = useContext(CartItemsContext);
    const takeItemsAmountArr = (arr) => {
        for (let i = 1; i <= 50; i++) {
            arr.push(i);
        }
        return arr;
    };
    const productsNumberArr = takeItemsAmountArr([]);
    const [itemsAmount, setItemsAmount] = useState({
        selectedItem: 3,
        showItems: false
    });

    useEffect(() => {
        setItemsAmount((itemsAmount) => ({...itemsAmount}));
        // eslint-disable-next-line
    }, []);

    const dropDown = () => {
        setItemsAmount((itemsAmount) => ({
            ...itemsAmount,
            showItems: !itemsAmount.showItems,//
        }))
    };

    const selectItem = (item) => {
        setItemsAmount((itemsAmount) => ({
            ...itemsAmount,
            selectedItem: item
        }))
    };
    const onHover = (event) => {
        for (let el of event.currentTarget.getElementsByTagName('*')) {
            if (el.classList.contains(styles.selected)) {
                el.classList.remove(styles.selected);
            }
        }
    };

    return (
        <div className={styles.productChoose}>
            <p className={styles['productChoose__discount']}>{`Offerta limitata -${product.discount}%`}</p>
            <p className={styles['productChoose__prices']}>
                <span className={styles['productChoose__finalPrice']}>
                    {`$${(product.price * product.discount / 100).toFixed(2)}`}
                </span>
                <span className={styles['productChoose__price']}>
                    {`${(product.price).toFixed(2)}$`}
                </span>
            </p>
            <div className={styles['productChoose__row']}>
                <div className={styles['productChoose__select']}>
                    <div className={styles['productChoose__selectContainer']}>
                        <div className={styles['productChoose__selectedItem']}>
                            {itemsAmount.selectedItem}
                        </div>
                        <div
                            className={styles['productChoose__selectArrow']}
                            onClick={() => dropDown()}
                        ><span
                            className={`${itemsAmount.showItems ? styles['productChoose__selectArrowUp'] : styles['productChoose__selectArrowDown']}`}/>
                        </div>
                    </div>
                    <div className={styles['productChoose__selectItems']}
                         style={{display: itemsAmount.showItems ? 'block' : 'none'}}
                         onMouseOver={onHover}>
                        <SimpleBar autoHide={false} style={{maxHeight: 187}}
                                   scrollbarMinSize={40}>
                            {productsNumberArr.map((number) => <div
                                key={number}
                                onClick={() => {
                                    selectItem(number);
                                    dropDown();
                                }}
                                className={
                                    // itemsAmount.selectedItem === number ?
                                    // `${styles['productChoose__item']} ${styles.selected}` :
                                    styles['productChoose__item']}
                            >{itemsAmount.selectedItem === number ?
                                <span className={`${styles['productChoose__itemChoose']} ${styles.selected}`}>{number}</span> :
                                <span className={styles['productChoose__itemChoose']}>{number}</span>}
                                </div>)}
                        </SimpleBar>
                    </div>
                </div>
                <button className={styles['productChoose__btn']} type='button' onClick={() => {
                    addCartItem(product, itemsAmount.selectedItem);
                    show();
                }}>
                    <img src={cartImg} alt="Cart"/>
                </button>
            </div>
        </div>
    )
};
