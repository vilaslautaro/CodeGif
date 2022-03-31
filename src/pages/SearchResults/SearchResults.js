import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'

const SearchResults = ({params}) => {
    const {keyword} = params
    const { loading, gifs, setPage } = useGifs({keyword})

    const handleNextPage= () =>{
        setPage(prevPage => prevPage + 1)
    }

    return (
        <>
            {loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs}/>
            }
            <button onClick={handleNextPage}>Get next page</button>
        </>
    )
}

export default SearchResults