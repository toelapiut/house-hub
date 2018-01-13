import axios from 'axios'

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('http://127.0.0.1:8000/auth/register/',userData)
    }

}