import React from "react";

import {Product} from '../../components/Product/Product';
import {ProductChoose} from '../../components/ProductChoose/ProductChoose';
import {PopupOrder} from '../../components/PopupOrder/PopupOrder';

import underline from '../../assets/images/doska@1X.png';
import pineappleImg from '../../assets/images/products/product_pineapple@1X.png';
import berriesImg from '../../assets/images/products/product_berries@1X.png';
import grapefruitImg from '../../assets/images/products/product_grapefruit@1X.png';
import appleImg from '../../assets/images/products/product_apple@1X.png';
import styles from './Shop.module.scss';

export const Shop = () => {
    const products = [{
        id: 1,
        name: 'Pineapple',
        imgSrc: pineappleImg,
        price: 19.00,
        discount: 50,
        number: 0
    }, {
        id: 2,
        name: 'Berries',
        imgSrc: berriesImg,
        price: 19.00,
        discount: 50,
        number: 0
    }, {
        id: 3,
        name: 'Grapefruit',
        imgSrc: grapefruitImg,
        price: 19.00,
        discount: 50,
        number: 0
    }, {
        id: 4,
        name: 'Apple',
        imgSrc: appleImg,
        price: 19.00,
        discount: 50,
        number: 0
    }];

    return (
        <div className={styles['relative']}>
            <div className={styles.shop}>
                <div className={styles['container']}>
                    <h1 className={styles['shop__heading']}>Cassa</h1>
                    <div className={styles['shop__row']}>
                        {products.map(product => (
                            <div className={styles['shop__column']} key={product.id}>
                                <Product name={product.name} imgSrc={product.imgSrc}/>
                                <ProductChoose product={product}/>
                            </div>
                        ))}
                    </div>
                    <img className={styles['line']} src={underline} alt="line"/>
                </div>
            </div>
            <PopupOrder/>
        </div>
    )
};
