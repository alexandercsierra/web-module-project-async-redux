import axios from 'axios'

export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS"
export const FETCH_CHARS_START = "FETCH_CHARS_START"
export const FETCH_CHARS_FAILURE = "FETCH_CHARS_FAILURE"

export const fetchData = () => {
    return dispatch => {
        dispatch({ type: FETCH_CHARS_START})

        axios
            .get('https://www.amiiboapi.com/api/amiibo/?character=yoshi')
            .then((res)=>{
                console.log({res})
                dispatch({ 
                    type: FETCH_CHARS_SUCCESS, 
                    payload:res.data.amiibo})
            })

            .catch((err)=>{
                console.log(err)
                dispatch({ 
                    type: FETCH_CHARS_FAILURE, 
                    payload:err.message})
            })
    }
}