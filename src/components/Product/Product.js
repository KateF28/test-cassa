import React from "react";

import styles from './Product.module.scss';

export const Product = ({name, imgSrc}) => {
    return (
        <div className={styles.product}>
            <p className={styles['product__name']}>{name}</p>
            <img className={styles['product__image']} src={imgSrc} alt={`Product ${name}`}/>
        </div>
    )
};
