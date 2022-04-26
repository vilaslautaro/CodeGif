import Favorites from "components/Favorites";
import Helmet from "react-helmet";

export default function PageFavorites() {
  return (
    <>
      <Helmet>
        <title>Favorites | GifSticky</title>
        <meta
          name="description"
          content="View your favorite gifs and stickers"
        />
      </Helmet>
      <Favorites />;
    </>
  );
}
