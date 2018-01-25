import axios from "axios"
import {RECEIVE_PROPERTIES} from './types';

export function homeData(properties) {
  return {
    type: RECEIVE_PROPERTIES, 
    properties
  }
}

const addProperty = (data) => {
    return dispatch => {
        // return axios.post
        console.log('====================================');
        console.log('sdfghjkl');
        console.log('====================================');
        return axios.post('http://hauzhub.herokuapp.com/api/properties/',data).then(res => {
            dispatch(homeData(res.data))
          })
            
    }
    
}

export default addProperty;