import {RECEIVE_PROPERTIES} from '../actions/types'
// import isEmpty from 'lodash/isEmpty'

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
}

export default(state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_PROPERTIES:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.properties
      }
    default:
      return state
  }
}
