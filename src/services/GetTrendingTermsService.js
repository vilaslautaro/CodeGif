import { API_KEY, API_URL } from './settings'


const fromApiResponseToTrendingTerms = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

export default async function GetTrendingTerms(){
    const apiTrendingURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    const res = await fetch(apiTrendingURL);
    const apiResponse = await res.json();
    return fromApiResponseToTrendingTerms(apiResponse);
}