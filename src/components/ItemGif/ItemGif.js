
const ItemGif = ({gif}) => {
    console.log(gif)
     return (
        <>
            <div className="app__Section">
                {
                    <div id={gif.id} className="gif">
                        <h4>{gif.title}</h4>
                        <img src={gif.url} alt="gif" />
                    </div>
                }
            </div>
        </>
    )
}

export default ItemGif