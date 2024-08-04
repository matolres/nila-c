import LandingPageContent from "./components/landing_page_content";
import styles from "./page.module.scss";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { performRequest } from "./lib/datocms";

const query = `
query {
allPaintCombinations {
    colorCombo {
      url
    }
    id
    name
  }
  allProducts(filter: { latest: { eq: true } }) {
    id
    productFrontImage {
      url
    }
    category
    color
    paintCombo
    price
    productDetail
    size
  }
}
`;

export default async function Home() {
  const { data } = await performRequest({ query: query });
  const allProducts = data.allProducts;
  const allPaintCombinations = data.allPaintCombinations;
  console.log("Fetched ALLPRODUCTS in Shop component:", allProducts);
  console.log("Fetched data in Shop component:", allPaintCombinations);
  
  return (
    <>
      <Menu className={styles.menu}
      primary="yellow"
      secondary="blue"
      />
      <LandingPageContent products={allProducts} paintCombination={allPaintCombinations} />
      <Footer />
    </>
  );
}
