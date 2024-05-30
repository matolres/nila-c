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
    <>
          <div className={styles.background}></div>
      <Link className={styles.back_to_shop} href='/pages/shop'>
        <h3>BACK TO SHOP</h3>
      </Link>
    <main className={styles.main_container} style={{ position: 'relative' }}>

      <section className={styles.product}>
        <Swiper
          scrollbar={{ hide: true }}
          modules={[Scrollbar]}
          className={styles.container_1_1}
        >
          <SwiperSlide>
            <Image
              alt="Product Front"
              src={product.productFrontImage.url}
              width={600}
              height={600}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="Product Back"
              src={product.productBackImage.url}
              width={600}
              height={600}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="Product Model"
              src={product.productModelImage.url}
              width={600}
              height={600}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
        <section className={styles.product_description}>
          <section className={styles.container_1}>
            <div className={styles.container_1_2}>
              <div className={styles.container_1_2_1}>
                <h3>{product.category} - {product.paintCombo}</h3>
                <h3>{product.price} DKK</h3>
              </div>
              <h4>{product.color}</h4>
              <h4>size: {product.size}</h4>
            </div>
          
          {message && <div className={styles.message}>{message}</div>}
          <section className={styles.info_container}>
          <section className={styles.container_3}>
            <Collapsible
              className={styles.triggers}
              trigger='Product details'
              triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
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
              triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
              contentContainerTagName="article"
              transitionTime={300}
              easing="ease-in-out"
              open={false}
              classParentString={styles.MyCollapsible}
            >
              <p className={styles.product_detail}>The delivery charge is DKK 60. Free Shipping on orders over DKK 750. Delivery within 4-6 working days</p>
            </Collapsible>
            <Collapsible
              className={styles.triggers}
              trigger='Care instructions'
              triggerStyle={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
              contentContainerTagName="article"
              transitionTime={300}
              easing="ease-in-out"
              open={false}
              classParentString={styles.MyCollapsible}
            >
              <p className={styles.product_detail}>Machine wash up to 40 degrees, gentle cycle, Do not Dry Clean, Suitable for tumble-drying.</p>
            </Collapsible>
          </section>
          </section>
        </section>
        <section className={styles.container_2}>
          <button className={styles.container_2_1} onClick={handleAddToBag}>ADD TO BAG</button>
          <button className={styles.container_2_2} onClick={handleCheckout}>CHECKOUT</button>
        </section>
        </section>
      </section>
    </main>
    </>
  );
};

export default ProductDetail;
