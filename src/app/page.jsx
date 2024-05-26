
import Image from "next/image";
import styles from "./page.module.scss";
import Menu from "./components/menu";
import ColorCombo from "./components/color_combo_scroll";
import RecItems from "./components/recommended_items";
import Footer from "./components/footer";
import GSAPAnimation from "./components/Text-reveal-animation";




export default async function Home() {


  return (
    
    
    <main>
      <div className={styles.background}></div>  
      <Menu className={styles.menu} />
      <div className={styles.splash}>
          <video className={styles.video} autoPlay loop muted playsInline  layout='responsive' objectfit='cover'
          >
              <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <h1>WEAR WHAT YOU ARE</h1>
          
      </div>
    <section className={styles.container_1_1}  >
    <GSAPAnimation targetSelector=".text_container_1" />
      <div className={styles.container_span}>
      <span className="text_container_1">EACH PIECE IS </span><span className="text_container_1">HANDPAINTED</span>
      </div>
      
      <p>Elevate Your Style: Unique Hand-Painted Clothing as Abstract Art.<br></br><br></br>
Discover a world where fashion meets individuality. Each garment is meticulously crafted, ensuring its status as a true original – a rare gem in a world of mass production.
<br></br><br></br>Make a bold statement with clothing that is as unique as you are. Welcome to a realm where fashion becomes a canvas and every piece tells a story.</p>
      
    </section>
    <section className={styles.container_1_2}>
          <h2>PAINT COMBINATIONS</h2>
          <div className={styles.scrolling_wrapper}>
            <div className={styles.card}>
              <ColorCombo />
              <ColorCombo />
              <ColorCombo />
            </div>
          </div>
          


        <div className={styles.items_wrapper}>
          <div className={styles.card2}>
          <RecItems />
          <RecItems />
          <RecItems />
        </div> 
        </div>
    </section>
    <section className={styles.container_1_4}>
    <GSAPAnimation targetSelector=".text_container_2" />
    <div className={styles.container_span}>
      <span className="text_container_2">BRINGING </span> <span className="text_container_2">MODERN ART</span> <span className="text_container_2"> AND CLOTHING </span> <span className="text_container_2"> TOGETHER.</span> <span className="text_container_2">DARE TO BE </span> <span className="text_container_2">UNIQUE.</span>
    </div>
    </section>
    <section className={styles.container_1_5}>
  <div className="photo1">
    <Image src="/dummy/model1.jpg" alt="Photo 1" width={800} height={400} layout='responsive' objectfit='cover'/>
  </div>
  <div className={styles.flexContainer}>
    <div className="photo2">
      <Image src="/dummy/model2.jpg"  alt="Photo 2" width={200} height={200} layout='responsive' objectfit='contain' />
    </div>
    <div className="photo3">
      <Image src="/dummy/model3.jpg" alt="Photo 3" width={200} height={200} layout='responsive' objectfit='contain' />
    </div>
  </div>
</section>
    <Footer />
    </main>
  );
}

//className={`${"line"} ${styles.line}`}
