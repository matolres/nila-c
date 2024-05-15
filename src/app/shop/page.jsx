"use client"

import { useEffect, useState } from 'react';
import Menu from "../components/menu";
import styles from '@/app/css/shop.module.scss';
import Product from "../components/product";
import ColorFilterOptions from '../components/filter';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const [selectedColors, setSelectedColors] = useState([]);
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
                setFilteredProducts(data); // Initialize filteredProducts with all products
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    const handleFilterChange = (filter) => {
        if (filter === "ALL") {
            setFilteredProducts(products); // Set filteredProducts back to all products
        } else {
            const filtered = products.filter(product => product.type.toLowerCase() === filter.toLowerCase());
            setFilteredProducts(filtered);
        }
        setSelectedFilter(filter);
    };
    const handleColorButtonClick = (colors) => {
        setSelectedColors(colors); // Set the selected colors
    };
    
    const handleTypeButtonClick = (type) => {
        const filtered = products.filter(product => product.type.toLowerCase() === type.toLowerCase());
        setFilteredProducts(filtered);
        setSelectedFilter(type);
    };
    const handleApplyButtonClick = (selectedColors) => {
        if (selectedColors.length === 0) {
            setFilteredProducts(products); // No colors selected, show all products
        } else {
            const filtered = products.filter(product => selectedColors.includes(product.color.toLowerCase()));
            setFilteredProducts(filtered);
        }
        setSelectedFilter(selectedColors); // Display selected colors as the filter
    };
    useEffect(() => {
        // Filter products based on selected colors
        if (selectedColors.length === 0) {
            setFilteredProducts(products); // No colors selected, show all products
        } else {
            const filtered = products.filter(product => selectedColors.includes(product.color.toLowerCase()));
            setFilteredProducts(filtered);
        }
    }, [selectedColors, products]);

    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
    };
    
    

    console.log("filteredProducts:", filteredProducts); // Log filteredProducts to check its value

    return(
        <>
            <main className={styles.container_1}>
            {filterVisible && (
                        <div className={styles.container_1_2_1}>
                            <h3 className={styles.close_filter} onClick={toggleFilterVisibility}>FILTER</h3>
                            <ColorFilterOptions 
    handleColorButtonClick={handleColorButtonClick} 
    handleApplyButtonClick={handleApplyButtonClick} 
/>

                           
                        </div>
                    )}
                <div className={styles.background}></div>
                <Menu className={styles.menu}/>

                <section className={styles.container_1_1}>
                    <ul className={styles.container_1_1_1}>
                        <li onClick={() => handleFilterChange("ALL")} className={selectedFilter === "ALL" ? styles.selected : ""}>ALL</li>
                        <li onClick={() => handleTypeButtonClick("Hoodie")}>HOODIES</li>
                        <li onClick={() => handleTypeButtonClick("T-shirt")} className={selectedFilter === "T-SHIRTS" ? styles.selected : ""}>T-SHIRTS</li>
                        <li onClick={() => handleTypeButtonClick("Jeans")} className={selectedFilter === "JEANS" ? styles.selected : ""}>JEANS</li>
                        <li onClick={() => handleTypeButtonClick("Paint_combo")} className={selectedFilter === "PAINT COMBINATIONS" ? styles.selected : ""}>PAINT COMBINATIONS</li>
                    </ul>
                    <h3 className={styles.filter} onClick={toggleFilterVisibility}>FILTER</h3>

                </section>

               
                    <section className={styles.container_1_2}>

                    <div className={styles.card}>
                        {filteredProducts.map((res) => (
                            <Product
                                key={res.id}
                                type={res.type}
                                paint_combo={res.paint_combo}
                                color={res.color}
                                price={res.price}
                                product_image_front={res.product_image_front}
                                product_image_back={res.product_image_back}
                                model_image={res.model_image}
                            />
                        ))}
                    </div>
                    </section>

            </main>
        </>
    )
}
