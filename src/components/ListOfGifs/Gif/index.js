import React from "react";
import AddFavorites from "components/AddFavorites";
import { GifContainer, Gif, GifImg, GifSpan } from "./Gif.styles";

const GifComponent = ({ id, title, url }) => {
  const DateGif = { id, title, url };
  return (
    <GifContainer>
      <AddFavorites fav={DateGif} handleAction={"add"} />
      <Gif to={`/search/${id}`}>
        <GifSpan>{title}</GifSpan>
        <GifImg src={url} alt={title} />
      </Gif>
    </GifContainer>
  );
};

export default React.memo(GifComponent);
