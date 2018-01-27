import {RECEIVE_PAYMENTS} from '../actions/types'
// import isEmpty from 'lodash/isEmpty'

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
}

export default(state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_PAYMENTS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
      }
    default:
      return state
  }
}
