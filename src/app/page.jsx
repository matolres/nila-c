"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Menu from "./components/menu";
import ColorCombo from "./components/color_combo_scroll";
import RecItems from "./components/recommended_items";
import Footer from "./components/footer";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'



export default function Home() {

  useEffect(() => {
     new SplitType(".title");
     const lines = document.querySelectorAll('.line');
     lines.forEach((line, index) => {
       line.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
     });
     gsap.from('.char', {
      y: 60,
      stagger: 0.005,
      delay: 0.2,
      duration: 0.7,
      ease: "power4.out"
    });
    gsap.to('.char', {
      y: 0,
      stagger: 0.005,
      delay: 0.2,
      duration: 0.7,
      ease: "power4.out"
    });
  }, []);




  return (
    
    <main>
      <div className={styles.background}></div>  
      <Menu className={styles.menu} />
      <div className={styles.splash}>
          <video className={styles.video} autoPlay loop muted playsInline  layout='responsive' objectFit='cover'
          >
              <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <h1>WEAR WHAT YOU ARE</h1>
          
      </div>
    <section className={styles.container_1_1}  >
      <div className={styles.text_container}>
      <h1 className="title" >EACH PIECE IS HANDPAINTED</h1>
      </div>
      
      <p>Elevate Your Style: Unique Hand-Painted Clothing as Abstract Art.
Discover a world where fashion meets individuality. Each garment is meticulously crafted, ensuring its status as a true original – a rare gem in a world of mass production.
Make a bold statement with clothing that is as unique as you are. Welcome to a realm where fashion becomes a canvas and every piece tells a story.</p>
      
    </section>
    <section className={styles.container_1_2}>
          
          <div className={styles.scrolling_wrapper}>
            <div className={styles.card}>
              <ColorCombo />
              <ColorCombo />
              <ColorCombo />
            </div>
          </div>
          
        </section>
    <section className={styles.container_1_3}>
        <div className={styles.items_wrapper}>
          <div className={styles.card2}>
          <RecItems />
          <RecItems />
          <RecItems />
        </div> 
        </div>
    </section>
    <section className={styles.container_1_4}>
      <h1>OUR VISION IS TO BRING ART AND CLOTHING TOGETHER. DARE TO BE UNIQUE.</h1>
    </section>
    <section className={styles.container_1_5}>
  <div className="photo1">
    <Image src="/dummy/model1.jpg" alt="Photo 1" width={800} height={400} layout='responsive' objectFit='cover'/>
  </div>
  <div className={styles.flexContainer}>
    <div className="photo2">
      <Image src="/dummy/model2.jpg"  alt="Photo 2" width={200} height={200} layout='responsive' objectFit='contain' />
    </div>
    <div className="photo3">
      <Image src="/dummy/model3.jpg" alt="Photo 3" width={200} height={200} layout='responsive' objectFit='contain' />
    </div>
  </div>
</section>
    <Footer />
    </main>
  );
}
