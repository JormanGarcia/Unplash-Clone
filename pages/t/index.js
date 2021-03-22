import Layout from "../../components/Layout";
import Topic from "../../components/Topic";
import Style from "../../styles/topicList.module.css";
import Head from "next/head";
export default function index({ topics }) {
  return (
    <Layout>
      <Head>
        <title>Topics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={Style.container}>
        <h1 className={Style.title}>Topics</h1>
        <p className={Style.paragraph}>
          Explore the world through topics of beautiful photos free to use under
          the <a href="https://unsplash.com/license">Unsplash License</a>.
        </p>
        <h3 className={Style.subtitle}>Featured</h3>
        <div className={Style.grid}>
          <Topic topic={topics[0]} />
        </div>

        <h3 className={Style.subtitle}>All topic</h3>

        <div className={Style.grid}>
          {topics.slice(1).map((topic) => (
            <Topic topic={topic} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.unsplash.com/topics/?client_id=1Gql8XGO1qNVSFTDITtX0PxrMRgqVV7Bxf676SP2fyE&per_page=28"
  );

  const topics = await res.json();

  return {
    props: {
      topics,
    },
  };
}
