import axios from "axios"
import {RECEIVE_PROPERTIES,RECEIVE_PAYMENTS} from './types';

export function homeData(properties) {
  return {
    type: RECEIVE_PROPERTIES, 
    properties
  }
}
export function paymentsData(payload) {
  return {
    type: RECEIVE_PAYMENTS,
    payload
  }
}

export function loadHome() {
  // console.log("we are at")
  return dispatch => {
    return{
     first:axios.get('http://hauzhub.herokuapp.com/api/properties/').then(res => {
      dispatch(homeData(res.data))
    }),
     second:axios.get('http://hauzhub.herokuapp.com/api/payment/new/').then(res => {
      dispatch(paymentsData(res.data))
    })
  }
  
    // .catch(err)=>{
    //   dispatch({type: "FETCH_PROPERTIES_ERROR",payload: err})
    // }
  }
}
