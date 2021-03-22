import React, { useState } from "react";
import style from "../styles/hero.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function hero({ image }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url("${image.urls.regular}")` }}
    >
      <div className={style.overlay}></div>
      <div className={style.hero_content}>
        <h3 className={style.hero_title}>Unplash</h3>
        <p className={style.hero_text}>
          The internet’s source of freely-usable images. Powered by creators
          everywhere.
        </p>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            router.push({
              pathname: "/search/",
              query: {
                q: search,
              },
            });
          }}
        >
          <button className={style.button}>
            <img src="/loupe.png" />
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search free high-resolution photos"
            className={style.search}
            type="text"
          />
        </form>
        <p className={style.photo_by}>
          Photo By{" "}
          <Link href={`/user/${image.user.username}`}>{image.user.name}</Link>
        </p>
      </div>
    </div>
  );
}
