import './gif.css'
import { Link } from 'wouter'


export default function Gif({ id, title, url }) {
    return (
        <>
            <Link to={`/gif/${id}`} className="gif">
                <span className="gif__title" >{title}</span>
                <img className="gif__img" src={url} alt={title} />
            </Link>
        </>
    )
}

