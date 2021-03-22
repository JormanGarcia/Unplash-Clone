import Link from "next/link";
import Image from "next/image";
import Style from "../styles/modal.module.css";

export default function Modal({ photo, isDisplay, setModalIsDisplay }) {
  if (photo !== null) {
    return (
      <div
        className={Style.overlay}
        style={{ display: isDisplay ? "block" : "none" }}
      >
        <div
          className={Style.close}
          onClick={(e) => {
            e.preventDefault();
            setModalIsDisplay(false);
          }}
        >
          X
        </div>
        <div className={Style.card}>
          <div className={Style.top}>
            <div className={Style.username}>
              <Image
                width={32}
                height={32}
                src={photo.user.profile_image.small}
              />

              <Link href={`/user/${photo.user.username}`}>
                {photo.user.name}
              </Link>
            </div>
            <a className={Style.download} href={photo.links.download} download>
              Download
            </a>
          </div>
          <div className={Style.image}>
            <Image
              width={photo.width}
              height={photo.height}
              src={photo.urls.regular}
            />
          </div>
        </div>
      </div>
    );
  } else return null;
}
