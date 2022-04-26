import { GifContainer, Gif, GifImg, GifTitle } from "./SingleGif.styles";

const ItemGif = ({ gif }) => {
  return (
    <>
      <GifContainer>
        <GifTitle>{gif.title}</GifTitle>
        <Gif id={gif.id}>
          <GifImg src={gif.url} alt="gif" />
        </Gif>
      </GifContainer>
    </>
  );
};

export default ItemGif;
