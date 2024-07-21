"use client";
import Image from "next/image";
import styles from "@/app/page.module.scss"
import GSAPAnimation from "@/app/components/Text-reveal-animation";

export default function LandingPageContent({products, paintCombination}) {
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
          <GSAPAnimation targetSelector=".text_container_1" />
          <div className={styles.container_span_1}>
            <span className="text_container_1">EACH PIECE IS </span>
            <span className="text_container_1">HANDPAINTED</span>
          </div>
          <p>
            Elevate Your Style: Unique Hand-Painted Clothing as Abstract Art.
            <br />
            <br />
            Discover a world where fashion meets individuality. Each garment is meticulously crafted, ensuring its status as a true original – a rare gem in a world of mass production.
            <br />
            <br />
            Make a bold statement with clothing that is as unique as you are. Welcome to a realm where fashion becomes a canvas and every piece tells a story.
          </p>
        </section>
      </section>
      <section className={styles.container_1_2}>
       
        <div className={styles.latest_container}>
        <h2>PAINT COMBINATIONS</h2>
        <p className={styles.paint_combo_text}>Each piece is featuring one of the four distinctive color combinations seen below, to ensure that every piece is truly one-of-a-kind.</p>
        <div className={styles.scrolling_wrapper}>
        <div className={styles.card}>
            {paintCombination.map(paint => (
                <div className={styles.image} key={paint.id}>
                <Image 
                  alt=""
                  src={paint.colorCombo.url}
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h3 className={styles.paint_name}>{paint.name}</h3>
              </div>
            ))}
            
          </div>
        </div>
        </div>

        <div className={styles.paint_comb_container}>
        <h2>LATEST RELEASES</h2>
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
            <span className="text_container_2">BRINGING <br /> </span>{" "}
            <span className="text_container_2"> MODERN ART</span>
          </div>
          <div className={styles.span}>
            {" "}
            <span className="text_container_2"> AND CLOTHING </span>{" "}
            <span className="text_container_2"> TOGETHER.</span>{" "}
          </div>
          <div className={styles.last_span}>
            <span className="text_container_2">DARE TO BE </span>{" "}
            <span className={`text_container_2 ${styles.last_span}`}>
              UNIQUE.
            </span>{" "}
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
