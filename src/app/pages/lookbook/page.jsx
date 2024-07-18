import { performRequest } from '@/app/lib/datocms';
import Image from 'next/image';
import styles from '@/app/css/lookbook.module.scss';
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
          title
        }
      }
  }
`;

export default async function Lookbook() {
  const { data } = await performRequest({ query: query });
  const lookbook = data.lookbook;
  console.log("Fetched data in Shop component:", lookbook);

  return (
    <>
      <Menu
        primary="#ff91c6"
        secondary="#6A00AB"

        
      />
      <div className={styles.background}></div>
      <main className={styles.main_container}>
        <div className={styles.headlines}>
          <h1>LOOKBOOK</h1>
          <h2>{lookbook.season} - {lookbook.year}</h2>
        </div>
        <div className={styles.images_container}>
          {lookbook.gallery.map((image) => (
            <div className={styles.image_container} key={image.url}>
            <Image
              alt=""
              key={image.url}
              src={image.url}
              layout="responsive"
              objectfit="contain"
              height={300}
              width={300}
            />
            <h3 className={styles.image_title} key={image.title}>{image.title}</h3>
            </div>
            
          ))}
        </div>
      </main>
      <Footer color="#6A00AB" fill="#6A00AB" />
    </>
  );
}
