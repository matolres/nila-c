
import Menu from '@/app/components/menu';
import styles from '@/app/css/shop.module.scss';
import Products from '@/app/components/products';
import FilterOptions from '@/app/components/filter';
import GetData from '@/app/lib/data';
import Link from 'next/link';


export default async function Shop() {
    const products = await GetData()
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
                        {products.map((product) => (
                            
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

