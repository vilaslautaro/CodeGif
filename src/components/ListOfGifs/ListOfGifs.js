import Gif from './Gif/Gif';
import './listOfGifs.css'

export default function ListOfGifs({gifs, keyword}) {
    return (
            <div className="container__gifs">
                {
                    gifs.map(({ id, title, url }) =>
                        <Gif
                            keyword={keyword}
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