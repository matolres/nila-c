import Menu from "../components/menu"
import styles from '@/app/css/shop.module.scss'


export default function Shop() {
    return(
        <>
        
        <main className={styles.container_1}>
        <div className={styles.background}></div>
        <Menu className={styles.menu}/>
        
        <section className={styles.container_1_1}>
            <ul className={styles.container_1_1_1}>
                <li>ALL</li>
                <li>HOODIES</li>
                <li>T-SHIRTS</li>
                <li>JEANS</li>
                <li>PAINT COMBINATIONS</li>
                
            </ul>
            <h3 className={styles.filter}>FILTER</h3>
        </section>

        
        </main>
        </>
    )
}