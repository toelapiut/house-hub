import axios from 'axios'

export function login(data){
    return dispatch => {
        return axios.post('http://127.0.0.1:8000/auth/',data)
    }
}