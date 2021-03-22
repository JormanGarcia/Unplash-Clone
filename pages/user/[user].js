import Layout from "../../components/Layout";
import PhotoList from "../../components/PhotoList";
import ProfileInfo from "../../components/ProfileInfo";
import Head from "next/head";

export default function user({ user, photos }) {
  return (
    <Layout>
      <Head>
        <title>{user.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProfileInfo user={user} />

      <PhotoList photos={photos} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const user = query.user;

  const client_id = `1Gql8XGO1qNVSFTDITtX0PxrMRgqVV7Bxf676SP2fyE`;

  const [res, resPhotos] = await Promise.all([
    fetch(`https://api.unsplash.com/users/${user}/?client_id=${client_id}`),

    fetch(
      `https://api.unsplash.com/users/${user}/photos/?client_id=${client_id}`
    ),
  ]);

  const userJSON = await res.json();
  const photosJSON = await resPhotos.json();

  return {
    props: { user: userJSON, photos: photosJSON }, // will be passed to the page component as props
  };
}
