import Error from "components/Error";
import {Helmet} from 'react-helmet'

export default function Error404() {
  return (
    <>
     <Helmet>
        <title>Error 404 | GifSticky</title>
        <meta
          name="description"
          content="An error occurred. Error 404"
        />
      </Helmet>
      <Error />;
    </>
  );
}
