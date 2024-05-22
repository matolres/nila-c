'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Collapsible from 'react-collapsible';
import Image from 'next/image';
import styles from '@/app/css/product_id.module.scss';

const ProductDetail = ({ product }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <>
      <div className={styles.background}></div>
      <Slider {...settings} className={styles.container_1_1}>
      <Image 
              alt=""
              style={{objectFit: "contain"}}
              loading="lazy"
              src={product.productFrontImage.url}
              height={400}
              width={370}

            />
          <Image 
              alt=""
              style={{objectFit: "contain"}}
              loading="lazy"
              src={product.productBackImage.url}
              height={400}
              width={370}

            />
          <Image 
              alt=""
              style={{objectFit: "contain"}}
              loading="lazy"
              src={product.productModelImage.url}
              height={400}
              width={370}

            />
        </Slider>
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
          <p>Relaxed sweatshirt in heavy 14oz cotton fleece. Features a zip closure, kangaroo pocket and brushed interior.</p>
          <p>This garment has been individually painted on, producing a one-of-a-kind result. Color may fade or bleed after wash.</p>
          <ul>
            <li>Longsleeve</li>
            <li>Relaxed fixed</li>
            <li>Main material: 100% cotton</li>
            <li>Ribbed cuffs and hem</li>
          </ul>
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
        <button className={styles.container_2_1}>ADD TO BAG</button>
        <button className={styles.container_2_2}>CHECKOUT</button>
      </section>
    </>
  );
};

export default ProductDetail;

/*



*/