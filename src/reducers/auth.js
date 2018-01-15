import { SET_CURRENT_USER } from '../actions/types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
    isAuthenticated:false
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user)
                
            }
        default: return state
    }
}