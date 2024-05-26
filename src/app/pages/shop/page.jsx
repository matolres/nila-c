import { fetchDatoCMS } from "@/app/lib/datocms";
import ShopContent from '@/app/components/ShopContent';

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


export async function generateStaticParams() {
  const data = await fetchDatoCMS(query);
  return {
    products: data.allProducts,
  };
}


export default async function Shop() {
  const data = await fetchDatoCMS(query);

  return (
    <ShopContent products={data.allProducts} />
  );
}
