import './gif.css'


export default function Gif({id, title, url }) {
    
    return (
        <div className="gif">         
            <h4>${title}</h4>
            <img src={url} alt="gif" />
        </div>
    )
}