import './gif.css'
import { Link } from 'wouter'


export default function Gif({ id, title, url}) {
    return (
        <>
            <Link to={`/gif/${id}`} className="gif">
                <img src={url} alt={title} />
                <span>{title}</span>
            </Link>
        </>
    )
}

