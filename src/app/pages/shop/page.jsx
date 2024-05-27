import { performRequest } from '@/app/lib/datocms';
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

export default async function Shop() {
  console.log("Executing Shop component"); // Log to check if Shop component is executed
  const { data } = await performRequest({ query: query });
  const allProducts = data.allProducts;
  console.log("Fetched data in Shop component:", allProducts); // Log fetched data in Shop component

  return (
    <ShopContent products={allProducts} />
  );
}
