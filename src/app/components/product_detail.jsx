'use client';

import React from 'react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';
import styles from '@/app/css/product_id.module.scss';


const ProductDetail = ({ product }) => {
  return (
    <>
      <div className={styles.menu_background}></div>
      <section className={styles.container_1}>
        <div className={styles.container_1_1}>
          <Image 
            alt="" 
            src={product.product_image_front}
            layout='responsive'
            objectFit='cover'
            height={300}
            width={300}
          />
          <Image 
            alt="" 
            src={product.product_image_front}
            layout='responsive'
            objectFit='cover'
            height={300}
            width={300}
          />
          <Image 
            alt="" 
            src={product.product_image_front}
            layout='responsive'
            objectFit='cover'
            height={250}
            width={250}
          />
        </div>
        <div className={styles.container_1_2}>
            <div className={styles.container_1_2_1}>
            <h2>{product.paint_combo} {product.type}</h2>
            <h2>{product.price} DKK</h2>
            </div>
          
          <h3>size: {product.size}</h3>
        </div>
      </section>

      <section className={styles.container_3}>
        <Collapsible
          className={styles.triggers}
          trigger='Details'
          triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '15px' }}
          contentContainerTagName="article"
          transitionTime={300}
          easing="ease-in-out"
          open={false}
          classParentString={styles.MyCollapsible}
        >
          <h1>info lwnflwnelnwleidwed</h1>
        </Collapsible>
      </section>
      <section className={styles.container_2}>
        <button className={styles.container_2_1}>ADD TO BAG</button>
        <button className={styles.container_2_2}>CHECKOUT</button>
      </section>
    </>
  );
};

export default ProductDetail;