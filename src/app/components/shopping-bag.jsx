"use client"
import React from 'react';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import { usePageColor } from '@/app/components/page_color_context';
import styles from '@/app/css/shopping_bag.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ShoppingBag = () => {
    const { bag, removeFromBag, message } = useShoppingBag();
    const { colors } = usePageColor();

    const handleRemoveFromBag = (productId) => {
        setTimeout(() => {
            removeFromBag(productId);
        }, 0);
    };

    return (
        <>
        <main className={styles.main_container} style={{ backgroundColor: colors.background, color: colors.text }}>
            <div className={styles.container_1}>
                <h3 className={styles.title}>Shopping Bag</h3>
                {message && <div className={styles.message}>{message}</div>}
                <ul className={styles.list}>
                    {bag?.map(({ product }) => (
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
                                <button className={styles.remove} onClick={() => handleRemoveFromBag(product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{stroke: colors.text}}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link rel="" href="/pages/checkout">
                    <button className={styles.checkout} style={{ backgroundColor: colors.text, color: colors.background }}>CHECKOUT</button>
                </Link>
            </div>
        </main>
        </>
    );
};

export default ShoppingBag;
