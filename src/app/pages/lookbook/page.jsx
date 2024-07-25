import { performRequest } from '@/app/lib/datocms';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import LookbookContent from '@/app/components/lookbook_content';

const query = `
  query {
    lookbook {
        season
        year
        id
        gallery {
          url
          title
        }
      }
  }
`;

export default async function Lookbook() {
  const { data } = await performRequest({ query: query });
  const lookbookGallery = data.lookbook;
  console.log("Fetched data in Shop component:", lookbookGallery);

  return (
    <>
      <Menu
        primary="#ff91c6"
        secondary="#6A00AB" 
      />
      <LookbookContent lookbook={lookbookGallery} />

      <Footer color="#6A00AB" fill="#6A00AB" />
    </>
  );
}
