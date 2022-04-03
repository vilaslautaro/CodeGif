import React, { useState } from 'react'



const SearchForm = ({onSubmit}) => {
    const [keyword, setKeyword] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({keyword})
    }

    const handleInputChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='input' placeholder="Buscar" onChange={handleInputChange} maxLength={30} type='text' value={keyword} />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)