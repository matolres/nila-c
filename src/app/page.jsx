"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Menu from "./components/menu";
import Footer from "./components/footer";
import GSAPAnimation from "./components/Text-reveal-animation"; 




export default function Home() {
  

  return (
    
    
    <main className={styles.main_container} >
      <div className={styles.background}></div>  
      <Menu className={styles.menu} />
      <div className={styles.splash}>
          <video className={styles.video} autoPlay loop muted playsInline  layout='responsive' objectfit='cover'
          >
              <source src="/dummy/splash.mp4" type="video/mp4" />
          </video>
          <h1>WEAR WHAT YOU ARE</h1>
          
      </div>
      <section className={styles.container_1}>
    <section className={styles.container_1_1}  >
    <GSAPAnimation targetSelector=".text_container_1" />
      <div className={styles.container_span}>
      <span className="text_container_1">EACH PIECE IS </span><span className="text_container_1">HANDPAINTED</span>
      </div>
      
      <p>Elevate Your Style: Unique Hand-Painted Clothing as Abstract Art.<br></br><br></br>
Discover a world where fashion meets individuality. Each garment is meticulously crafted, ensuring its status as a true original – a rare gem in a world of mass production.
<br></br><br></br>Make a bold statement with clothing that is as unique as you are. Welcome to a realm where fashion becomes a canvas and every piece tells a story.</p>
      
    </section>
    </section>
    <section className={styles.container_1_2}>
          <h2>PAINT COMBINATIONS</h2>
          <p></p>
          <div className={styles.scrolling_wrapper}>
            <div className={styles.card}>
              <div className={styles.image}>
              <Image alt=""
              src="/yellow and blue.jpeg"
              width={200}
              height={200}
              layout="responsive"

              />
              <h3>Yellow and Blue</h3>
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/purple and pink.jpeg"
              width={200}
              height={200}
              layout="responsive"

              />
              <h3>Purple and Pink</h3>
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/red and green.jpeg"
              width={200}
              height={200}
              layout="responsive"

              />
              <h3>Red and Green</h3>
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/black and orange.jpeg"
              width={200}
              height={200}
              layout="responsive"

              />
              <h3>Black and Orange</h3>
              </div>

            </div>
          </div>
          

          <h2>LATEST PRODUCTS</h2>
        <div className={styles.scrolling_wrapper}>
          <div className={styles.card}>
          <div className={styles.image}>
              <Image alt=""
              src="/black pants front.png"
              width={200}
              height={200}
              layout="responsive"

              />
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/Blue shirt front.png"
              width={200}
              height={200}
              layout="responsive"

              />
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/Grey pants front.png"
              width={200}
              height={200}
              layout="responsive"

              />
              </div>
              <div className={styles.image}>
              <Image alt=""
              src="/Grey pants front.png"
              width={200}
              height={200}
              layout="responsive"

              />
              </div>


        </div> 
        </div>
    </section>
    <section className={styles.container_1_4}>
    <GSAPAnimation targetSelector=".text_container_2" />
    <div className={styles.container_span}>
      <div className={styles.span}><span className="text_container_2">BRINGING <br></br> </span> <span className="text_container_2"> MODERN ART</span></div> <div className={styles.span}> <span className="text_container_2"> AND CLOTHING </span> <span className="text_container_2"> TOGETHER.</span> </div> <div className={styles.last_span}><span className="text_container_2">DARE TO BE </span> <span className={`text_container_2 ${styles.last_span}`}>UNIQUE.</span> </div>
    </div>
    </section>
    <section className={styles.container_1_5}>
      <div className={styles.flexContainer}>
  <div className="photo1">
    
    <Image src="/models/Joe blue.jpg" alt="blue t-shirt" width={800} height={400} layout='responsive' objectfit='cover'/>
  </div>
  <div className={styles.hide1}>
    
    <Image src="/models/Joe blue.jpg" alt="blue t-shirt" width={800} height={400} layout='responsive' objectfit='cover'/>
  </div>
  <div className={styles.hide2}>
    
    <Image src="/models/Joe blue.jpg" alt="blue t-shirt" width={800} height={400} layout='responsive' objectfit='cover'/>
  </div>
  </div>
  <div className={styles.flexContainer}>
    <div className="photo2">
      <Image src="/models/Helena Black sweats.jpg"  alt="Black sweats" width={200} height={200} layout='responsive' objectfit='contain' />
    </div>
    <div className="photo3">
      <Image src="/models/Andji Black tee.jpg" alt="Black tee" width={200} height={200} layout='responsive' objectfit='contain' />
    </div>
    <div className={styles.hide2}>
      <Image src="/models/Andji Black tee.jpg" alt="Photo 3" width={200} height={200} layout='responsive' objectfit='contain' />
    </div>

  </div>
</section>
    <Footer />
    </main>
  );
}

//className={`${"line"} ${styles.line}`}
