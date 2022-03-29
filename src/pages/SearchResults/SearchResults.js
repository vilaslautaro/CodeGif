import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({params}) => {
    const {keyword} = params
    const { loading, gifs } = useGifs({keyword})

    return (
        <>
            {loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs} keyword={keyword}/>
            }
        </>
    )
}

export default SearchResults