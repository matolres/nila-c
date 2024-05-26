// shopping_bag.js
import React from 'react';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import styles from '@/app/css/shopping_bag.module.scss'
import Image from 'next/image';

const ShoppingBag = () => {
  const { bag, removeFromBag } = useShoppingBag();
  console.log(bag)

  const handleRemoveFromBag = (productId) => {
    // Call removeFromBag function asynchronously
    setTimeout(() => {
      removeFromBag(productId);
    }, 0);
  };

  return (
    <div className={styles.container_1}>
      <h2>Shopping Bag</h2>
      <ul>
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
            <h2>{product.category}</h2>
            <h3>{product.color}</h3>
            <h3>{product.size}</h3>
            <h3>{product.price}</h3>
            <button onClick={() => handleRemoveFromBag(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingBag;
