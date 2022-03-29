import {useEffect, useState} from 'react'
import GetGifs from '../services/GetGifs'

const useGifs = ( {keyword} = {keyword: null }) => {
    const [gifs, setGifs] = useState([]);
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
    }, [keyword])

    return {loading, gifs}
}

export default useGifs