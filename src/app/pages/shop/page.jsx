
import Menu from '@/app/components/menu';
import styles from '@/app/css/shop.module.scss';
import Products from '@/app/components/products';
import FilterOptions from '@/app/components/filter';
import { fetchDatoCMS } from "@/app/lib/datocms";
import Link from 'next/link';

export const revalidate = 60; // Revalidate data every 60 seconds

const query = `
  query {
    allProducts {
      id
      category
      color
      paintCombo
      price
      productDetail
      recommended
      size
      productBackImage {
        url
      }
      productFrontImage {
        url
      }
      productModelImage {
        url
      }
    }
  }
`;

export default async function Shop({ products }) {
    const data = await fetchDatoCMS(query);
    console.log(data)
    return (
        <>
            <main className={styles.container_1}>

                <div className={styles.background}></div>
                <Menu className={styles.menu} />
                <section className={styles.container_1_1}>
                    <FilterOptions products={products} />
                </section>
                <section className={styles.container_1_2}>
                    <div className={styles.card}>
                        {data.allProducts.map((product) => (
                            
                        <Link href={`/pages/product/${product.id}`} key={product.id}>
                            <Products product={product} key={product.id} />

                        </Link>
                           
                            
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

