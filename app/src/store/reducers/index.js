import {
    FETCH_CHARS_START,
    FETCH_CHARS_SUCCESS,
    FETCH_CHARS_FAILURE
} from '../actions'

const initialState ={
    isLoading: false,
    chars: [],
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARS_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_CHARS_SUCCESS:
            return {
                ...state,
                chars: action.payload,
                isLoading: false,
                error: ""
            }
        case FETCH_CHARS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
        return state
    }
}