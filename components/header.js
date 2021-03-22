import styles from "../styles/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function header({ topics }) {
  const [menu, setMenu] = useState(false);
  const [categoriesScroll, setCategoriesScroll] = useState(0);

  const [Search, setSearch] = useState("");
  const [nextDisplay, setNextDisplay] = useState(true);
  const [PreviousDisplay, setPreviousDisplay] = useState(false);
  const router = useRouter();

  function handleScrollBar(e) {
    const scrollWidth = e.target.scrollWidth - e.target.clientWidth;
    if (e.target.scrollLeft === scrollWidth) setNextDisplay(false);
    else if (e.target.scrollLeft !== scrollWidth) setNextDisplay(true);

    if (e.target.scrollLeft === 0) setPreviousDisplay(false);
    else if (e.target.scrollLeft !== 0) setPreviousDisplay(true);
  }

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            router.push({
              pathname: "/search",
              query: {
                q: Search,
              },
            });
          }}
        >
          <button>
            <img src="/loupe.png" />
          </button>
          <input
            type="input"
            value={Search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            placeholder="Search photos"
          />
        </form>
        <a
          href="https://github.com/JormanGarcia/Unplash-Clone"
          className={styles.gitLink}
        >
          See the code
        </a>

        <div className={styles.menuContainer} onClick={() => setMenu(!menu)}>
          <div></div>
          <div className={styles.center}></div>
          <div></div>
        </div>

        <nav
          style={
            menu
              ? { visibility: "visible", opacity: 1, transform: "scale(1)" }
              : { visibility: "hidden", opacity: 0, transform: "scale(0.9)" }
          }
        >
          <a href="https://unsplash.com/brands">Brands</a>
          <a href="https://unsplash.com/blog?utm_source=unsplash&utm_medium=referral">
            Blog
          </a>
          <Link href="/topics">Topics</Link>
          <a href="https://unsplash.com/collections">Collections</a>
          <a href="https://unsplash.com/community">Community</a>
          <a href="https://unsplash.com/history">History</a>
          <a href="https://madewith.unsplash.com/?utm_source=unsplash&utm_medium=referral">
            Made with Unsplash
          </a>
          <a href="https://unsplash.com/developers">API/Developers</a>
          <a href="https://unsplash.com/apps">Official Apps</a>
          <div>
            <Link href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral">
              <img src="/twitter.svg" />
            </Link>
            <Link href="https://www.facebook.com/pages/Unsplash/274126369394815?utm_source=unsplash&utm_medium=referral">
              <img src="/facebook.svg" />
            </Link>
            <Link href="https://instagram.com/unsplash?utm_source=unsplash&utm_medium=referral">
              <img src="/instagram.svg" />
            </Link>
          </div>
        </nav>
      </div>
      <div className={styles.categories}>
        <div className={styles.categoriesLeft}>
          <Link href="/t">Categories</Link>
        </div>
        <div
          style={{
            display: PreviousDisplay ? "block" : "none",
          }}
          className="blur left"
        ></div>
        <div
          style={{
            display: nextDisplay ? "block" : "none",
          }}
          className="blur right"
        ></div>

        <div
          onScroll={(e) => handleScrollBar(e)}
          id="scroll"
          className={styles.categoriesRight}
        >
          <img
            src="/arrow.png"
            onClick={() =>
              (document.getElementById("scroll").scrollLeft -= 400)
            }
            className={styles.previous}
            style={{
              display: PreviousDisplay ? "block" : "none",
            }}
          />

          <div className={styles.scroll}>
            <Link href="/t/wallpapers">Wallpapers</Link>
            <Link href="/t/color-theory">Color theory</Link>
            <Link href="/t/experimental">Experimental</Link>
            <Link href="/t/nature">Nature</Link>
            <Link href="/t/fashion">Fashion</Link>
            <Link href="/t/people">People</Link>
            <Link href="/t/film">Film</Link>
            <Link href="/t/architecture">Architecture</Link>
            <Link href="/t/current-events">Current Events</Link>
            <Link href="/t/business-work">Business & Work</Link>
            <Link href="/t/health">Health & Wellness</Link>
            <Link href="/t/interiors">Interiors</Link>
            <Link href="/t/street-photography">Street Photography</Link>
            <Link href="/t/interiors">Interiors</Link>
            <Link href="/t/travel">Travel</Link>
            <Link href="/t/textures-patterns">Texture & Patterns</Link>
            <Link href="/t/covid-19">Covid 19</Link>
            <Link href="/t/animals">Animals</Link>
            <Link href="/t/food-drink">Food & drink</Link>
            <Link href="/t/athletics">Athletics</Link>
            <Link href="/t/spirituality">Spirituality</Link>
            <Link href="/t/arts-culture">Arts & culture</Link>
            <Link href="/t/history">History</Link>
            <Link href="/t/50mm">50 mm</Link>
            <Link href="/t/comfort_food">Comfort food</Link>
            <Link href="/t/hero_product">
              Product Photography with a hero subject
            </Link>
            <Link href="/t/houseplants">Houseplants</Link>
            <Link href="/t/monochrome">Monochrome</Link>
          </div>

          <img
            src="/arrow.png"
            onClick={() =>
              (document.getElementById("scroll").scrollLeft += 400)
            }
            className={styles.next}
            style={{
              display: nextDisplay ? "block" : "none",
            }}
          />
        </div>
      </div>
    </header>
  );
}
