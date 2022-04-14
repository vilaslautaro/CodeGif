import "./gif.css";
import React from "react";
import { Link } from "wouter";
import Favorites from "components/Favorites/Favorites";

const Gif = ({ id, title, url }) => {
  return (
    <div className="gif__container">
      <Favorites idFav={id} />
      <Link to={`/search/${id}`} className="gif">
        <span className="gif__title">{title}</span>
        <img className="gif__img" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif);
