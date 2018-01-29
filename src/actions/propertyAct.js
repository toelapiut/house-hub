import axios from 'axios'

function propertyAction(data) {
    console.log(data)
    // var actionfetch('https://hauzhub.herokuapp.com/api/users/register/', {
    //     method: 'post',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    // }).then();
    return dispatch => {
        return axios.post('https://hauzhub.herokuapp.com/api/properties/new/', data).then((res)=>{
            console.log(res)
        })
    }
}

export default propertyAction;

// export function propertyAction(data) {
//     return dispatch => {
//         return axios.post('https://hauzhub.herokuapp.com/api/properties/new/', data)
//     }

// }