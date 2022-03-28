import Gif from './Gif';
import { useState, useEffect } from 'react'
import { getGifs } from './../api/getApi'
import './listOfGifs.css'
import {createContext} from 'react';

    export const CartContext = createContext()

export default function ListOfGifs({ params }) {
    const [loading, setLoading] = useState(false)
    const { keyword } = params
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            }
            );
    }, [keyword]);

    if(loading) return <i>Cargando...</i>

    return (
        <CartContext.Provider value={{productos}}>
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
        </CartContext.Provider>
    )
}