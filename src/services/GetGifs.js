import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { title, id } = image;
            const { url } = image.images.downsized_medium;
            return { title, id, url }
        });
        return gifs;
    }
    return []
}

export default async function GetGifs({ limit = 20, keyword = 'simpsons', page = 0, rating = 'g', type = 'gifs' } = {}) {

    console.log(type)
    if (type === 'null' || type === 'undefined') type = 'gifs'

    const apiGifURL = `${API_URL}/${type}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=es`;

    const res = await fetch(apiGifURL);
    const apiResponse = await res.json();
    return fromApiResponseToGifs(apiResponse);
}