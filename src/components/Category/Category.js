import { Link } from 'wouter'
import './Category.css'


export default function Category({ options = [] }) {
    return (
        <section>
            <h3 className='category__title'>Trendings</h3>
            <ul className='category__box'>
                {options.map(singleOption => (
                    <li className='category__contain' key={singleOption}>
                        <Link
                            className='category__link'
                            to={`/search/gifs/${singleOption}/g`}>
                            {singleOption}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </section>
    )
}