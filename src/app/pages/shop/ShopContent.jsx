"use client"
import React, { useState, useEffect } from 'react';
import styles from '@/app/css/shop.module.scss';

import FilterOptions from '@/app/components/filter';
import Products from '@/app/components/products';
import { usePageColor } from '@/app/contexts/page_color_context';



export default function ShopContent({ products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => setFilterVisible(!isFilterVisible);
  const { setColors } = usePageColor();

  useEffect(() => {
      setColors({ text: 'red', background: '#00F135' });

      return () => setColors({ text: 'defaultTextColor', background: 'defaultBackgroundColor' });
  }, [setColors]);

  return (

    <main className={styles.container_1}>
      <div className={styles.background}></div>

      
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
