import axios from 'axios';
const apiURL = process.env.REACT_APP_APIURL

export const getHeroes = () => {
    return function(dispatch) {
        axios.get(`${apiURL}/heroes`)
        .then((response) => {
            dispatch({
                type: 'HEROES_LIST',
                payload: response.data
            })
        })
    }
}

export const addHeroes = (data) => {
    return (dispatch) => {
        axios.post(`${apiURL}/heroes`, data)
        .then((response) => {
            dispatch({
                type: 'HEROES_ADD',
                payload: response.data
            })
        })
    }
}

export const deleteHeroes = (heroesId) => {
    return function(dispatch) {
        axios.delete(`${apiURL}/heroes/${heroesId}`)
        .then((response) => {
            dispatch({
                type: 'HEROES_DELETE',
                payload: heroesId
            })
        })
    }
}