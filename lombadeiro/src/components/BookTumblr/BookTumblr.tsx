import React, { useState } from "react"
import { BookTumblrContainer } from "./styles";

interface BookTumblrProps {
  favorite: boolean;
  title: string;
  imagePath: string;
  imageName: string;
}

export const BookTumblr: React.FC<BookTumblrProps> = ({ favorite, title, imagePath, imageName }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)

  const handleFavorite = () => {
    setIsFavorite(isFavorite)
  };

  return (
    <BookTumblrContainer>
      <title>{title}</title>
      <img src={imagePath} alt={imageName} />
      <div className="meta-container">
        <button className="like-button" onClick={handleFavorite}>
          Colocar o icone do like aqui
        </button>
      </div>
    </BookTumblrContainer>
  );
};