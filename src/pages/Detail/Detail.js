import { useContext } from 'react'
import ItemGif from '../../components/ItemGif/ItemGif'
import { GifsContextProvider } from '../../context/GifsContext'

export default function Detail({ params }) {
    const { gifs } = useContext(GifsContextProvider)

    const gif = gifs.find(singleGif => {
        return singleGif.id === params.id
    })

    return (
        <>
            <ItemGif gif={gif} />
        </>
    )
}