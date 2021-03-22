import Photo from "./Photo";
import Modal from "./Modal";

import Style from "../styles/photolist.module.css";
import { useState } from "react";

export default function PhotoList({ photos }) {
  const [modalIsDisplay, setModalIsDisplay] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div className={Style.photo_list}>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
          setModalIsDisplay={setModalIsDisplay}
        />
      ))}
      <Modal
        isDisplay={modalIsDisplay}
        setModalIsDisplay={setModalIsDisplay}
        photo={modalPhoto}
      />
    </div>
  );
}
