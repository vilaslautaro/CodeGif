import { Link } from 'wouter'


export default function Category({ options = [] }) {
    return (
        <section>
            <div className='category'></div>
            <h3 className='category-title'>Tendencias</h3>
            <ul>
                {options.map(singleOption => (
                    <li key={singleOption}>
                        <Link
                            className='category-link'
                            to={`/gifs/${singleOption}`}>
                            {singleOption}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </section>
    )
}