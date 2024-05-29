'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Collapsible from 'react-collapsible';
import Image from 'next/image';
import styles from '@/app/css/product_detail.module.scss';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Link from 'next/link';


const ProductDetail = ({ product }) => {

  const { addToBag, removeFromBag } = useShoppingBag();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleAddToBag = () => {
    const result = addToBag(product);
    if (result.status === 'added') {
      setMessage('Product added to the bag.');
    } else if (result.status === 'exists') {
      setMessage('Product is already in the bag.');
    }

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleCheckout = () => {
    router.push('/pages/checkout');
  };



  return (
    <main className={styles.main_container} style={{ position: 'relative' }}>
      <div className={styles.background}></div>
      <Link className={styles.back_to_shop} href='/pages/shop'>
        <h2>BACK TO SHOP</h2>
      </Link>
      <Swiper
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        className={styles.container_1_1}
      >
        <SwiperSlide>
          <Image 
            alt=""
            style={{objectFit: "cover", layout: "fill"}}
            loading="lazy"
            src={product.productFrontImage.url}
            height={400}
            width={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            alt=""
            style={{objectFit: "cover"}}
            loading="lazy"
            src={product.productBackImage.url}
            height={400}
            width={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            alt=""
            style={{objectFit: "cover"}}
            loading="lazy"
            src={product.productModelImage.url}
            height={400}
            width={400}
          />
        </SwiperSlide>
      </Swiper>
      <section className={styles.container_1}>
        <div className={styles.container_1_2}>
          <div className={styles.container_1_2_1}>
            <h2>{product.paintCombo} {product.category}</h2>
            <h2>{product.price} DKK</h2>
          </div>
          <h3>{product.color}</h3>
          <h3>size: {product.size}</h3>
        </div>
      </section>

      {message && <div className={styles.message}>{message}</div>}

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
          <p className={styles.product_detail}>{product.productDetail}</p>
          
        </Collapsible>
        
        <Collapsible
          className={styles.triggers}
          trigger='Shipping'
          triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '15px' }}
          contentContainerTagName="article"
          transitionTime={300}
          easing="ease-in-out"
          open={false}
          classParentString={styles.MyCollapsible}
        >
          <p>The delivery charge is DKK 60. Free Shipping on orders over DKK 750. Delivery within 4-6 working days</p>
        </Collapsible>
      </section>
      <section className={styles.container_2}>
        <button className={styles.container_2_1} onClick={handleAddToBag}>ADD TO BAG</button>
        <button className={styles.container_2_2} onClick={handleCheckout}>CHECKOUT</button>
      </section>
    </main>
  );
};

export default ProductDetail;

         
