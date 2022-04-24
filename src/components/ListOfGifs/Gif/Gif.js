import "./gif.css";
import React from "react";
import { Link } from "wouter";
import AddFavorites from "components/AddFavorites/AddFavorites";

const Gif = ({ id, title, url }) => {
const DateGif = {id, title, url}
  return (
    <div className="gif__container">
      <AddFavorites fav={DateGif} handleAction={'add'}/>
      <Link to={`/search/${id}`} className="gif">
        <span className="gif__title">{title}</span>
        <img className="gif__img" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif);
