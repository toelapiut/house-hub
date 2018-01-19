import axios from 'axios'

export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('https://hauzhub.herokuapp.com/api/users/register/',userData)
    }

}
