import {SET_OVERALL_PROPERTIES} from '../actions/types'

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
}

export default(state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OVERALL_PROPERTIES:
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
