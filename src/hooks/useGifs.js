import { useContext, useEffect, useState } from 'react'
import GetGifs from 'services/GetGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({ keyword, rating, type } = { keyword: null }) => {
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE)
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const keywordToUse = keyword || localStorage.getItem('lastSearch')
    const typeToUse = type || localStorage.getItem('lastSearchType')


    useEffect(() => {
        setLoading(true)
        GetGifs({ keyword: keywordToUse, rating, type: typeToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastSearch', keyword)
                localStorage.setItem('lastSearchType', type)
            })
    }, [keyword, keywordToUse, rating, type, typeToUse, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        GetGifs({ keyword: keywordToUse, page, type, rating })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keywordToUse, rating, type, setGifs])

    return { loading, gifs, setPage, loadingNextPage }
}

export default useGifs