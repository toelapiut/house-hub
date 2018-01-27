import axios from "axios"
import {RECEIVE_PROPERTIES} from './types';
import { loadHome } from "./dashboardActions";

export function homeData(properties) {
  return {
    type: RECEIVE_PROPERTIES, 
    properties
  }
}

// action that creates new properties using a POST request to API then
// calls the get api to get all properties and update the store state(redux)
const addProperty = (data) => {
  return dispatch => {
      return axios.post('http://hauzhub.herokuapp.com/api/properties/',data).then(res => {
      axios.get('http://hauzhub.herokuapp.com/api/properties/').then(res => {
        dispatch(homeData(res.data))
      })
    })
  }
}

export default addProperty;