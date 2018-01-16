import axios from 'axios'

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('http://localhost:8000/store/register/',userData)
    }

}
