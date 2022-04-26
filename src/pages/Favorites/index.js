/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddFavorites from "components/AddFavorites";
import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import { useLocation, Link } from "wouter";

const containerFavoritesStyles = css`
  margin: 50px 10px 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: masonry;
  gap: 10px;
  position: relative;
`;

const notFavoritesStyles = css`
  margin-top: 100px;
  color: #fff;
  font-size: 40px;
`;

const favoritesStyles = css`
  border-radius: 15px;
  text-decoration: none;
  width: 99%;
  height: 300px;
  max-width: 500px;
  position: relative;
  margin: 0 auto;
`;

const favoritesImgStyles = css`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  z-index: 2;
  margin: 0;
  padding: 0;
`;

const favoritesTitleStyles = css`
  color: #fff;
  bottom: 0px;
  left: 0;
  border-radius: 0 15px 0 15px;
  text-align: left;
  padding: 5px 12px 9px;
  margin: 0;
  text-transform: uppercase;
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  font-size: 0.7rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function Favorites() {
  const { favs } = useFav();
  const { user } = useAuth();
  const [, navigate] = useLocation();

  if (!user) return navigate("/");

  if (favs.length < 1)
    return <div css={notFavoritesStyles}>No hay favoritos</div>;

  return (
    <div css={containerFavoritesStyles}>
      {favs.map(({ id, title, url }) => {
        return (
          <div key={id} css={favoritesStyles}>
            <AddFavorites fav={id} handleAction={"delete"} />
            <Link to={`/search/${id}`}>
              <span css={favoritesTitleStyles}>{title}</span>
              <img css={favoritesImgStyles} src={url} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
