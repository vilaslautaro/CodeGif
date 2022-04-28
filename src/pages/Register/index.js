import Register from "components/Register";
import Helmet from "react-helmet";

export default function PageRegister() {
  return (
    <>
      <Helmet>
        <title>Register | GifSticky</title>
        <meta
          name="description"
          content="Register in the application"
        />
      </Helmet>
      <Register />
    </>
  );
}
