import axios from "axios"
import {RECEIVE_HOUSES} from './types';
// import { loadHome } from "./dashboardActions";

// export function homeData(properties) {
//   return {
//     type: RECEIVE_PROPERTIES, 
//     properties
//   }
// }

// action that creates new properties using a POST request to API then
// calls the get api to get all properties and update the store state(redux)
const addHouse = (data) => {
    // console.log('====================================');
    // console.log("addHouse.action:post api to add house:data=>",data);
    // console.log('====================================');
  return dispatch => {
      return axios.post('https://hauzhub.herokuapp.com/api/houses/',data).then(res => {
          console.log('====================================');
          console.log("addHouse.action success POST",res);
          console.log('====================================');
    //   axios.get('http://hauzhub.herokuapp.com/api/properties/').then(res => {
    //     dispatch(homeData(res.data))
    //   })
    })
  }
}

export default addHouse;