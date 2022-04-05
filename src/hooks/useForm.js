import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_TYPE: 'update_type',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case ACTIONS.UPDATE_TYPE:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}

const useForm = ({ initialKeyword = '', initialRating = 'g', initialType = 'gifs' }) => {
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURI(initialKeyword),
        rating: initialRating,
        type: initialType
    })

    const { keyword, rating, type } = state

    return {
        keyword,
        rating,
        type,
        updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateType: type => dispatch({ type: ACTIONS.UPDATE_TYPE, payload: type })
    }
}

export default useForm