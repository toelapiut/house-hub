import axios from "axios"
import {RECEIVE_PROPERTIES} from './types';

export function homeData(properties) {
  return {type: RECEIVE_PROPERTIES, properties}
}

export function loadHome() {
  return dispatch => {
    return axios.get('https://hauzhub.herokuapp.com/api/property_group/').then(res => {
      console.log(res.data)
      dispatch(homeData(res.data))
    })
    // .catch(err)=>{
    //   dispatch({type: "FETCH_PROPERTIES_ERROR",payload: err})
    // }
  }
}
