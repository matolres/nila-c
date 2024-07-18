import { performRequest } from '@/app/lib/datocms';
import ShopContent from '@/app/components/ShopContent';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';

const query = `
  query {
     allProducts {
      id
      category
      color
      paintCombo
      price
      productDetail
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
  console.log("Executing Shop component");
  const { data } = await performRequest({ query: query });
  const allProducts = data.allProducts;
  console.log("Fetched data in Shop component:", allProducts);

  return (
    <>
    <Menu 
      primary="red"
      secondary="#00F135"
/>
      <ShopContent products={allProducts} />
    <Footer

    />
    </>
  );
}
/*


    allProducts {
      id
      category
      color
      paintCombo
      price
      productDetail
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

*/
