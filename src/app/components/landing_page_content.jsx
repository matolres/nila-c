"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import GSAPAnimation from "@/app/components/Text-reveal-animation";
import { usePageColor } from '@/app/components/page_color_context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
import { useShoppingBag } from '@/app/components/shopping_bag_context';
import Link from 'next/link';

export default function LandingPageContent({ products, paintCombination }) {
  const { setColors } = usePageColor();
  const { addToBag } = useShoppingBag();
  const [message, setMessage] = useState('');

  useEffect(() => {
    setColors({ text: 'yellow', background: 'blue' });

    return () => setColors({ text: 'defaultTextColor', background: 'defaultBackgroundColor' });
  }, [setColors]);

  const handleAddToBag = (product) => {
    const result = addToBag(product);
    if (result.status === 'added') {
      setMessage('Product added to the bag.');
    } else if (result.status === 'exists') {
      setMessage('Product is already in the bag.');
    }

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <>
    {message && <div className={styles.message}><span>{message}</span></div>}

    <main className={styles.main_container}>
      
      <div className={styles.background}></div>

      <div className={styles.splash}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            objectfit="cover"
          >
            <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <div></div>
          <GSAPAnimation targetSelector=".hero_headline" additionalOptions={{ delay: 0.5 }} />
          <div className={styles.hero_headline_container}>
            <div className={styles.hero_element_container}>
              <h1 className="hero_headline">WEAR WHAT YOU ARE</h1>
            </div>
            <div className={styles.hero_element_container}>
              <button className="hero_headline"> SEE SHOP </button>
            </div>
            <div className={styles.hero_element_container}>
            <svg xmlns="http://www.w3.org/2000/svg" className="hero_headline" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="	#FFFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
            </div>

          </div>
        </div>

      <section className={styles.container_1}>
      
        <section className={styles.container_1_1}>
          <div className={styles.container_span_1}>
            <GSAPAnimation targetSelector=".text_container_1" />
            <div className={styles.anim_container}>
              <span className="text_container_1">EACH PIECE IS</span>
            </div>
            <div className={styles.anim_container}>
              <span className="text_container_1">HANDPAINTED</span>
            </div>
          </div>
          <p>
            ELEVATE YOUR STYLE: UNIQUE HAND-PAINTED CLOTHING AS ABSTRACT ART.
            <br />
            <br />
            DISCOVER A WORLD WHERE FASHION MEETS INDIVIDUALITY. EACH GARMENT IS METICULOUSLY CRAFTED, ENSURING ITS STATUS AS A TRUE ORIGINAL – A RARE GEM IN A WORLD OF MASS PRODUCTION.
            <br />
            <br />
            MAKE A BOLD STATEMENT WITH CLOTHING THAT IS AS UNIQUE AS YOU ARE. WELCOME TO A REALM WHERE FASHION BECOMES A CANVAS AND EVERY PIECE TELLS A STORY.
          </p>
        </section>
      </section>
      
      <section className={styles.container_1_2}>
        <div className={styles.latest_container}>
          <div className={styles.anim_container}>
            <h1 className={styles.paint_title}>PAINT COMBINATIONS</h1>
          </div>
          <div className={styles.flex}>
            <p className={styles.paint_combo_text}>EACH PIECE IS FEATURING ONE OF THE FOUR DISTINCTIVE COLOR COMBINATIONS SEEN BELOW, TO ENSURE THAT EVERY PIECE IS TRULY ONE-OF-A-KIND.</p>
            <div className={styles.scrolling_wrapper}>
              <div className={styles.card}>
                {paintCombination.map(paint => (
                  <div className={styles.image} key={paint.id}>
                    <Image className={styles.img}
                      alt=""
                      src={paint.colorCombo.url}
                      width={400}
                      height={400}
                    />
                    <h3 className={styles.paint_name}>{paint.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        

        <div className={styles.paint_comb_container}>
        
          <h1>LATEST RELEASES</h1>
          <p></p>
          <div className={styles.scrolling_wrapper}>
            <div className={styles.prev_button_container}>
              <div className={`${styles.customPrev} custom-prev`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arr_1} width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
              </div>
            </div>
            <div className={styles.next_button_container}>
              <div className={`${styles.customNext} custom-next`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arr_2} width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
              </div>
            </div>

            <Swiper
              modules={[Scrollbar, Navigation]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              scrollbar={{ hide: true }}
              spaceBetween={1}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              style={{
                '--swiper-pagination-color': 'red',
                '--swiper-pagination-bullet-inactive-color': 'rgba(255,0,0,0.3)',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-size': '14px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
              }}
            >
              {products.map(product => (
                <SwiperSlide key={product.id}>
                  <div className={styles.card_2}>
                    <div className={styles.image_2}>
                      <Image
                        alt=""
                        src={product.productFrontImage.url}
                        width={350}
                        height={350}
                      />
                      <div className={styles.hover_container}>
                        
                        <button className={styles.button} onClick={() => handleAddToBag(product)}>QUICK ADD</button>
                      </div>
                     
                    </div>
                  </div>
                  <div className={styles.latest_product_detail}>
                  <h4>{product.category} - {product.paintCombo}</h4>
                        <p>size {product.size} - {product.color}</p>
                        <h4>{product.price} DKK</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className={styles.container_1_4}>
        <GSAPAnimation targetSelector=".text_container_2" />
        <div className={styles.container_span}>
          <div className={styles.span}>
            <span className="text_container_2">BRINGING MODERN ART <br /></span>
          </div>
          <div className={styles.span}>
            <span className="text_container_2"> AND CLOTHING TOGETHER.</span>
          </div>
          <div className={styles.span}>
            <span className="text_container_2">DARE TO BE</span>
            <span className="text_container_2"><h1 className={styles.last_word}>UNIQUE.</h1></span>
          </div>
        </div>
      </section>

      <section className={styles.container_1_5}></section>
    </main>
    </>
  );
}
