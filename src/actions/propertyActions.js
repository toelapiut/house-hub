import axios from "axios"
import {SET_OVERALL_PROPERTIES,SET_CURRENT_PROPERTY} from './types';

export function overallProperties(payload) {
  // console.log('====================================');
  // console.log("property.action.js",payload);
  // console.log('====================================');
  return {
    type: SET_OVERALL_PROPERTIES, 
    payload
  }
}
export function getPropertyData(payload) {
  return {
    type: SET_CURRENT_PROPERTY, 
    payload
  }
}

export function propertyData(payload,propertyStatus) {
  console.log('====================================');
  console.log("propertyData:property.action.js",payload);
  // getPropertyData(payload)
  return dispatch => {
    return{
      first:axios.get('https://hauzhub.herokuapp.com/api/property/' + payload.property + '/').then(res => {
      dispatch(getPropertyData(res.data))
      })
    }
  }
  console.log('====================================');

    // return {type: SET_OVERALL_PROPERTIES, propertyStatus}
  }

  // function getPropertyData() {
  //   // console.log("we are at")
  //   return dispatch => {
  //     return{
  //      first:axios.get('http://hauzhub.herokuapp.com/api/properties/').then(res => {
  //       dispatch(homeData(res.data))
  //       })
  //     }
  //   }
  // }