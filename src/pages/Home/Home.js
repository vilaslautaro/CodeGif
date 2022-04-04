import './Home.css'
import {useCallback} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Spinner from 'components/Spinner/Spinner'
import useGifs from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches/LazyTrending'
import SearchForm from 'components/SearchForm/SearchForm'
import useSEO from 'hooks/useSEO'


export default function Home() {
    const { loading, gifs } = useGifs()
    const [, pushLocation] = useLocation()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/gifs/${keyword}`)
    }, [pushLocation])

    useSEO({title: 'Home', description: 'Home'})


    return (
        <>
            <div>
                <SearchForm onSubmit={handleSubmit} />
            </div>
            <div className='container__homeGifs'>
                <h3 className='container__titulo'>Ultima busqueda</h3>
                {loading
                    ? <Spinner />
                    : <ListOfGifs gifs={gifs} />
                }
            </div>
            <LazyTrending />

        </>
    )

}