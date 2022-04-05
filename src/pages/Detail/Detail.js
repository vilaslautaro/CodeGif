import SingleGif from 'components/SingleGif/SingleGif'
import { Redirect } from 'wouter'
import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm/SearchForm'

export default function Detail({ params }) {
    const { gif, isLoading } = useSingleGif({ id: params.id })
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
    if (!gif) return null

    return (
        <>
            <Helmet>
                <title>{title} | Codegif</title>
                <meta name="description" content={{ title } + "| Codegif"} />
            </Helmet>
            <div>
                <SearchForm />
            </div>
            <SingleGif gif={gif} />
        </>
    )
}