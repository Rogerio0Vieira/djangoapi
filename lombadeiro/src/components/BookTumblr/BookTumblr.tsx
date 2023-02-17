import React, { useState } from "react"

interface BookTumblrProps {
  favorite: boolean;
  title: string;
  imagePath: string;
  imageName: string;
}

const BookTumblr: React.FC<BookTumblrProps> = ({ favorite, title, imagePath, imageName }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)

  const handleFavorite = () => {
    setIsFavorite(isFavorite)
  };

  return (
    <div className="book-tumblr-container">
      <title>{title}</title>
      <img src={imagePath} alt={imageName} />
      <div className="meta-container">
        <button className="like-button" onClick={handleFavorite}>
          Colocar o icone do like aqui
        </button>
      </div>
    </div>
  );
};