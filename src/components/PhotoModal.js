// PhotoModal.js
import React from "react";
import "../App.css";

const PhotoModal = ({ photo, onClose }) => {
  if (!photo) {
    return null;
  }
  const modalStyle = {
    display: "block",
  };

  return (
    <div className="photo-modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={photo.urls.regular} alt={photo.alt_description} />
        <div className="photo-details">
          <p>User: {photo.user.name}</p>
          <p>Likes: {photo.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
