import './gif.css'
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from './ListOfGifs'

const value = useContext(CartContext)

export default function Gif({id, title, url }) {
    
    return (
        <Link to={`/gif/${id}`} className="gif">         
            <h4>${title}</h4>
            <img src={url} alt="gif" />
        </Link>
    )
}