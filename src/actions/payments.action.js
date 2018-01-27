import axios from "axios"
import {RECEIVE_PAYMENTS} from './types';

export function paymentsData(payload) {
    return {
      type: RECEIVE_PAYMENTS,
      payload
    }
  }

export function loadPayments() {
    return dispatch => {
      // console.log('load payments is live')
      return axios.get('http://hauzhub.herokuapp.com/api/payment/new/').then(res => {
        dispatch(paymentsData(res.data))
      })
    }
  }