import GetData from '@/app/lib/datocms';


export async function getProductData(id) {
  const products = await GetData(id);
  return products[0];
}