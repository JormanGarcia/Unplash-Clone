import Image from "next/image";

import Link from "next/link";
import Style from "../styles/photo.module.css";

export default function Photo({ photo, setModalPhoto, setModalIsDisplay }) {
  function openModal(e) {
    e.preventDefault();
    setModalPhoto(photo);
    setModalIsDisplay(true);
  }

  return (
    <div className={Style.photo_card}>
      <div className={Style.username}>
        <div className={Style.popup}>
          <div className={Style.popup_user}>
            <Image
              width={64}
              height={64}
              src={photo.user.profile_image.medium}
            />
            <Link href={`/user/${photo.user.username}`}>
              <div className={Style.popup_username_container}>
                <div>{photo.user.name}</div>
                <div className={Style.popup_username}>
                  @{photo.user.username}
                </div>
              </div>
            </Link>
          </div>
          <div className={Style.viewProfile}>
            <Link href={`/user/${photo.user.username}`}>View profile</Link>
          </div>
        </div>
        <Image
          width={32}
          height={32}
          className={Style.user_photo}
          src={photo.user.profile_image.small}
        />
        <div className={Style.photo_user}>
          <Link href={`/user/${photo.user.username}`}>{photo.user.name}</Link>
        </div>
      </div>

      <div>
        <div onClick={openModal} className={Style.overlay}></div>
        <Image
          onClick={openModal}
          height={photo.height}
          width={photo.width}
          src={photo.urls.small}
          className={Style.image}
        />
      </div>

      <div className={Style.download_container}>
        <a download className={Style.download} href={photo.links.download}>
          Download
        </a>
      </div>
    </div>
  );
}
