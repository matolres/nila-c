"use client"

import { useState } from 'react';
import styles from '@/app/css/shop.module.scss';
import Menu from '@/app/components/menu';
import FilterOptions from '@/app/components/filter';
import Products from '@/app/components/products';
import Link from 'next/link';

export default function ShopContent({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <main className={styles.container_1}>
      <div className={styles.background}></div>
      <Menu className={styles.menu} />
      <section className={styles.container_1_1}>
        <FilterOptions products={products} setFilteredProducts={setFilteredProducts} />
      </section>
      <section className={styles.container_1_2}>
        <div className={styles.card}>
          {filteredProducts.map(product => (
            <Link href={`/pages/product/${product.id}`} key={product.id}>
              <Products product={product} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
