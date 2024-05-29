import { performRequest } from '@/app/lib/datocms';
import Image from 'next/image';
import styles from '@/app/css/lookbook.module.scss'
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';



const query = `
  query {
    lookbook {
        season
        year
        id
        gallery {
          url
        }
      }
  }
`;
export default async function Lookbook() {
    const { data } = await performRequest({ query: query });
    const lookbook = data.lookbook;
    console.log("Fetched data in Shop component:", lookbook);

    return(
        <>
        <Menu 
                  menuIconColor="#6A00AB"
                  closingMenuIconColor="#FF69B1"
                  moveMeColor="#FF69B1"
                  rectColor="#6A00AB"
                  logoColor="#6A00AB"
                  logoOverlayColor="#FF69B1"
                  lineColor="#6A00AB"
                  lineOverlayColor="#FF69B1"
                  cartIconColor="#6A00AB"
                  cartOverlayColor="#FF69B1"
                  itemTextColor="#FF69B1" />
        <div className={styles.background}></div>
        <main className={styles.main_container}>
            <div className={styles.headlines}>
                <h1>LOOKBOOK</h1>
        <h2>{lookbook.season} - {lookbook.year}</h2>
        </div>
        <div className={styles.images_container}>
        {lookbook.gallery.map((image) => (
          
            <Image  alt="" key={image.url} src={image.url} layout='responsive' objectfit='contain' height={300} width={300}  />

        ))}
      </div>
        </main>
        <Footer
        color="#6A00AB"
        fill="#6A00AB"
        />
        </>

    )
}