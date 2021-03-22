import Layout from "../components/Layout";
import Hero from "../components/hero";
import PhotoList from "../components/PhotoList";
import Head from "next/head";
export default function index({ photos, image }) {
  return (
    <Layout>
      <Head>
        <title>Unplash</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero image={image} />
      <PhotoList photos={photos} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const client_id = `1Gql8XGO1qNVSFTDITtX0PxrMRgqVV7Bxf676SP2fyE`;

  const [photosCall, heroImage] = await Promise.all([
    fetch(
      `https://api.unsplash.com/photos/?client_id=${client_id}&per_page=50`
    ),
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${client_id}&orientation=landscape`
    ),
  ]);

  const photos = await photosCall.json();
  const image = await heroImage.json();

  return {
    props: { photos, image }, // will be passed to the page component as props
  };
}
