import Gif from './Gif';
import { useState, useEffect } from 'react'
import GetGifs from '../services/GetGifs'
import './listOfGifs.css'

export default function ListOfGifs({search}) {
    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        GetGifs({ keyword: search })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [search])

    return (
        loading
            ? <i className='cargando'>Cargando...</i>
            :
            <div className="app__Section">
                {
                    gifs.map(({ id, title, url }) =>
                        <Gif
                            key={id}
                            title={title}
                            url={url}
                        />
                    )
                }

            </div>
    )
}