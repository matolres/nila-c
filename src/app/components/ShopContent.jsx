"use client"
import React, { useState } from 'react';
import styles from '@/app/css/shop.module.scss';
import Menu from '@/app/components/menu';
import FilterOptions from '@/app/components/filter';
import Products from '@/app/components/products';
import Link from 'next/link';
import Footer from './footer';


export default function ShopContent({ products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => setFilterVisible(!isFilterVisible);

  console.log("ShopContent products:", products);

  return (
    <>
    <main className={styles.container_1}>
      <div className={styles.background}></div>
      <Menu className={styles.menu}
            menuIconColor="red"
            closingMenuIconColor="#00F135"
            moveMeColor="#00F135"
            rectColor="red"
            logoColor="red"
            logoOverlayColor="#00F135"
            lineColor="red"
            lineOverlayColor="#00F135"
            cartIconColor="red"
            cartOverlayColor="#00F135"
            itemTextColor="#00F135"
      />
      <h2 className={styles.filter_button} onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>Filter</h2>
      <FilterOptions
        products={products}
        setFilteredProducts={setFilteredProducts}
        isFilterVisible={isFilterVisible}
        toggleFilterVisibility={toggleFilterVisibility}
        className={styles.filter_container}
      />
      <section className={styles.container_1_2}>
        <div className={styles.card}>
          {filteredProducts.map(product => (
            <Link href={`/pages/product/${product.id}`} key={product.id} className={styles.product_link}>
              <Products product={product} />
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer
    color="red"
    fill="red"
    border=" 1px red"
    />
    </>
  );
}
