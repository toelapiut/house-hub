import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user

    }
}


export function login(data){
    return dispatch => {
        // return axios.post('https://hauzhub.herokuapp.com/api-token-auth/',data).then(res=>{
        return axios.post('https://hauzhub.herokuapp.com/api-token-auth/',data).then(res=>{


            console.log(res)
            const token = res.data.token
            localStorage.setItem('jwtToken',token)
            setAuthorizationToken(token)
            dispatch(setCurrentUser(token))
        })
    }
}

export function logout(){
    return dispatch =>{
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false)
        dispatch(setCurrentUser({}))
    }
}
