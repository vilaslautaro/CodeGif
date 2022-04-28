import GetTrendingTerms from 'services/GetTrendingTermsService'
import { useState, useEffect } from 'react'
import Category from 'components/Category'

const TrendingSearches = () => {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        GetTrendingTerms()
            .then(data => setTrends(data))
            .catch(e => console.log(e))
    }, [])


    return <Category options={trends} />
}

export default TrendingSearches

