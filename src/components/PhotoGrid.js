import React from "react";
import "../App.css";

const PhotoGrid = ({ photos, openPhotoModal }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-card"
          onClick={() => openPhotoModal(photo)}
        >
          <img src={photo.urls.small} alt={photo.alt_description} />
          <div className="photo-details">
            <p>User: {photo.user.name}</p>
            <p>Likes: {photo.likes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
