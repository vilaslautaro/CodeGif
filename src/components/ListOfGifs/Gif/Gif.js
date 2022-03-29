import './gif.css'
import { Link } from 'wouter'


export default function Gif({ id, title, url, keyword }) {
    return (
        <>
            <Link to={`/gif/${keyword}/${id}`} className="gif">
                <img src={url} alt={title} />
                <span>{title}</span>
            </Link>
        </>
    )
}

