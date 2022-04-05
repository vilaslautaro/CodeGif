import useForm from 'hooks/useForm'
import React from 'react'
import './SearchForm.css'
import { useLocation } from 'wouter'

const SearchForm = ({ initialKeyword = '', initialRating = 'g', initialType = 'gifs' } = {}) => {
    const [, pushLocation] = useLocation()

    const { keyword, rating, type, updateKeyword, updateRating, updateType } = useForm({ initialKeyword, initialRating, initialType })

    const handleChangeRating = e => {
        updateRating(e.target.value)
    }

    const handleInputChange = e => {
        updateKeyword(e.target.value)
    }
    const handleChangeType = e => {
        updateType(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (keyword !== '') pushLocation(`/search/${type}/${keyword}/${rating}`)
    }

    
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='input' placeholder="Search" onChange={handleInputChange} maxLength={30} type='text' value={keyword} />
            <div className='form__boxs-select'>
                <select onChange={handleChangeRating} value={rating}>
                    <option key='g' value='g'>Suitable for all ages</option>
                    <option key='pg-13' value='pg-13'>+13</option>
                    <option key='r' value='r'>+18</option>
                </select>
                <select onChange={handleChangeType} value={type}>
                    <option key='gifs' value='gifs'>Gifs</option>
                    <option key='stickers' value='stickers'>Stickers</option>
                </select>
            </div>

            <button className="form__btn" type="submit">Search</button>
        </form>
    )
}

export default React.memo(SearchForm)