import Gif from './Gif';
import { useState, useEffect } from 'react'
import GetGifs from '../services/GetGifs'
import './listOfGifs.css'

export default function ListOfGifs({params}) {
    const [gifs, setGifs] = useState([]);
    const {keyword} = params


    useEffect(() => {
        GetGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
            })
    }, [keyword])

    return (
            <div className="app__Section">
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