import styles from '@/app/css/about.module.scss'
import Menu from '@/app/components/menu'
import Footer from '@/app/components/footer'
import Image from 'next/image'

export default function About() {
    return(
        <main className={styles.main_container}>
            <div className={styles.background}></div>
            <Menu  
            menuIconColor="#ff7300"
            closingMenuIconColor="black"
            moveMeColor="black"
            rectColor="#ff7300"
            logoColor="#ff7300"
            logoOverlayColor="black"
            lineColor="#ff7300"
            lineOverlayColor="black"
            cartIconColor="#ff7300"
            cartOverlayColor="black"
            itemTextColor="black"
            />
            
            <section className={styles.container_1}>
            
                <h2>CONTEMPORARY ART MEETS FASHION</h2>
                <div className={styles.container_1_1}>
                    <p>Step into the story behind Caspers unique clothing brand, where a former engineer meets artistic clothing.Formerly working in the world of industrial engineering, Casper grew tired of old, grey buildings and found himself drawn to the colorful realm of abstract painting…
                        Watch the video to get the whole story.</p>
                        <div className={styles.youtube}>
                        <iframe  src="https://www.youtube.com/embed/GBzOqwzHLWc?si=xuSBjYvdFb5cDF6b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                </div>  
            </section>
            <section className={styles.container_2}>
                <h2>BEHIND THE PROCESS</h2>
                <div className={styles.container_2_1}>
                    <p>Every colorful piece is handcrafted by the self-taught artist Casper from his cozy DIY atelier. Here is a peek into his process:

First, Casper handpicks the perfect clothing items for his vision and buys them, letting his imagination run wild as he envisions the transformation ahead.

With his intuition and eye for design, he selects from his palette of the 4 unique color combinations, setting the stage for the artwork to come.

Next, armed with homemade masking tools and a touch of artistry,<br></br><br></br>
Casper preps the garment, ensuring that each Nila-C stripe is applied with precision.

Then, it is time for the fun part - painting! Casper mixes his neon colors just right, adding a bit of pouring medium for that extra pop and durability.

Once the piece is complete, the garment takes a leisurely dry on homemade racks.

After that, he irons it twice, adds a protective layer of varnish, and waterproofs the paint to keep the colors vibrant after many washes.
                    </p>
                    <Image alt=''
                    src="/about.jpg"
                    layout='responsive' objectfit='contain' height={300} width={300}
                    />
                </div>  
            </section>
            <Footer 
            color="#ff7300"
            fill="#ff7300"
            />
        </main>
    )
}