import { useState, useEffect } from 'react'
import GetGifs from '../services/GetGifs'


const ItemGif = ({ params }) => {
    const [gif, setGif] = useState('')
    const { id, keyword } = params

    useEffect(() => {
        GetGifs({ keyword })
            .then(gifs => {
                gifs.filter(gif => {
                    if (gif.id === id) {
                        return setGif(gif)
                    }
                    return null
                })
            })
    }, [id, keyword])

    return (
        <>
            <div className="app__Section">
                {
                    <div id={gif.id} className="gif">
                        <h4>{gif.title}</h4>
                        <img src={gif.url} alt="gif" />
                    </div>
                }
            </div>
        </>
    )
}

export default ItemGif