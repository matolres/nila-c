
import Menu from "@/app/components/menu";
import GetData from '@/app/lib/data';

import Footer from "@/app/components/footer";
import ProductDetail from "@/app/components/product_detail";


export default async function  ProductPage({ params }) {
    const { id } = params;
    const products = await GetData(id);
    const product = products[0];

    return (
        <>
        <Menu />
            <ProductDetail product={product} />
        <Footer />
        </>
    );
};





