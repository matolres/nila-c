"use client"
import React, { useState } from 'react';
import styles from '@/app/css/shop.module.scss';
import Menu from '@/app/components/menu';
import FilterOptions from '@/app/components/filter';
import Products from '@/app/components/products';
import Link from 'next/link';

export default function ShopContent({ products }) {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isFilterVisible, setFilterVisible] = useState(false);

    const toggleFilterVisibility = () => setFilterVisible(!isFilterVisible);

    console.log("ShopContent products:", products);

    return (
        <main className={styles.container_1}>
            <div className={styles.background}></div>
            <Menu className={styles.menu} />
            <h2  className={styles.filter_button}onClick={toggleFilterVisibility} style={{ cursor: 'pointer' }}>Filter</h2>
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
                        <Link href={`/pages/product/${product.id}`} key={product.id}>
                            <Products product={product} key={product.id} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
