// import Gif from './Gif';
// import { useState, useEffect, useParams } from 'react'
// import { getGifs } from './../api/getApi'

// export default function GifDetail() {
//     const [loading, setLoading] = useState(false)
//     const { id } = useParams()

//     useEffect(() => {
//         setLoading(true)
//         getGifs()
//             .then(gif => {
//                 console.log(gif)
//                 const gifEncontrado = gif.find((gif) => gif.id === Number(id))
//                 setGif(gifEncontrado)
//                 console.log(gifEncontrado)
//                 console.log(gif.id)
//                 console.log(id);
//                 setLoading(false)
//             }
//             );
//     }, [id]);

//     if (loading) return <i>Cargando...</i>


//     return (
//         <div>
//             {
//                 <Gif
//                     key={id}
//                     title={title}
//                     url={url}
//                 />
//             }


//         </div>
//     )
// }