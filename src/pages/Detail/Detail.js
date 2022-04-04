import SingleGif from 'components/SingleGif/SingleGif'
import {Redirect} from 'wouter'
import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'

export default function Detail({ params }) {
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''
    useSEO({title, description: `Detail of ${title}` })

    if(isLoading) return <Spinner />
    if(isError) return <Redirect to="/404" />
    if(!gif) return null

    return (
        <>
            <SingleGif gif={gif} />
        </>
    )
}