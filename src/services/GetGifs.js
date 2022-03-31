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

export default async function GetGifs({ limit = 25, keyword = 'simpsons', page = 0 } = {}) {
    const apiGifURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=es`;

    const res = await fetch(apiGifURL);
    const apiResponse = await res.json();
    return fromApiResponseToGifs(apiResponse);
}