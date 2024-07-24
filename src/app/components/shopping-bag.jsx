"use client"
import React from 'react';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import styles from '@/app/css/shopping_bag.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const ShoppingBag = () => {
  const { bag, removeFromBag, message } = useShoppingBag();

  const handleRemoveFromBag = (productId) => {

    setTimeout(() => {
      removeFromBag(productId);
    }, 0);
  };

  return (
    <main className={styles.main_container}>
    <div className={styles.container_1}>
      <h3 className={styles.title}>Shopping Bag</h3>
      {message && <div className={styles.message}>{message}</div>}
      <ul className={styles.list}>
        {bag?.map(({ product, timestamp }) => (
          <li key={product.id} className={styles.container_1_1}>
            <div className={styles.container_1_1_1}>
              <Image 
                alt=""
                style={{objectFit: "contain"}}
                loading="lazy"
                src={product.productFrontImage.url}
                height={150}
                width={150}
              />
            </div>
            <div className={styles.container_1_1_2}>
              

              <h2>{product.category} - {product.paintCombo}</h2>
              
              <h3>{product.color}</h3>
              <h3>{product.size}</h3>
              <h3>{product.price}</h3>
              <button className={styles.remove} onClick={() => handleRemoveFromBag(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <Link rel="" href="/pages/checkout" >
                <button className={styles.checkout}>CHECKOUT</button>
              </Link>
    </div>
    </main>
  );
};

export default ShoppingBag;
