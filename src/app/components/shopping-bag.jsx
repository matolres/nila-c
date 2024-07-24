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
              

              <h3>{product.category} - {product.paintCombo}</h3>
              
              <p>{product.color}</p>
              <p>{product.size}</p>
              <p>{product.price}</p>
              <button className={styles.remove} onClick={() => handleRemoveFromBag(product.id)}><span>remove</span></button>
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
