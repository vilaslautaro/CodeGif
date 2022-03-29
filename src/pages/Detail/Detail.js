import Spinner from '../../components/Spinner'
import ItemGif from '../../components/ItemGif/ItemGif'
import useGif from '../../hooks/useGif'

export default function Detail({ params }) {
    const {keyword, id} = params
    const { loading, gif } = useGif({keyword, id})

    return (
        <>
            {loading
                ? <Spinner />
                : <ItemGif gif={gif}/>

            }
        </>
    )
}