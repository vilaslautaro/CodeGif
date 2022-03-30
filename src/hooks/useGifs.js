import {useContext, useEffect, useState} from 'react'
import GetGifs from '../services/GetGifs'
import GifsContext from '../context/GifsContext'

const useGifs = ( {keyword} = {keyword: null }) => {
    const {gifs, setGifs} = useContext(GifsContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        const keywordToUse = keyword || localStorage.getItem('lastSearch') || 'random'

        setLoading(true)
        GetGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastSearch', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}

export default useGifs