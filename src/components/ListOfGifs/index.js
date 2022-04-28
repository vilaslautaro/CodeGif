import Gif from "./Gif";
import { ContainerGifs } from "./ListOfGifs.styles";

export default function ListOfGifs({ gifs }) {
  return (
    <ContainerGifs>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </ContainerGifs>
  );
}
