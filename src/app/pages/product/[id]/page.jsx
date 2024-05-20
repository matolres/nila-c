"use client"

import Menu from "@/app/components/menu";
import { useEffect, useState } from 'react';


async function getProductData(id) {
    const res = await fetch(`https://cjwahixgspklivbzuuxe.supabase.co/rest/v1/products?id=eq.${id}`, {
        method: "GET",
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2FoaXhnc3BrbGl2Ynp1dXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTY0MTksImV4cCI6MjAzMTE5MjQxOX0.3QnDt9bicF_0L9HofVZoQJxBDlCAcSYBJFyUOiYGwY8",
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product data');
    }

    const data = await res.json();
    return data[0];
}

const ProductPage = ({ params }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProduct = await getProductData(params.id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        fetchData();
    }, [params.id]);

    return (
        <>
            <Menu />
            <div>
                {product ? (
                    <>
                        <h1>{product.type}</h1>
                        <p>{product.paint_combo}</p>
                        <p>{product.color}</p>
                        <p>{product.price}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default ProductPage;



