import './gif.css'
import React from 'react'
import { Link } from 'wouter'


const Gif = ({ id, title, url }) => {
    return (
        <>
            <Link to={`/search/${id}`} className="gif">
                <span className="gif__title" >{title}</span>
                <img className="gif__img" src={url} alt={title} />
            </Link>
        </>
    )
}

export default React.memo(Gif)
