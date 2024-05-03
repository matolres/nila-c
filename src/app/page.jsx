import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/menu";


export default function Home() {
  return (
    <>
    <Image className={styles.splash} src="/splash.jpg" alt="My Image" layout="fill"
  objectFit="cover"
    />
    <Menu className={styles.menu} />
    
    </>
  );
}
