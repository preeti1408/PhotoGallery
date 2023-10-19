// App.js
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PhotoGrid from "./components/PhotoGrid";
import PhotoModal from "./components/PhotoModal";
import "./App.css";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("book");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
      .then((response) => {
        setPhotos(response.data.results);
      });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PhotoGrid photos={photos} openPhotoModal={openPhotoModal} />
      <PhotoModal photo={selectedPhoto} onClose={closePhotoModal} />
    </div>
  );
}

export default App;
