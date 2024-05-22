
import { fetchDatoCMS } from "@/app/lib/datocms";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import ProductDetail from "@/app/components/product_detail";

export async function generateStaticParams() {
  const query = `
    query {
      allProducts {
        id
      }
    }
  `;

  const data = await fetchDatoCMS(query);
  return data.allProducts.map((product) => ({ id: product.id }));
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

  const variables = { id };
  const data = await fetchDatoCMS(query, variables);
  return data.product;
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProductData(id);

  if (!product) {
    return {
      notFound: true,
    };
  }
  console.log(product)

  return (
    <>
      <Menu />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}






