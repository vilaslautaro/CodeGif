import {useEffect, useState} from 'react'
import GetGifs from '../services/GetGifs'

const useGif = ({keyword, id}) => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        GetGifs({ keyword })
            .then(gifs => {
                gifs.filter(gif => {
                    if (gif.id === id) {
                        setLoading(false)
                        return setGif(gif)
                    }
                    setLoading(false)
                    return null
                })
            })
    }, [id, keyword])

    return {loading, gif}
}

export default useGif