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

      <h3 className={styles.filter_button} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}> Filter</h3>
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
