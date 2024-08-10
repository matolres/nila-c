import { performRequest } from '@/app/lib/datocms';
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import ProductDetail from "@/app/pages/product/product_detail";

export async function generateStaticParams() {
  const query = `
    query {
      allProducts {
        id
      }
    }
  `;

  const { data } = await performRequest({ query });
  return data.allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProductData(id) {
  const query = `
    query($id: ItemId) {
      product(filter: {id: {eq: $id}}) {
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

  const variables = { id };
  const { data } = await performRequest({ query, variables });
  return data.product;
}

export default async function ProductPage({ params }) {
  const { id } = params;
  console.log("Fetching product data for id:", id);
  const product = await getProductData(id);
  console.log("Fetched product data:", product);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return (
    <>
      <Menu
      primary="red"
      secondary="#00F135"
      />
      <ProductDetail product={product} />
      <Footer
    color="red"
    fill="red"
    border=" 1px red"
    />
    </>
  );
}
