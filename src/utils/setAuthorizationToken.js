import axios from 'axios'
// import default from '../components/shelf';

export default function setAuthorizationToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Token ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}
