import SingleGif from 'components/SingleGif/SingleGif'
import { Redirect } from 'wouter'
import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''



    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if (isError) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
        <Helmet>
            <title>{title} | Codegif</title>
            <meta name="description" content={{title} | Codegif} />
        </Helmet>
            <SingleGif gif={gif} />
        </>
    )
}