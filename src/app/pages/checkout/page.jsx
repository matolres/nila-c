"use client"
import React from 'react';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import Link from 'next/link';
import styles from '@/app/css/checkout.module.scss';

const Checkout = () => {
  const { bag } = useShoppingBag();

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <ul>
        {bag.map(({ product }) => (
          <li key={product.id}>
            <h2>{product.category} - {product.size}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <h2>Total: ${bag.reduce((total, { product }) => total + product.price, 0)}</h2>
      </div>
      <button className={styles.placeOrderButton}>Place Order</button>
      <Link href="/">
        <button className={styles.backToShop}>Continue Shopping</button> 
      </Link>
    </div>
  );
};

export default Checkout;
