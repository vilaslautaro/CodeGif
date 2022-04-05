import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const { images, title, id } = data;
    const { url } = images.downsized_medium;
    return { title, id, url }

}

export default function getSingleGif({ id, type }) {
    return fetch(`${API_URL}/${type}/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}