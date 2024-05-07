import Image from "next/image";
import styles from "./page.module.scss";
import Menu from "./components/menu";
import ColorCombo from "./components/color_combo_scroll";
import RecItems from "./components/recommended_items";




export default function Home() {
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
    <section className={styles.container_1_1}>
      <h1>EACH PIECE IS HANDPAINTED</h1>
      <p>hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
    </main>
  );
}
/* 

<Menu className={styles.menu} />

*/