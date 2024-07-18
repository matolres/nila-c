"use client"
import React, { useState } from 'react';
import styles from '@/app/css/shop.module.scss';

import FilterOptions from '@/app/components/filter';
import Products from '@/app/components/products';



export default function ShopContent({ products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => setFilterVisible(!isFilterVisible);

  console.log("ShopContent products:", products);

  return (

    <main className={styles.container_1}>
      <div className={styles.background}></div>
      <button className={styles.filter_button} class onClick={toggleFilterVisibility}>
      <span className={styles.button_text}>Filter</span>
      <span className={styles.button_text_overlay}>Filter</span>
      </button>
      
        <FilterOptions
          products={products}
          setFilteredProducts={setFilteredProducts}
          isFilterVisible={isFilterVisible}
          toggleFilterVisibility={toggleFilterVisibility} 
        />
      <section className={styles.container_1_2}>
        <div className={styles.card}>
          {filteredProducts.map(product => (
            
              <Products product={product}  key={product.id}/>
          ))}
        </div>
      </section>


    </main>

  );
}
