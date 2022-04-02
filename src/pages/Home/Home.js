import { useState } from 'react'
import { useLocation } from 'wouter'
import './Home.css'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Spinner from 'components/Spinner/Spinner'
import useGifs from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches/LazyTrending'

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()


    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/gifs/${keyword}`)
    }

    const handleInputChange = e => {
        setKeyword(e.target.value)
    }


    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' placeholder="Buscar" onChange={handleInputChange} maxLength={30} type='text' value={keyword} />
                <button type="submit">Buscar</button>
            </form>
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