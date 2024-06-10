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
  console.log("Executing Shop component");
  const { data } = await performRequest({ query: query });
  const allProducts = data.allProducts;
  console.log("Fetched data in Shop component:", allProducts);

  return (
    <>
    <Menu 
    menuIconColor="red"
    closingMenuIconColor="#00F135"
    moveMeColor="#00F135"
    rectColor="red"
    logoColor="red"
    logoOverlayColor="#00F135"
    lineColor="red"
    lineOverlayColor="#00F135"
    cartIconColor="red"
    cartOverlayColor="#00F135"
    itemTextColor="#00F135"
    DesktopItemTextColor="red"
/>
      <ShopContent products={allProducts} />
    <Footer
    color="red"
    fill="red"
    border=" 1px red"
    />
    </>
  );
}
