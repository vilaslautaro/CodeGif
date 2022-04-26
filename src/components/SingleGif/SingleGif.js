import { GifContainer, Gif, GifImg, GifTitle } from "./SingleGif.styles";

const ItemGif = ({ gif }) => {
  return (
    <>
      <GifContainer>
        {
          <Gif id={gif.id}>
            <GifTitle>{gif.title}</GifTitle>
            <GifImg src={gif.url} alt="gif" />
          </Gif>
        }
      </GifContainer>
    </>
  );
};

export default ItemGif;
