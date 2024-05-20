
import Link from 'next/link'; // Import Link from Next.js
import Menu from '@/app/components/menu';
import styles from '@/app/css/shop.module.scss';
import Products from '@/app/components/products';
import FilterOptions from '@/app/components/filter';



async function getData() {
    const res = await fetch("https://cjwahixgspklivbzuuxe.supabase.co/rest/v1/products", {
                    method: "GET",
                    headers: {
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2FoaXhnc3BrbGl2Ynp1dXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTY0MTksImV4cCI6MjAzMTE5MjQxOX0.3QnDt9bicF_0L9HofVZoQJxBDlCAcSYBJFyUOiYGwY8",
                    },
                });
   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


export default async function Shop() {

    const products = await getData()

    console.log(products)




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
                           
                           <Products product={product} />

                                
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

/* 

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://cjwahixgspklivbzuuxe.supabase.co/rest/v1/products", {
                    method: "GET",
                    headers: {
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2FoaXhnc3BrbGl2Ynp1dXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTY0MTksImV4cCI6MjAzMTE5MjQxOX0.3QnDt9bicF_0L9HofVZoQJxBDlCAcSYBJFyUOiYGwY8",
                    },
                });
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); 
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
        
    }, [])
    console.log("product:",)

    const handleFilterChange = (filter) => {
        if (filter === "ALL") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.type.toLowerCase() === filter.toLowerCase());
            setFilteredProducts(filtered);
        }
    };

    const handleApplyButtonClick = (selectedColors, selectedTypes, selectedPaintCombos) => {
        let filtered = products;

        if (selectedColors.length > 0) {
            filtered = filtered.filter(product => selectedColors.includes(product.color));
        }

        if (selectedTypes.length > 0) {
            filtered = filtered.filter(product => selectedTypes.includes(product.type));
        }

        if (selectedPaintCombos.length > 0) {
            filtered = filtered.filter(product => selectedPaintCombos.includes(product.paint_combo));
        }

        setFilteredProducts(filtered);
    };

    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
    };

    return (
        <>
            <main className={styles.container_1}>
                {filterVisible && (
                    <div className={styles.container_1_2_1}>
                        
                        <FilterOptions handleApplyButtonClick={handleApplyButtonClick} toggleFilterVisibility={toggleFilterVisibility} />

                    </div>
                )}
                <div className={styles.background}></div>
                <Menu className={styles.menu} />
                <section className={styles.container_1_1}>

                    <h3 className={styles.filter} onClick={toggleFilterVisibility}>FILTER</h3>
                </section>
                <section className={styles.container_1_2}>
                    <div className={styles.card}>
                        {filteredProducts.map((product) => (
                            
                            <Link href={`/pages/product/${product.id}`} key={product.id}>
                           
                            <Product 

                                id={product.id}
                                type={product.type}
                                paint_combo={product.paint_combo}
                                color={product.color}
                                price={product.price}
                                product_image_front={product.product_image_front}
                                product_image_back={product.product_image_back}
                                model_image={product.model_image}
                            />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}


*/