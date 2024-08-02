"use client";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import GSAPAnimation from "@/app/components/Text-reveal-animation";
import { usePageColor } from '@/app/components/page_color_context';
import { useEffect } from "react";


export default function LandingPageContent({ products, paintCombination }) {

  const { setColors } = usePageColor();

  useEffect(() => {
    setColors({ text: 'yellow', background: 'blue' });

    return () => setColors({ text: 'defaultTextColor', background: 'defaultBackgroundColor' });
  }, [setColors]);


  return (
    <main className={styles.main_container}>
      <div className={styles.background}></div>
      <div className={styles.splash}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          layout="responsive"
          objectfit="cover"
        >
          <source src="/dummy/splash.mp4" type="video/mp4" />
        </video>
        <h1>WEAR WHAT YOU ARE</h1>
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
          <div className={styles.card}>
            {products.map(product => (
                <div className={styles.image} key={product.id}>
                <Image 
                  alt=""
                  src={product.productFrontImage.url}
                  width={170}
                  height={170}
                  layout="responsive"
                />
              </div>
            ))}
            
          </div>
        </div>
        </div>
      </section>
      <section className={styles.container_1_4}>
        <GSAPAnimation targetSelector=".text_container_2" />
        <div className={styles.container_span}>
          <div className={styles.span}>
            <span className="text_container_2">BRINGING MODERN ART <br /> </span>{" "}
          </div>
          <div className={styles.span}>
            {" "}
            <span className="text_container_2"> AND CLOTHING TOGETHER.</span>{" "}
          </div>
          <div className={styles.span}>
            <span className="text_container_2">DARE TO BE</span>{" "}
            <span className="text_container_2"><h1 className={styles.last_word}>UNIQUE.</h1></span>{" "}
          </div>
        </div>
      </section>
      <section className={styles.container_1_5}>
        <div className={styles.flexContainer}>
          <div className="photo1">
            <Image
              src="/models/Joe blue.jpg"
              alt="blue t-shirt"
              width={800}
              height={400}
              layout="responsive"
              objectfit="cover"
            />
          </div>
          <div className={styles.hide1}>
            <Image
              src="/models/Joe blue.jpg"
              alt="blue t-shirt"
              width={800}
              height={400}
              layout="responsive"
              objectfit="cover"
            />
          </div>
          <div className={styles.hide2}>
            <Image
              src="/models/Joe blue.jpg"
              alt="blue t-shirt"
              width={800}
              height={400}
              layout="responsive"
              objectfit="cover"
            />
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className="photo2">
            <Image
              src="/models/Helena Black sweats.jpg"
              alt="Black sweats"
              width={200}
              height={200}
              layout="responsive"
              objectfit="contain"
            />
          </div>
          <div className="photo3">
            <Image
              src="/models/Andji Black tee.jpg"
              alt="Black tee"
              width={200}
              height={200}
              layout="responsive"
              objectfit="contain"
            />
          </div>
          <div className={styles.hide2}>
            <Image
              src="/models/Andji Black tee.jpg"
              alt="Photo 3"
              width={200}
              height={200}
              layout="responsive"
              objectfit="contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
