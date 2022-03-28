import './gif.css'
import {Link} from 'wouter'


export default function Gif({ id, title, url, keyword }) {
    return (
        <>
            <Link to={`/gif/${keyword}/${id}`} className="gif">
                <h4>{title}</h4>
                <img src={url} alt="gif" />
            </Link>
        </>
    )
}

