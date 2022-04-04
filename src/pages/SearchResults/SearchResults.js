import Spinner from 'components/Spinner/Spinner'
import { useRef, useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })
    const title = gifs ? decodeURI(keyword) : ''

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])


    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return (
        <>
            {loading
                ? (
                    <>
                        <Helmet>
                            <title>Cargando...</title>
                        </Helmet>
                        <Spinner />
                    </>
                )
                : <>
                    <Helmet>
                        <title>{title} | Codegif</title>
                        <meta name="description" content={decodeURI(keyword) | Codegif}/>
                    </Helmet>
                    <h3 className="App-title"> {decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
            }
        </>
    )
}

export default SearchResults