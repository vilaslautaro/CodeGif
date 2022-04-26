import { Helmet } from "react-helmet";
import Home from "components/Home";

export default function PageHome() {
  return (
    <>
      <Helmet>
        <title>Home | GifSticky</title>
        <meta
          name="description"
          content="app where you can search for your favorite gifs"
        />
      </Helmet>
      <Home />
    </>
  );
}
