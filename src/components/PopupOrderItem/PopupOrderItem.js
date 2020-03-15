import React from "react";

import styles from './PopupOrderItem.module.scss';

export const PopupOrderItem = ({item}) => {
    return (
        <div className={styles.item}>
            <img className={styles['item__img']} src={item.imgSrc} alt={`Product ${item.name}`}/>
            <div className={styles['item__body']}>
                <p className={styles['item__text']}>{`Offerta fizzyslim con sapore di ${item.name}`}</p>
                <p className={styles['item__info']}>{`QTÀ: ${item.number}`}</p>
                <p className={styles['item__amount']}>
                    {`\u20AC${(Number(item.number) * Number(item.price) * Number(item.discount) / 100).toFixed(2)}`}
                </p>
            </div>
        </div>
    )
};
