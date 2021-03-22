import React from "react";
import Layout from "../../components/Layout";
import PhotoList from "../../components/PhotoList";
import Head from "next/head";
import Style from "../../styles/topicPage.module.css";

export default function slug({ photos, topic }) {
  return (
    <Layout>
      <Head>
        <title>Topic | {topic.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <div className={Style.topic}>
          <div>
            <h1 className={Style.title}>{topic.title}</h1>
            <div
              className={Style.description}
              dangerouslySetInnerHTML={{ __html: topic.description }}
            />
          </div>

          <ul className={Style.info}>
            <li>
              <p>Status</p>
              <div>{topic.status}</div>
            </li>
            <li>
              <p>Curator</p>
              <div>
                <img
                  className={Style.curator}
                  src={topic.owners[0].profile_image.small}
                />
              </div>
            </li>
            <li>
              <p>Contribution</p>
              <div className={Style.contributions}>
                {topic.total_photos >= 1000
                  ? String((topic.total_photos / 1000).toFixed(1)).concat("k")
                  : topic.total_photos}
              </div>
            </li>
            <li>
              <p>Top Contributors</p>
              <div>
                {topic.top_contributors.map((contributor) => (
                  <img
                    className={Style.contributor}
                    src={contributor.profile_image.small}
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <PhotoList photos={photos} />{" "}
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const client_id = `1Gql8XGO1qNVSFTDITtX0PxrMRgqVV7Bxf676SP2fyE`;

  const [photosCall, topicCall] = await Promise.all([
    fetch(
      `https://api.unsplash.com/topics/${slug}/photos/?client_id=${client_id}&per_page=30`
    ),
    fetch(
      `https://api.unsplash.com/topics/${slug}/?client_id=${client_id}&per_page=30`
    ),
  ]);

  const photos = await photosCall.json();
  const topic = await topicCall.json();

  return {
    props: {
      photos,
      topic,
    },
  };
}
