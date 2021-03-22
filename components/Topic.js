import Style from "../styles/topic.module.css";
import Link from "next/link";

export default function Topic({ topic }) {
  return (
    <Link href={`/t/${topic.slug}`}>
      <div className={Style.card}>
        <img className={Style.image} src={topic.cover_photo.urls.regular} />
        <div className={Style.foot}>
          <div>
            <h4 className={Style.title}>{topic.title}</h4>
            <p className={Style.owner}>
              by{" "}
              <Link href={`/user/${topic.owners[0].username}`}>
                {topic.owners[0].username}
              </Link>
            </p>
          </div>
          <div className={Style.description}>
            <p dangerouslySetInnerHTML={{ __html: topic.description }}></p>
          </div>
          <p className={Style.contributions}>
            {topic.total_photos >= 1000
              ? String((topic.total_photos / 1000).toFixed(1)).concat("k")
              : topic.total_photos}{" "}
            contributions
          </p>
        </div>
      </div>
    </Link>
  );
}
