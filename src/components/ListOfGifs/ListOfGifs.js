import Gif from './Gif/Gif';
import './listOfGifs.css'

export default function ListOfGifs({gifs}) {
    return (
            <div className="container__gifs">
                {
                    gifs.map(({ id, title, url }) =>
                        <Gif
                            id={id}
                            key={id}
                            title={title}
                            url={url}
                        />
                    )
                }
            </div>
    )
}