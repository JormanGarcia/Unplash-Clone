import { useRouter } from "next/router";
import Layout from "../components/Layout";
import PhotoList from "../components/PhotoList";
import Head from "next/head";
export default function search({ search }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Search | {router.query.q}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1
        style={{
          fontSize: "50px",
          width: "90vw",
          margin: "50px auto 0 auto",
          textTransform: "capitalize",
          paddingBottom: "15px",
          borderBottom: "1px solid rgba(0,0,0,.2)",
        }}
      >
        {router.query.q}
      </h1>
      <PhotoList photos={search.results} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { q } = query;
  const client_id = `1Gql8XGO1qNVSFTDITtX0PxrMRgqVV7Bxf676SP2fyE`;

  const res = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${q}&per_page=30`
  );

  const search = await res.json();

  return {
    props: {
      search,
    },
  };
}
