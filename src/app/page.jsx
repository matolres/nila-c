import Image from "next/image";
import styles from "./page.module.scss";
import Menu from "./components/menu";


export default function Home() {
  return (
    <>
    
      <Menu className={styles.menu} />

    <main>
    <Image className={styles.splash} src="/splash.jpg" alt="My Image" layout="fill"
  objectFit="cover"
    />
    <section className={styles.container_1_1}>
      <button>hello</button>
      <h1>EACH PIECE IS HANDPAINTED</h1>
      <p>hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </section>
    <div class="mat_content">
          
          <div class="scrolling_wrapper">
            <div class="card">
              
            </div>
          </div>
          
        </div>
    </main>
    
    </>
  );
}
